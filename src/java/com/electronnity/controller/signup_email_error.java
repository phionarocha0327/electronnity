/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/JSP_Servlet/Servlet.java to edit this template
 */
package com.electronnity.controller;

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class signup_email_error extends HttpServlet {
    private static final long serialVersionUID = 1L;
    
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        // Check if the request is coming from a valid source
        if (!isValidRequest(request)) {
            response.setStatus(HttpServletResponse.SC_FORBIDDEN);
            return;
        }
        
        /*// Check if the request is coming from a valid source
        if (!isValidRequest(request)) {
            response.sendRedirect(request.getContextPath() + "/error.jsp"); // redirect to error.jsp
            return;
        }*/
        
        // Forward the request to verifyPin.jsp
        request.getRequestDispatcher("/WEB-INF/signup-error-email.jsp").forward(request, response);
    }

    private boolean isValidRequest(HttpServletRequest request) {
        // Check if the request is coming from a valid source
        // For example, you can check the referrer or the request headers
        String referrer = request.getHeader("Referer");
        return referrer!= null && referrer.startsWith("http://localhost:8080/electronnity"); // adjust the URL to your needs
    }
} 