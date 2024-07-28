### USERS TABLE 

CREATE TABLE users (

    id INT AUTO_INCREMENT PRIMARY KEY,
    
    name VARCHAR(100) NOT NULL,
    
    email VARCHAR(255) NOT NULL UNIQUE,
    
    password VARCHAR(255) NOT NULL,
    
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

### QUEUE TABLE 

CREATE TABLE queue (

    id INT AUTO_INCREMENT PRIMARY KEY,
    
    user_id INT NOT NULL,
    
    queue_name VARCHAR(100) NOT NULL,
    
    joined_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    
    FOREIGN KEY (user_id) REFERENCES users(id)
    
);

