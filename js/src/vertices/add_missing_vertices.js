
const add_missing_vertices = function ( Graph ) {

	return function ( ) {

		return new WithMissingVerticesAdded( new Graph( ) , new Set( ) ) ;

	} ;

} ;

exports.add_missing_vertices = add_missing_vertices ;
