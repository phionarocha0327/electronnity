/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/JSP_Servlet/Servlet.java to edit this template
 */
package com.electronnity.controller;


import java.io.IOException;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.Properties;
import java.util.Random;
import java.util.logging.Level;
import java.util.logging.Logger;

import javax.mail.Authenticator;
import javax.mail.Message;
import javax.mail.MessagingException;
import javax.mail.PasswordAuthentication;
import javax.mail.Session;
import javax.mail.Transport;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;
import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

/**
 *
 * @author Aaron
 */

public class forget extends HttpServlet {
    
    private static final long serialVersionUID = 1L;

    // MySQL database connection settings
    private static final String DB_URL = "jdbc:mysql://localhost:3306/electronnity?serverTimezone=UTC";
    private static final String DB_USER = "root";
    private static final String DB_PASSWORD = "Hypernova123";
    
    // Gmail SMTP settings
    private static final String SMTP_HOST = "smtp.gmail.com";
    private static final String SMTP_PORT = "587";
    private static final String SMTP_USERNAME = "aaronsaplala7@gmail.com";
    private static final String SMTP_PASSWORD = "xzzp hgig rqgi dnbe";

    // Allowed email domains
    private static final String[] ALLOWED_DOMAINS = {"gmail.com", "yahoo.com", "hotmail.com", "outlook.live.com"};
    
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
        throws ServletException, IOException {
        String action = request.getServletPath();
        switch (action) {
            case "/forget" -> viewforget(request, response);
            default -> // Handle unknown actions
                response.sendError(HttpServletResponse.SC_NOT_FOUND);
        }
    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        String email = request.getParameter("email");

        // Check if email is valid and has an allowed domain
        if (isValidEmail(email)) {
            // Load the MySQL JDBC driver explicitly
            try {
                Class.forName("com.mysql.cj.jdbc.Driver");
            } catch (ClassNotFoundException e) {
                response.getWriter().println("Error: " + e.getMessage());
                return;
            }

            // Connect to MySQL database
            try (Connection conn = DriverManager.getConnection(DB_URL, DB_USER, DB_PASSWORD);
                 PreparedStatement pstmt = conn.prepareStatement("SELECT * FROM electronnity.clientinfo WHERE email =?")) {
                pstmt.setString(1, email);
                ResultSet rs = pstmt.executeQuery();

                if (rs.next()) {
                    // Email is registered, generate 6-digit PIN
                    String pin = generatePIN();
                    sendPINviaEmail(email, pin);

                    // Store PIN in session
                    HttpSession session = request.getSession();
                    session.setAttribute("pin", pin);
                    session.setAttribute("email", email);

                    response.sendRedirect("verifyPin");
                } else {
                    response.getWriter().println("Email is not registered.");
                    request.getRequestDispatcher("/forget.jsp").forward(request, response);
                }
            } catch (SQLException e) {
                response.getWriter().println("Error: " + e.getMessage());
            } catch (MessagingException ex) {
                Logger.getLogger(forget.class.getName()).log(Level.SEVERE, null, ex);
            }
        } else {
            response.getWriter().println("Invalid email or domain.");
        }
    }
    
    private void viewforget(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        RequestDispatcher fg = getServletContext().getRequestDispatcher(
                "/forget.jsp");
        fg.forward(request, response);
    }

    private boolean isValidEmail(String email) {
        String[] parts = email.split("@");
        if (parts.length!= 2) {
            return false;
        }
        String domain = parts[1];
        for (String allowedDomain : ALLOWED_DOMAINS) {
            if (domain.equalsIgnoreCase(allowedDomain)) {
                return true;
            }
        }
        return false;
    }
    
    private String generatePIN() {
        Random random = new Random();
        int pin = random.nextInt(900000) + 100000; // 6-digit PIN
        return String.valueOf(pin);
    }

    private void sendPINviaEmail(String email, String pin) throws MessagingException {
        Properties props = new Properties();
        props.put("mail.smtp.host", SMTP_HOST);
        props.put("mail.smtp.port", SMTP_PORT);
        props.put("mail.smtp.auth", "true");
        props.put("mail.smtp.starttls.enable", "true");

        Session session = Session.getInstance(props, new Authenticator() {
            @Override
            protected PasswordAuthentication getPasswordAuthentication() {
                return new PasswordAuthentication(SMTP_USERNAME, SMTP_PASSWORD);
            }
        });

        Message message= new MimeMessage(session);
        message.setFrom(new InternetAddress(SMTP_USERNAME));
        message.setRecipients(Message.RecipientType.TO, InternetAddress.parse(email));
        message.setSubject("Password Reset PIN");
        message.setText("Your password reset PIN is: " + pin);

        Transport.send(message);
    }
}