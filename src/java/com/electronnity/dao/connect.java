package com.electronnity.dao;

import java.sql.Connection;
import java.sql.SQLException;
import java.sql.DriverManager;

    public class connect {

        static Connection conn;
        
        public static Connection getConnection() throws SQLException, ClassNotFoundException {
            try {
                
                String driver = "com.mysql.cj.jdbc.Driver";
                Class.forName(driver);
                
                String url = "jdbc:mysql://localhost:3306/electronnity?serverTimezone=UTC";
                conn = (Connection) DriverManager.getConnection(url, "root", "Hypernova123");
                
            } catch (SQLException e) {
                System.out.println("SQLException" + e); 
            }
            return conn;
        }
}   