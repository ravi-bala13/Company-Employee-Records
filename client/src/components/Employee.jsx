import { Navbar } from "./Navbar";
import "../CSS/Employee.css"

export const Employee= () => {
    
    return <div>
       <div id="screen_emp">
           <Navbar />
       <div className="blank1"></div>
           
       <div className="inner_block">
           <div><h2>EMPLOYEE DETAILS...</h2></div>
           <div className="table">
              <div className="table_head">
                  <div className="serial_num">SL.No</div>
                  <div className="emp_name">Employee Name</div>
                  <div className="depatment">Department</div>
                  <div className="gender">Gender</div>
                  <div className="emp_age">Age</div>
                  <div className="emp_salary">Salary</div> 
              </div>  
             

             {/* The below "table content" should be made dynamic acoording to the data */}
              <div className="table_content">
              <div className="table_sub_content">
                  <div className="serial_num">1</div>
                  <div className="emp_name">priya</div>
                  <div className="depatment">ITI</div>
                  <div className="gender">female</div>
                  <div className="emp_age">22</div>
                  <div className="emp_salary">40000</div> 
              </div> 

              <div className="table_sub_content">
                  <div className="serial_num">1</div>
                  <div className="emp_name">priya</div>
                  <div className="depatment">ITI</div>
                  <div className="gender">female</div>
                  <div className="emp_age">22</div>
                  <div className="emp_salary">40000</div> 
              </div> 
              </div>

              
           </div>
        
       </div>

        {/* The below should be changed for pagination according to the datas */}
       <div className="pages_count">
          <div>1</div>
          <div>2</div>
          <div>3</div>
       </div>

       <div className="blank1"></div>
       </div>
    </div>
}
