
const checkBox = document.querySelector( "input[name=check-box]" );

checkBox.addEventListener( 'change', ( e ) =>
{
    if ( e.checked = true ) {
        const container = document.getElementById( "container-one" );
        container.classList.toggle( 'darktheme' )

    }
} )