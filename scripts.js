
    // prevent the page from refreshing when clicking submit on a form
    function handleSubmit(event)
    {
      event.preventDefault(); //prevents the page reload on submit
      document.getElementById("submitResult").style.display='inline';
      window.console.log("Form Submit")
      return false;
    }