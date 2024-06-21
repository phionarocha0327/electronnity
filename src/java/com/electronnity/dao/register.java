package com.electronnity.dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.SQLException;

public class register {
    
    public boolean createClient (
            String username,
            String password,
            String email,
            String firstname,
            String middlename,
            String lastname,
            String address,
            String birthday,
            String number) throws ClassNotFoundException {
        
        boolean success = false; 
        Connection conn = null;
        PreparedStatement ps = null;
        
        try {
            
            String query = "INSERT INTO clientinfo ("
                    + "username,"
                    + "password,"
                    + "email,"
                    + "firstname,"
                    + "middlename,"
                    + "lastname,"
                    + "address,"
                    + "birthday,"
                    + "number) "
                    + "VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)";
            
            conn = connect.getConnection();
            ps = conn.prepareStatement(query);
            ps.setString(1, username);
            ps.setString(2, password);
            ps.setString(3, email);
            ps.setString(4, firstname);
            ps.setString(5, middlename);
            ps.setString(6, lastname);
            ps.setString(7, address);
            ps.setString(8, birthday);
            ps.setString(9, number);
            
            int rowsAffected = ps.executeUpdate();
            if (rowsAffected != 0) {    
                success = true;
            }
            
            conn.close();
            
        } catch (SQLException e) {
            System.out.println("SQLException" + e);
        } finally {
            if(ps != null) {
                try {
                    conn.close();
                } catch (SQLException e) {
                    System.out.println("SQLException" + e.getMessage());
                }
            }   
        }
        return success; 
    } 
}


