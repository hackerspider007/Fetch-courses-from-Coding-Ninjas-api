

$( "#btn" ).click(fetchCourses);


function fetchCourses() {
    
    $("#container").css("display", "none");
    


    $.get("https://codingninjas.in/api/v3/courses", function (responseObj, status) {
        

        
        $('body').append(`<div id="containerDiv" style="display: flex; flex-wrap:wrap;  margin-top: 50px;  margin-left: 85px;"></div>`);
        $('body').css("margin-left", "25px");

        let coursesArr = responseObj.data.courses;


        for (let i = 0; i < coursesArr.length; i++){
            
        let courseImage = coursesArr[i].preview_image_url;
        let courseName = coursesArr[i].name;
        let courseLevel = coursesArr[i].level;
            
        if (courseImage == "") {
                
            $('#containerDiv').append(

        `<div id="courseInfo" class="margin" style="height:297px; width:275px;  box-shadow: 0px 0px 3px grey; display:flex; flex-direction:column; flex-wrap: wrap; justify-content: center;" > 
        
            <img  src='https://files.codingninjas.in/0000000000001176.png' style="height: 200px;width: 275px; margin-top:-23px;">
            
            <p style="margin-left:20px;">${courseName}</p>
            
            <p style="align-self:flex-end; margin-right:20px;">${courseLevel}</p> 
        
        </div> `
                
            );

        }
            
        else {
                
                    
            $('#containerDiv').append(
            
        ` <div id="courseInfo" class="margin" style="height:297px; width:275px;  box-shadow: 0px 0px 3px grey; display:flex; flex-direction:column; flex-wrap: wrap; justify-content: center;" > 
        
            <img  src='${courseImage}' style="height: 200px;width: 275px; margin-top:-23px;">
            
            <p style="margin-left:20px;">${courseName}</p>
            
            <p style="align-self:flex-end; margin-right:20px;">${courseLevel}</p>  
        
        </div> `
             
            );

        }

        console.log(responseObj.data.courses[i]);

        }
      

        $('.margin').css('margin-top','65px');
        $('.margin').css('margin-right', '65px');
        
    });
     

}
     

 
  














