/**
 * Wrapper allowing automatic addition of missing vertices when adding edges.
 *
 */

const WithMissingVerticesAdded = function ( G , V ) {

	this.G = G ;
	this.V = V ;

} ;

WithMissingVerticesAdded.prototype.vadd = function ( ...args ) {

	const ref = this.G.vadd( ...args ) ;

	this.V.add( ref ) ;

	return ref ;

} ;

WithMissingVerticesAdded.prototype.vdel = function ( v ) {

	this.V.delete( v ) ;

	this.G.vdel( v ) ;

} ;

WithMissingVerticesAdded.prototype.eadd = function ( u , v , ...args ) {

	if ( !this.V.has( u ) ) {
		this.vadd( u ) ;
		this.V.add( u ) ;
	}

	if ( !this.V.has( v ) ) {
		this.vadd( v ) ;
		this.V.add( v ) ;
	}

	return this.G.eadd( u , v ) ;

} ;

WithMissingVerticesAdded.prototype.edel = function ( e ) {

	return this.G.edel( e ) ;

} ;


WithMissingVerticesAdded.prototype.vitr = function ( ) {

	return this.G.vitr( ) ;

} ;

WithMissingVerticesAdded.prototype.eitr = function ( ) {

	return this.G.eitr( ) ;

} ;

WithMissingVerticesAdded.prototype.iitr = function ( v ) {

	return this.G.iitr( v ) ;

} ;

WithMissingVerticesAdded.prototype.initr = function ( v ) {

	return this.G.initr( v ) ;

} ;

WithMissingVerticesAdded.prototype.outitr = function ( v ) {

	return this.G.outitr( v ) ;

} ;

WithMissingVerticesAdded.prototype.nitr = function ( w ) {

	return this.G.nitr( w ) ;

} ;

WithMissingVerticesAdded.prototype.dsitr = function ( w ) {

	return this.G.dsitr( w ) ;

} ;

WithMissingVerticesAdded.prototype.dpitr = function ( w ) {

	return this.G.dpitr( w ) ;

} ;

WithMissingVerticesAdded.prototype.vertices = WithMissingVerticesAdded.prototype.vitr ;

WithMissingVerticesAdded.prototype.edges = function ( ) {

	return this.G.edges( ) ;

} ;

WithMissingVerticesAdded.prototype.incident = function ( w ) {

	return this.G.incident( w ) ;

} ;

WithMissingVerticesAdded.prototype.ingoing = function ( w ) {

	return this.G.ingoing( w ) ;

} ;

WithMissingVerticesAdded.prototype.outgoing = function ( w ) {

	return this.G.outgoing( w ) ;

} ;

WithMissingVerticesAdded.prototype.endpoints = function ( e ) {

	return this.G.endpoints( e ) ;

} ;

WithMissingVerticesAdded.prototype.reverse = function ( ) {

	return this.G.reverse( ) ;

} ;

exports.WithMissingVerticesAdded = WithMissingVerticesAdded ;
