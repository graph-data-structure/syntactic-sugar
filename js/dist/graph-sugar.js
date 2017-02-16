"use strict";

(function () {

	'use strict';

	var definition = function definition(exports, undefined) {

		/* js/src/vertices */
		/* js/src/vertices/WithMissingVerticesAdded.js */
		/**
   * Wrapper allowing automatic addition of missing vertices when adding edges.
   *
   */

		var WithMissingVerticesAdded = function WithMissingVerticesAdded(G, V) {

			this.G = G;
			this.V = V;
		};

		WithMissingVerticesAdded.prototype.vadd = function () {
			var _G;

			var ref = (_G = this.G).vadd.apply(_G, arguments);

			this.V.add(ref);

			return ref;
		};

		WithMissingVerticesAdded.prototype.vdel = function (v) {

			this.V["delete"](v);

			this.G.vdel(v);
		};

		WithMissingVerticesAdded.prototype.eadd = function (u, v) {

			if (!this.V.has(u)) {
				this.vadd(u);
				this.V.add(u);
			}

			if (!this.V.has(v)) {
				this.vadd(v);
				this.V.add(v);
			}

			return this.G.eadd(u, v);
		};

		WithMissingVerticesAdded.prototype.edel = function (e) {

			return this.G.edel(e);
		};

		WithMissingVerticesAdded.prototype.vitr = function () {

			return this.G.vitr();
		};

		WithMissingVerticesAdded.prototype.eitr = function () {

			return this.G.eitr();
		};

		WithMissingVerticesAdded.prototype.iitr = function (v) {

			return this.G.iitr(v);
		};

		WithMissingVerticesAdded.prototype.initr = function (v) {

			return this.G.initr(v);
		};

		WithMissingVerticesAdded.prototype.outitr = function (v) {

			return this.G.outitr(v);
		};

		WithMissingVerticesAdded.prototype.nitr = function (w) {

			return this.G.nitr(w);
		};

		WithMissingVerticesAdded.prototype.dsitr = function (w) {

			return this.G.dsitr(w);
		};

		WithMissingVerticesAdded.prototype.dpitr = function (w) {

			return this.G.dpitr(w);
		};

		WithMissingVerticesAdded.prototype.vertices = WithMissingVerticesAdded.prototype.vitr;

		WithMissingVerticesAdded.prototype.edges = function () {

			return this.G.edges();
		};

		WithMissingVerticesAdded.prototype.incident = function (w) {

			return this.G.incident(w);
		};

		WithMissingVerticesAdded.prototype.ingoing = function (w) {

			return this.G.ingoing(w);
		};

		WithMissingVerticesAdded.prototype.outgoing = function (w) {

			return this.G.outgoing(w);
		};

		WithMissingVerticesAdded.prototype.endpoints = function (e) {

			return this.G.endpoints(e);
		};

		WithMissingVerticesAdded.prototype.reverse = function () {

			return this.G.reverse();
		};

		exports.WithMissingVerticesAdded = WithMissingVerticesAdded;

		/* js/src/vertices/add_missing_vertices.js */

		var add_missing_vertices = function add_missing_vertices(Graph) {

			return function () {

				return new WithMissingVerticesAdded(new Graph(), new Set());
			};
		};

		exports.add_missing_vertices = add_missing_vertices;

		return exports;
	};
	if (typeof exports === "object") {
		definition(exports);
	} else if (typeof define === "function" && define.amd) {
		define("@aureooms/js-graph-sugar", [], function () {
			return definition({});
		});
	} else if (typeof window === "object" && typeof window.document === "object") {
		definition(window["graphsugar"] = {});
	} else console.error("unable to detect type of module to define for @aureooms/js-graph-sugar");
})();