
var dll = require( "@aureooms/js-dll" ) ;

var spec = require( "@aureooms/js-graph-spec" ) ;
var list = require( "@aureooms/js-adjacency-list" ) ;

var add_missing_vertices = graphsugar.add_missing_vertices ;

var List = dll.DoublyLinkedList ;

spec.MultiGraph( "List with missing vertices added" , add_missing_vertices( list.MultiGraph( List ) ) ) ;
