var pages = document.querySelectorAll('.container div');
var btns = document.querySelectorAll('.navbar a');
console.log(pages); 
var colors = ['grey','lightgreen','pink','gold'];
function showPage(arg)
{
	closeAll();
	removeBG();
	pages[arg].style.display = 'block';
	pages[arg].style.background = colors[arg];
	btns[arg].style.background = colors[arg];
}
function removeBG()
{
	for(btn of btns)
	{
		btn.style.background = 'none';
	}
}
function closeAll()
{
	for(page of pages)
	{
		page.style.display = 'none';
	}
}