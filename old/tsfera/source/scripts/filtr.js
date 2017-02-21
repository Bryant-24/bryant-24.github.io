function TextChanged()
	{
        var node = document.getElementById("knopka");
        if (node)
        {
        node.style.display = 'inline';
        document.getElementById("cancel").style.display = 'none';
        }
}
function TextDelete()
	{
        var node = document.getElementById("cancel");
        if (node)
        {
        document.getElementById("stroka").value ="";
        node.style.display = 'none';
        }
}
function TextChanged_2()
{
    var node = document.getElementById("knopka_2");
    if (node)
    {
        node.style.display = 'inline';
        document.getElementById("cancel_2").style.display = 'none';
    }
}
function TextDelete_2()
{
    var node = document.getElementById("cancel_2");
    if (node)
    {
        document.getElementById("stroka_2").value ="";
        node.style.display = 'none';
    }
}
function TextChanged_3()
{
    var node = document.getElementById("knopka_3");
    if (node)
    {
        node.style.display = 'inline';
        document.getElementById("cancel_3").style.display = 'none';
    }
}
function TextDelete_3()
{
    var node = document.getElementById("cancel_3");
    if (node)
    {
        document.getElementById("stroka_3").value ="";
        node.style.display = 'none';
    }
}
