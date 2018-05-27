$(function(){
	$("span[id^=misid-]").each(function(){
		$(this).on("click",function(){
			debugger
			pid = this.id.split("-")[1] ; 
			console.log("任务ID，pid = " + pid) ;
			$("#scheduleModal").modal("toggle") ;
			$.post("pages/back/admin/schedule/schedule_details.action",{"pid":pid},function(data){
				debugger
				
				$("#title").html(data.plan.title);
				$("#item").html(data.plan.item);
				$("#amount").html(data.plan.amount);
				$("#starttime").html(data.plan.starttime);
				$("#endtime").html(data.plan.endtime);
				$("#note").html(data.plan.note);
				$("#currentCount").html(data.plan.amount);

				//$("tr[id^=emp--]").each(function(){
					debugger
					for(i=0;i<data.allEmpLevelDept.length;i++){
						// $("#photo").attr("src","upload/emp/"+data.allEmpLevelDept[i].photo);
						// $("ename").html(data.allEmpLevelDept[i].ename);
						$("#ta tbody").prepend("<tr><td>"+data.allEmpLevelDept[i].ename+"</td><td>"+data.allEmpLevelDept[i].title+"</td><td>"+data.allEmpLevelDept[i].dname+"</td><td>"+data.allEmpLevelDept[i].phone+"</td><td>"+"</tr>");
					}
					

				//}) ;




				console.log(data);
				//operateAlert(data==true,"任务人员删除成功！","任务人员删除失败！") ;	
			},"json") ;
		}) ;
	}) ;
})