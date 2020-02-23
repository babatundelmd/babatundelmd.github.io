
const checkBox = document.querySelector( "input[name=check-box]" );

checkBox.addEventListener( 'change', ( e ) =>
{
    if ( e.checked = true ) {
        const container = document.getElementById( "container-one" );
        const containertwo = document.getElementById( "container-two" );
        container.classList.toggle( 'darktheme' )
        containertwo.classList.toggle( 'darktheme' )

    }
} )