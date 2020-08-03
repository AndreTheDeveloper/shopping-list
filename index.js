
function main() {
    console.log("hello world")
    
    //the form submission portion
    $("form").submit(event => {
        //prevents reloading of page (old behavior of html)
        event.preventDefault()
    
    //find input
    const value = $("#shopping-list-entry").val()
    console.log(value)

    //how to add items to list note use of backtick ` (next to "1")
    $("ul").append(`
    <li>
        <span class="shopping-item">${value}</span>
        <div class="shopping-item-controls">
          <button class="shopping-item-toggle">
            <span class="button-label">check</span>
          </button>
          <button class="shopping-item-delete">
            <span class="button-label">delete</span>
          </button>
        </div>
      </li>
    `)
    })

    // Next add portion to cross items off list

    // Last add portion to delete items


}

$(main)