package com.electronnity.controller;

import com.electronnity.dao.register;
import java.io.IOException;
import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.logging.Level;
import java.util.logging.Logger;

public class signup extends HttpServlet {

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        String action = request.getServletPath();
        switch (action) {
            
            default -> viewsignup(request, response);
            
        }
    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        try {
            createAccount(request, response);
        } catch (ClassNotFoundException ex) {
            Logger.getLogger(signup.class.getName()).log(Level.SEVERE, null, ex);
        }
    }
    
    private void viewsignup (HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        
        RequestDispatcher sp = getServletContext().getRequestDispatcher(
        "/signup.jsp");
        sp.forward(request, response);
        
    }
    
    private void createAccount(HttpServletRequest request, HttpServletResponse response)
        throws ServletException, IOException, ClassNotFoundException {
    
    String username = request.getParameter("username");
    String password = request.getParameter("password");
    String confirmPass = request.getParameter("confirmPass");
    String email = request.getParameter("email");
    String firstname = request.getParameter("firstname");
    String middlename = request.getParameter("middlename");
    String lastname = request.getParameter("lastname");
    String address = request.getParameter("address");
    String birthday = request.getParameter("birthday");
    String number = request.getParameter("number");

    boolean isValid = true;

    if (username == null || username.trim().isEmpty() || username.length() < 4 || username.length() > 12 ||!username.matches("^(?![\\\\/:\";<>=|?*\\x00-\\x1F])[\\w -.]+$")) {
        response.sendRedirect("signup_username_error");
        return;
    }

    if (password == null || password.trim().isEmpty() || password.length() < 8 || password.length() > 16 ||!password.matches("^(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@$&%*]).+$")) {
        response.sendRedirect("signup_password_error");
        return;
    }

    if (!password.equals(confirmPass) || confirmPass.trim().isEmpty()) {
        response.sendRedirect("signup_confirmpass_error");
        return;
    }

    if (email == null || email.trim().isEmpty() ||!email.matches("^(([^<>()\\[\\]\\\\.,;:\\s@\"]+(\\.[^<>()\\[\\]\\\\.,;:\\s@\"]+)*)|(\".+\"))@(gmail|yahoo|hotmail)\\.[a-zA-Z]{2,}$")) {
        response.sendRedirect("signup_email_error");
        return;
    }

    if (firstname == null || firstname.trim().isEmpty() ||!firstname.matches ("^[a-zA-Z\\s]+$")) {
        response.sendRedirect("signup_firstname_error");
        return;
    }
    
    if (middlename == null || middlename.trim().isEmpty() ||!middlename.matches ("^[a-zA-Z\\s.]+$")) {
        response.sendRedirect("signup_middlename_error");
        return;
    }
    
    if (lastname == null || lastname.trim().isEmpty() ||!lastname.matches ("^[a-zA-Z\\s]+$")) {
        response.sendRedirect("signup_lastname_error");
        return;
    }

    if (address == null || address.trim().isEmpty() ||!address.matches ("^[\\w.,/\\-:@\\s]+$")) {
        response.sendRedirect("signup_address_error");
        return;
    }

    if (birthday == null || birthday.trim().isEmpty() ||!birthday.matches ("^([0-9]{2})\\-([0-9]{2})\\-([0-9]{4})$")) {
         response.sendRedirect("signup_birthday_error");
        return;
    }

    if (number == null || number.trim().isEmpty() ||!number.matches ("^[\\d]{11}$")) {
        response.sendRedirect("signup_number_error");
        return;
    }

    if (isValid) {
        // If all credentials are valid, create the client and store in database
        register reg = new register();
        boolean isRegistered = reg.createClient(username, password, email, firstname, middlename, lastname, address, birthday, number);

            if (isRegistered) {
                /*System.out.println("Registered: " + username + " " + password + " " + email + " " + firstname + " " + middlename + " " + lastname + " " + address + " " + birthday + " " + number); */ // printing for debugging purpose
                response.sendRedirect(request.getContextPath() + "/login.jsp");
                return;
            } else {
                // Registration failed, redirect back to signup page
                response.sendRedirect(request.getContextPath() + "/signup.jsp");
                return;
            }
        }
    }
}


/*      private void createAccount (HttpServletRequest request, HttpServletResponse response)// I'll be needing this just in case if something goes wrong
            throws  ServletException, IOException, ClassNotFoundException {
        
        String username = request.getParameter("username");
        String password = request.getParameter("password");
        String firstname = request.getParameter("firstname");
        String middlename = request.getParameter("middlename");
        String lastname = request.getParameter("lastname");
        String address = request.getParameter("address");
        String birthday = request.getParameter("birthday");
        String number = request.getParameter("number");
    
        register reg = new register();
        reg.createClient(username, password, firstname, middlename, lastname, address, birthday, number); 
        
        response.sendRedirect(request.getContextPath() + "/login"); 
        
        System.out.println(username +  password +  firstname +  middlename +  lastname +  address +  birthday +  number); //printing the data input
    }
}

        private void createClient(HttpServletRequest request, HttpServletResponse response) //old code that don't work
            throws ServletException, IOException {
        
        String username = request.getParameter("username");
        String password = request.getParameter("password");
        String firstname = request.getParameter("firstname");
        String middlename = request.getParameter("middlename");
        String lastname = request.getParameter("lastname");
        String address = request.getParameter("address");
        String birthday = request.getParameter("birthday");
        String number = request.getParameter("number");
        
        EmployeeDao employee = new EmployeeDao();
        ClientModel createEmployee = new ClientModel(
                username, password, firstname, middlename, lastname, address, birthday, number);
        employee.createEmployee(createEmployee);
        response.sendRedirect(request.getContextPath() + "/login");
    
        System.out.println(username +  password +  firstname +  middlename +  lastname +  address +  birthday +  number);
    }
}*/