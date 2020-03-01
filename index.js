
const checkBox = document.querySelector( "input[name=check-box]" );

checkBox.addEventListener( 'change', ( e ) =>
{

    if ( e.checked = true ) {
        console.log( e )
        const container = document.getElementById( "container-one" );
        const containertwo = document.getElementById( "container-two" );
        const svg = document.getElementById( "svg" );
        container.classList.toggle( 'darktheme' );
        containertwo.classList.toggle( 'darktheme' );
        svg.classList.toggle( 'white-cog' )
    }
} )