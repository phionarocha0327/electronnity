/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to changePass this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/JSP_Servlet/Servlet.java to edit this template
 */
package com.electronnity.controller;

import java.io.IOException;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.logging.Level;
import java.util.logging.Logger;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

public class changePass extends HttpServlet {
    private static final long serialVersionUID = 1L;

    // MySQL database connection settings
    private static final String DB_URL = "jdbc:mysql://localhost:3306/electronnity?serverTimezone=UTC";
    private static final String DB_USER = "root";
    private static final String DB_PASSWORD = "Hypernova123";
    
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        // Check if the request is coming from a valid source
        if (!isValidRequest(request)) {
            response.setStatus(HttpServletResponse.SC_FORBIDDEN);
            return;
        }
        // Forward the request to verifyPin.jsp
        request.getRequestDispatcher("/WEB-INF/change.jsp").forward(request, response);
    }

    private boolean isValidRequest(HttpServletRequest request) {
        // Check if the request is coming from a valid source
        // For example, you can check the referrer or the request headers
        String referrer = request.getHeader("Referer");
        return referrer!= null && referrer.startsWith("http://localhost:8080/electronnity"); // adjust the URL to your needs
    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        String newPassword = request.getParameter("newPassword");
        HttpSession session = request.getSession();
        String email = (String) session.getAttribute("email");

        try {
            Class.forName("com.mysql.cj.jdbc.Driver"); // Load the MySQL JDBC driver
            try (Connection conn = DriverManager.getConnection(DB_URL, DB_USER, DB_PASSWORD);
                 PreparedStatement pstmt = conn.prepareStatement("SELECT password FROM electronnity.clientinfo WHERE email =?")) {
                pstmt.setString(1, email);
                ResultSet rs = pstmt.executeQuery();

                if (rs.next()) {
                    // Update the password
                    try (PreparedStatement updatePstmt = conn.prepareStatement("UPDATE electronnity.clientinfo SET password =? WHERE email =?")) {
                        updatePstmt.setString(1, newPassword);
                        updatePstmt.setString(2, email);
                        updatePstmt.executeUpdate();

                        response.getWriter().println("Password changed successfully.");
                        request.getRequestDispatcher("/login.jsp").forward(request, response);
                    }
                } else {
                    response.getWriter().println("Error: Unable to find user account.");
                }
            }
        } catch (SQLException e) {
            response.getWriter().println("Error: " + e.getMessage());
        } catch (ClassNotFoundException ex) {
            Logger.getLogger(changePass.class.getName()).log(Level.SEVERE, null, ex);
        }
    }
}