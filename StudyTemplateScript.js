// JavaScript Document

function selectedMenuItem(clickedMenuItem)
{
	
	var oldMenuItem = document.getElementsByClassName("SelectedMenuItem")[0];
	
	var oldTask = document.getElementById(oldMenuItem.innerHTML);

	var newTask = document.getElementById(clickedMenuItem.innerHTML);

	newTask.classList.remove("HiddenContent");
	newTask.classList.add("VisibleContent");

	oldTask.classList.remove("VisibleContent");
	oldTask.classList.add("HiddenContent");

	clickedMenuItem.classList.remove("MenuItem");
	clickedMenuItem.classList.add("SelectedMenuItem");

	oldMenuItem.classList.remove("SelectedMenuItem");
	oldMenuItem.classList.add("MenuItem");

	/*
	
	var mainContentIframe = document.getElementsByName("MainContent_iframe")[0];
*/
	/*
	
	if(clickedMenuItem.innerHTML == "Welcome")
		{
			
		    mainContentIframe.setAttribute("src","Overview.html");		
		}
	else if (clickedMenuItem.innerHTML == "Task 1")
		{
			newTask = document.getElementById("Task1");
			newTask = document.classList.remove("HiddenContent");
			newTask = document.classList.add("VisibleContent");


			mainContentIframe.setAttribute("src","SummaryTab.html");						
		}
	else {
		mainContentIframe.setAttribute("src","ComingSoon.html");	
	}
	*/
}