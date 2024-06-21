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

public class signup_confirmpass_error extends HttpServlet {
    private static final long serialVersionUID = 1L;
    
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        // Check if the request is coming from a valid source
        if (!isValidRequest(request)) {
            response.setStatus(HttpServletResponse.SC_FORBIDDEN);
            return;
        }
        
        // Check if the user is refreshing the page
        if (isRefreshRequest(request)) {
            response.setStatus(HttpServletResponse.SC_FOUND);
            response.sendRedirect(request.getContextPath() + "/signup.jsp"); // redirect to /signup
            return;
        }
        
        // Set a session attribute to indicate that the user should be redirected to /signup on refresh
            request.getSession().setAttribute("redirectOnRefresh", true);
        
        /*// Check if the request is coming from a valid source
        if (!isValidRequest(request)) {
            response.sendRedirect(request.getContextPath() + "/error.jsp"); // redirect to error.jsp
            return;
        }*/
        
        request.getRequestDispatcher("/WEB-INF/signup-error-confirmpass.jsp").forward(request, response);
    }
    
    private boolean isRefreshRequest(HttpServletRequest request) {
        // Check if the request is a refresh request (e.g., F5 or browser refresh button)
        String userAgent = request.getHeader("User-Agent");
        String referer = request.getHeader("Referer");
        return userAgent!= null && referer!= null && referer.equals(request.getRequestURL().toString());
    }

    private boolean isValidRequest(HttpServletRequest request) {
        // Check if the request is coming from a valid source
        // For example, you can check the referrer or the request headers
        String referrer = request.getHeader("Referer");
        return referrer!= null && referrer.startsWith("http://localhost:8080/electronnity"); // adjust the URL to your needs
    }
} 