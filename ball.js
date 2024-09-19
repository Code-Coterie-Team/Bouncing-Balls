function bouncingBall(h,  bounce,  window) {   
    if (h <= 0 || bounce <= 0 || bounce >= 1 || window >= h) {  
        return -1;  
        }  
    let count = 0;  
    if (h > window) {  
        count++;   
        }  
    while (h * bounce > window) {  
            count++; 
             h =h * bounce;   
            if (h > window) {  
                count++; 
            } 
        }  
        return count;  
    } 