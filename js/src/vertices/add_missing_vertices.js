
const add_missing_vertices = function ( Graph ) {

	return function ( ) {

		return new WithMissingVerticesAdded( new Graph( ) , new WeakSet( ) ) ;

	} ;

} ;

exports.add_missing_vertices = add_missing_vertices ;
