        let result = ""
        let value1 = {data:[]}
        let count = 0


        function showReccord(){
            for(i in value1.data){
                result += "<div class='txt1' ><p><img src='./img/p3.png' width='20' height='20'>" + " " +"ผู้เขียน Diary : " + " " + value1.data[i].name + "<br />"
                result += "<img src='./img/p2.png' width='20' height='20'>" +" "+ " เนื้อหา  " + "<div class='txtarea'><textarea  type='text' class='form-control editField'  rows='5' readonly>"+value1.data[i].txt+"</textarea></div><br />"
                result +=  "บันทึกเมื่อ : "  + value1.data[i].date +"</p></div><br />"
               
                document.getElementById('docname').innerHTML = result  
            }
            result=""
            console.log(value1)
            
        }

        $(document).ready(function () {
            $('.editBtn').click(function () {
                if ($('.editField').is('[readonly]')) { 
                    $('.editField').prop('readonly', false);
                    $('.editBtn').html('Edit On'); 
                    $('.editBtn').css("background", "green"); 
                    $('.editBtn').css("border", "green"); 
                } else { 
                    $('.editField').prop('readonly', true);
                    $('.editBtn').html('Edit Off');
                    $('.editBtn').css("background", "red");
                }
            })

            $('.myForm ').submit(function (event){   
            event.preventDefault()
            count += 1
            //alert('Submit')
            let tmpData = {id:count,name:document.getElementById("name").value,txt:document.getElementById("txt").value,date:new Date(),edit:false}
            value1.data.push(tmpData)
            showReccord()   
        })
        })
