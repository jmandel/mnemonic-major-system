// Compiled by ClojureScript 0.0-2356
goog.provide('cognitect.transit');
goog.require('cljs.core');
goog.require('goog.math.Long');
goog.require('com.cognitect.transit.eq');
goog.require('com.cognitect.transit.eq');
goog.require('com.cognitect.transit.types');
goog.require('com.cognitect.transit.types');
goog.require('com.cognitect.transit');
goog.require('com.cognitect.transit');
cljs.core.enable_console_print_BANG_();
com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$ = true;
com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){var this$__$1 = this;return this$__$1.equiv(other);
});
com.cognitect.transit.types.UUID.prototype.cljs$core$IEquiv$ = true;
com.cognitect.transit.types.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){var this$__$1 = this;return this$__$1.equiv(other);
});
goog.math.Long.prototype.cljs$core$IEquiv$ = true;
goog.math.Long.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){var this$__$1 = this;return this$__$1.equiv(other);
});
com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$ = true;
com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){var this$__$1 = this;var G__23551 = this$__$1;return (com.cognitect.transit.eq.hashCode.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.eq.hashCode.cljs$core$IFn$_invoke$arity$1(G__23551) : com.cognitect.transit.eq.hashCode.call(null,G__23551));
});
com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$ = true;
com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){var this$__$1 = this;var G__23552 = this$__$1;return (com.cognitect.transit.eq.hashCode.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.eq.hashCode.cljs$core$IFn$_invoke$arity$1(G__23552) : com.cognitect.transit.eq.hashCode.call(null,G__23552));
});
goog.math.Long.prototype.cljs$core$IHash$ = true;
goog.math.Long.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){var this$__$1 = this;var G__23553 = this$__$1;return (com.cognitect.transit.eq.hashCode.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.eq.hashCode.cljs$core$IFn$_invoke$arity$1(G__23553) : com.cognitect.transit.eq.hashCode.call(null,G__23553));
});
cognitect.transit.opts_merge = (function opts_merge(a,b){var seq__23558_23562 = cljs.core.seq(cljs.core.js_keys(b));var chunk__23559_23563 = null;var count__23560_23564 = (0);var i__23561_23565 = (0);while(true){
if((i__23561_23565 < count__23560_23564))
{var k_23566 = chunk__23559_23563.cljs$core$IIndexed$_nth$arity$2(null,i__23561_23565);var v_23567 = (b[k_23566]);(a[k_23566] = v_23567);
{
var G__23568 = seq__23558_23562;
var G__23569 = chunk__23559_23563;
var G__23570 = count__23560_23564;
var G__23571 = (i__23561_23565 + (1));
seq__23558_23562 = G__23568;
chunk__23559_23563 = G__23569;
count__23560_23564 = G__23570;
i__23561_23565 = G__23571;
continue;
}
} else
{var temp__4126__auto___23572 = cljs.core.seq(seq__23558_23562);if(temp__4126__auto___23572)
{var seq__23558_23573__$1 = temp__4126__auto___23572;if(cljs.core.chunked_seq_QMARK_(seq__23558_23573__$1))
{var c__4438__auto___23574 = cljs.core.chunk_first(seq__23558_23573__$1);{
var G__23575 = cljs.core.chunk_rest(seq__23558_23573__$1);
var G__23576 = c__4438__auto___23574;
var G__23577 = cljs.core.count(c__4438__auto___23574);
var G__23578 = (0);
seq__23558_23562 = G__23575;
chunk__23559_23563 = G__23576;
count__23560_23564 = G__23577;
i__23561_23565 = G__23578;
continue;
}
} else
{var k_23579 = cljs.core.first(seq__23558_23573__$1);var v_23580 = (b[k_23579]);(a[k_23579] = v_23580);
{
var G__23581 = cljs.core.next(seq__23558_23573__$1);
var G__23582 = null;
var G__23583 = (0);
var G__23584 = (0);
seq__23558_23562 = G__23581;
chunk__23559_23563 = G__23582;
count__23560_23564 = G__23583;
i__23561_23565 = G__23584;
continue;
}
}
} else
{}
}
break;
}
return a;
});

/**
* @constructor
*/
cognitect.transit.MapBuilder = (function (){
})
cognitect.transit.MapBuilder.cljs$lang$type = true;
cognitect.transit.MapBuilder.cljs$lang$ctorStr = "cognitect.transit/MapBuilder";
cognitect.transit.MapBuilder.cljs$lang$ctorPrWriter = (function (this__4245__auto__,writer__4246__auto__,opt__4247__auto__){return cljs.core._write(writer__4246__auto__,"cognitect.transit/MapBuilder");
});
cognitect.transit.MapBuilder.prototype.init = (function (node){var self__ = this;
var _ = this;return cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY);
});
cognitect.transit.MapBuilder.prototype.add = (function (m,k,v,node){var self__ = this;
var _ = this;return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m,k,v);
});
cognitect.transit.MapBuilder.prototype.finalize = (function (m,node){var self__ = this;
var _ = this;return cljs.core.persistent_BANG_(m);
});
cognitect.transit.MapBuilder.prototype.fromArray = (function (arr,node){var self__ = this;
var _ = this;var G__23585 = arr;var G__23586 = true;var G__23587 = true;return (cljs.core.PersistentArrayMap.fromArray.cljs$core$IFn$_invoke$arity$3 ? cljs.core.PersistentArrayMap.fromArray.cljs$core$IFn$_invoke$arity$3(G__23585,G__23586,G__23587) : cljs.core.PersistentArrayMap.fromArray.call(null,G__23585,G__23586,G__23587));
});
cognitect.transit.__GT_MapBuilder = (function __GT_MapBuilder(){return (new cognitect.transit.MapBuilder());
});

/**
* @constructor
*/
cognitect.transit.VectorBuilder = (function (){
})
cognitect.transit.VectorBuilder.cljs$lang$type = true;
cognitect.transit.VectorBuilder.cljs$lang$ctorStr = "cognitect.transit/VectorBuilder";
cognitect.transit.VectorBuilder.cljs$lang$ctorPrWriter = (function (this__4245__auto__,writer__4246__auto__,opt__4247__auto__){return cljs.core._write(writer__4246__auto__,"cognitect.transit/VectorBuilder");
});
cognitect.transit.VectorBuilder.prototype.init = (function (node){var self__ = this;
var _ = this;return cljs.core.transient$(cljs.core.PersistentVector.EMPTY);
});
cognitect.transit.VectorBuilder.prototype.add = (function (v,x,node){var self__ = this;
var _ = this;return cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(v,x);
});
cognitect.transit.VectorBuilder.prototype.finalize = (function (v,node){var self__ = this;
var _ = this;return cljs.core.persistent_BANG_(v);
});
cognitect.transit.VectorBuilder.prototype.fromArray = (function (arr,node){var self__ = this;
var _ = this;var G__23588 = arr;var G__23589 = true;return (cljs.core.PersistentVector.fromArray.cljs$core$IFn$_invoke$arity$2 ? cljs.core.PersistentVector.fromArray.cljs$core$IFn$_invoke$arity$2(G__23588,G__23589) : cljs.core.PersistentVector.fromArray.call(null,G__23588,G__23589));
});
cognitect.transit.__GT_VectorBuilder = (function __GT_VectorBuilder(){return (new cognitect.transit.VectorBuilder());
});
/**
* Return a transit reader. type may be either :json or :json-verbose.
* opts may be a map optionally containing a :handlers entry. The value
* of :handlers should be map from tag to a decoder function which returns
* then in-memory representation of the semantic transit value.
*/
cognitect.transit.reader = (function() {
var reader = null;
var reader__1 = (function (type){return reader.cljs$core$IFn$_invoke$arity$2(type,null);
});
var reader__2 = (function (type,opts){var G__23594 = cljs.core.name(type);var G__23595 = cognitect.transit.opts_merge({"prefersStrings": false, "arrayBuilder": (new cognitect.transit.VectorBuilder()), "mapBuilder": (new cognitect.transit.MapBuilder()), "handlers": {"cmap": ((function (G__23594){
return (function (v){var i = (0);var ret = cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY);while(true){
if((i < v.length))
{{
var G__23596 = (i + (2));
var G__23597 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(ret,(v[i]),(v[(i + (1))]));
i = G__23596;
ret = G__23597;
continue;
}
} else
{return cljs.core.persistent_BANG_(ret);
}
break;
}
});})(G__23594))
, "list": ((function (G__23594){
return (function (v){return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.List.EMPTY,v.reverse());
});})(G__23594))
, "set": ((function (G__23594){
return (function (v){return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,v);
});})(G__23594))
, ":": ((function (G__23594){
return (function (v){return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(v);
});})(G__23594))
, "$": ((function (G__23594){
return (function (v){return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(v);
});})(G__23594))
}},cljs.core.clj__GT_js(opts));return (com.cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2 ? com.cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2(G__23594,G__23595) : com.cognitect.transit.reader.call(null,G__23594,G__23595));
});
reader = function(type,opts){
switch(arguments.length){
case 1:
return reader__1.call(this,type);
case 2:
return reader__2.call(this,type,opts);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
reader.cljs$core$IFn$_invoke$arity$1 = reader__1;
reader.cljs$core$IFn$_invoke$arity$2 = reader__2;
return reader;
})()
;
/**
* Read a transit encoded string into ClojureScript values given a
* transit reader.
*/
cognitect.transit.read = (function read(r,str){return r.read(str);
});

/**
* @constructor
*/
cognitect.transit.KeywordHandler = (function (){
})
cognitect.transit.KeywordHandler.cljs$lang$type = true;
cognitect.transit.KeywordHandler.cljs$lang$ctorStr = "cognitect.transit/KeywordHandler";
cognitect.transit.KeywordHandler.cljs$lang$ctorPrWriter = (function (this__4245__auto__,writer__4246__auto__,opt__4247__auto__){return cljs.core._write(writer__4246__auto__,"cognitect.transit/KeywordHandler");
});
cognitect.transit.KeywordHandler.prototype.tag = (function (v){var self__ = this;
var _ = this;return ":";
});
cognitect.transit.KeywordHandler.prototype.rep = (function (v){var self__ = this;
var _ = this;return v.fqn;
});
cognitect.transit.KeywordHandler.prototype.stringRep = (function (v){var self__ = this;
var _ = this;return v.fqn;
});
cognitect.transit.__GT_KeywordHandler = (function __GT_KeywordHandler(){return (new cognitect.transit.KeywordHandler());
});

/**
* @constructor
*/
cognitect.transit.SymbolHandler = (function (){
})
cognitect.transit.SymbolHandler.cljs$lang$type = true;
cognitect.transit.SymbolHandler.cljs$lang$ctorStr = "cognitect.transit/SymbolHandler";
cognitect.transit.SymbolHandler.cljs$lang$ctorPrWriter = (function (this__4245__auto__,writer__4246__auto__,opt__4247__auto__){return cljs.core._write(writer__4246__auto__,"cognitect.transit/SymbolHandler");
});
cognitect.transit.SymbolHandler.prototype.tag = (function (v){var self__ = this;
var _ = this;return "$";
});
cognitect.transit.SymbolHandler.prototype.rep = (function (v){var self__ = this;
var _ = this;return v.str;
});
cognitect.transit.SymbolHandler.prototype.stringRep = (function (v){var self__ = this;
var _ = this;return v.str;
});
cognitect.transit.__GT_SymbolHandler = (function __GT_SymbolHandler(){return (new cognitect.transit.SymbolHandler());
});

/**
* @constructor
*/
cognitect.transit.ListHandler = (function (){
})
cognitect.transit.ListHandler.cljs$lang$type = true;
cognitect.transit.ListHandler.cljs$lang$ctorStr = "cognitect.transit/ListHandler";
cognitect.transit.ListHandler.cljs$lang$ctorPrWriter = (function (this__4245__auto__,writer__4246__auto__,opt__4247__auto__){return cljs.core._write(writer__4246__auto__,"cognitect.transit/ListHandler");
});
cognitect.transit.ListHandler.prototype.tag = (function (v){var self__ = this;
var _ = this;return "list";
});
cognitect.transit.ListHandler.prototype.rep = (function (v){var self__ = this;
var _ = this;var ret = [];var seq__23598_23604 = cljs.core.seq(v);var chunk__23599_23605 = null;var count__23600_23606 = (0);var i__23601_23607 = (0);while(true){
if((i__23601_23607 < count__23600_23606))
{var x_23608 = chunk__23599_23605.cljs$core$IIndexed$_nth$arity$2(null,i__23601_23607);ret.push(x_23608);
{
var G__23609 = seq__23598_23604;
var G__23610 = chunk__23599_23605;
var G__23611 = count__23600_23606;
var G__23612 = (i__23601_23607 + (1));
seq__23598_23604 = G__23609;
chunk__23599_23605 = G__23610;
count__23600_23606 = G__23611;
i__23601_23607 = G__23612;
continue;
}
} else
{var temp__4126__auto___23613 = cljs.core.seq(seq__23598_23604);if(temp__4126__auto___23613)
{var seq__23598_23614__$1 = temp__4126__auto___23613;if(cljs.core.chunked_seq_QMARK_(seq__23598_23614__$1))
{var c__4438__auto___23615 = cljs.core.chunk_first(seq__23598_23614__$1);{
var G__23616 = cljs.core.chunk_rest(seq__23598_23614__$1);
var G__23617 = c__4438__auto___23615;
var G__23618 = cljs.core.count(c__4438__auto___23615);
var G__23619 = (0);
seq__23598_23604 = G__23616;
chunk__23599_23605 = G__23617;
count__23600_23606 = G__23618;
i__23601_23607 = G__23619;
continue;
}
} else
{var x_23620 = cljs.core.first(seq__23598_23614__$1);ret.push(x_23620);
{
var G__23621 = cljs.core.next(seq__23598_23614__$1);
var G__23622 = null;
var G__23623 = (0);
var G__23624 = (0);
seq__23598_23604 = G__23621;
chunk__23599_23605 = G__23622;
count__23600_23606 = G__23623;
i__23601_23607 = G__23624;
continue;
}
}
} else
{}
}
break;
}
var G__23602 = "array";var G__23603 = ret;return (com.cognitect.transit.tagged.cljs$core$IFn$_invoke$arity$2 ? com.cognitect.transit.tagged.cljs$core$IFn$_invoke$arity$2(G__23602,G__23603) : com.cognitect.transit.tagged.call(null,G__23602,G__23603));
});
cognitect.transit.ListHandler.prototype.stringRep = (function (v){var self__ = this;
var _ = this;return null;
});
cognitect.transit.__GT_ListHandler = (function __GT_ListHandler(){return (new cognitect.transit.ListHandler());
});

/**
* @constructor
*/
cognitect.transit.MapHandler = (function (){
})
cognitect.transit.MapHandler.cljs$lang$type = true;
cognitect.transit.MapHandler.cljs$lang$ctorStr = "cognitect.transit/MapHandler";
cognitect.transit.MapHandler.cljs$lang$ctorPrWriter = (function (this__4245__auto__,writer__4246__auto__,opt__4247__auto__){return cljs.core._write(writer__4246__auto__,"cognitect.transit/MapHandler");
});
cognitect.transit.MapHandler.prototype.tag = (function (v){var self__ = this;
var _ = this;return "map";
});
cognitect.transit.MapHandler.prototype.rep = (function (v){var self__ = this;
var _ = this;return v;
});
cognitect.transit.MapHandler.prototype.stringRep = (function (v){var self__ = this;
var _ = this;return null;
});
cognitect.transit.__GT_MapHandler = (function __GT_MapHandler(){return (new cognitect.transit.MapHandler());
});

/**
* @constructor
*/
cognitect.transit.SetHandler = (function (){
})
cognitect.transit.SetHandler.cljs$lang$type = true;
cognitect.transit.SetHandler.cljs$lang$ctorStr = "cognitect.transit/SetHandler";
cognitect.transit.SetHandler.cljs$lang$ctorPrWriter = (function (this__4245__auto__,writer__4246__auto__,opt__4247__auto__){return cljs.core._write(writer__4246__auto__,"cognitect.transit/SetHandler");
});
cognitect.transit.SetHandler.prototype.tag = (function (v){var self__ = this;
var _ = this;return "set";
});
cognitect.transit.SetHandler.prototype.rep = (function (v){var self__ = this;
var _ = this;var ret = [];var seq__23625_23631 = cljs.core.seq(v);var chunk__23626_23632 = null;var count__23627_23633 = (0);var i__23628_23634 = (0);while(true){
if((i__23628_23634 < count__23627_23633))
{var x_23635 = chunk__23626_23632.cljs$core$IIndexed$_nth$arity$2(null,i__23628_23634);ret.push(x_23635);
{
var G__23636 = seq__23625_23631;
var G__23637 = chunk__23626_23632;
var G__23638 = count__23627_23633;
var G__23639 = (i__23628_23634 + (1));
seq__23625_23631 = G__23636;
chunk__23626_23632 = G__23637;
count__23627_23633 = G__23638;
i__23628_23634 = G__23639;
continue;
}
} else
{var temp__4126__auto___23640 = cljs.core.seq(seq__23625_23631);if(temp__4126__auto___23640)
{var seq__23625_23641__$1 = temp__4126__auto___23640;if(cljs.core.chunked_seq_QMARK_(seq__23625_23641__$1))
{var c__4438__auto___23642 = cljs.core.chunk_first(seq__23625_23641__$1);{
var G__23643 = cljs.core.chunk_rest(seq__23625_23641__$1);
var G__23644 = c__4438__auto___23642;
var G__23645 = cljs.core.count(c__4438__auto___23642);
var G__23646 = (0);
seq__23625_23631 = G__23643;
chunk__23626_23632 = G__23644;
count__23627_23633 = G__23645;
i__23628_23634 = G__23646;
continue;
}
} else
{var x_23647 = cljs.core.first(seq__23625_23641__$1);ret.push(x_23647);
{
var G__23648 = cljs.core.next(seq__23625_23641__$1);
var G__23649 = null;
var G__23650 = (0);
var G__23651 = (0);
seq__23625_23631 = G__23648;
chunk__23626_23632 = G__23649;
count__23627_23633 = G__23650;
i__23628_23634 = G__23651;
continue;
}
}
} else
{}
}
break;
}
var G__23629 = "array";var G__23630 = ret;return (com.cognitect.transit.tagged.cljs$core$IFn$_invoke$arity$2 ? com.cognitect.transit.tagged.cljs$core$IFn$_invoke$arity$2(G__23629,G__23630) : com.cognitect.transit.tagged.call(null,G__23629,G__23630));
});
cognitect.transit.SetHandler.prototype.stringRep = (function (){var self__ = this;
var v = this;return null;
});
cognitect.transit.__GT_SetHandler = (function __GT_SetHandler(){return (new cognitect.transit.SetHandler());
});

/**
* @constructor
*/
cognitect.transit.VectorHandler = (function (){
})
cognitect.transit.VectorHandler.cljs$lang$type = true;
cognitect.transit.VectorHandler.cljs$lang$ctorStr = "cognitect.transit/VectorHandler";
cognitect.transit.VectorHandler.cljs$lang$ctorPrWriter = (function (this__4245__auto__,writer__4246__auto__,opt__4247__auto__){return cljs.core._write(writer__4246__auto__,"cognitect.transit/VectorHandler");
});
cognitect.transit.VectorHandler.prototype.tag = (function (v){var self__ = this;
var _ = this;return "array";
});
cognitect.transit.VectorHandler.prototype.rep = (function (v){var self__ = this;
var _ = this;var ret = [];var seq__23652_23656 = cljs.core.seq(v);var chunk__23653_23657 = null;var count__23654_23658 = (0);var i__23655_23659 = (0);while(true){
if((i__23655_23659 < count__23654_23658))
{var x_23660 = chunk__23653_23657.cljs$core$IIndexed$_nth$arity$2(null,i__23655_23659);ret.push(x_23660);
{
var G__23661 = seq__23652_23656;
var G__23662 = chunk__23653_23657;
var G__23663 = count__23654_23658;
var G__23664 = (i__23655_23659 + (1));
seq__23652_23656 = G__23661;
chunk__23653_23657 = G__23662;
count__23654_23658 = G__23663;
i__23655_23659 = G__23664;
continue;
}
} else
{var temp__4126__auto___23665 = cljs.core.seq(seq__23652_23656);if(temp__4126__auto___23665)
{var seq__23652_23666__$1 = temp__4126__auto___23665;if(cljs.core.chunked_seq_QMARK_(seq__23652_23666__$1))
{var c__4438__auto___23667 = cljs.core.chunk_first(seq__23652_23666__$1);{
var G__23668 = cljs.core.chunk_rest(seq__23652_23666__$1);
var G__23669 = c__4438__auto___23667;
var G__23670 = cljs.core.count(c__4438__auto___23667);
var G__23671 = (0);
seq__23652_23656 = G__23668;
chunk__23653_23657 = G__23669;
count__23654_23658 = G__23670;
i__23655_23659 = G__23671;
continue;
}
} else
{var x_23672 = cljs.core.first(seq__23652_23666__$1);ret.push(x_23672);
{
var G__23673 = cljs.core.next(seq__23652_23666__$1);
var G__23674 = null;
var G__23675 = (0);
var G__23676 = (0);
seq__23652_23656 = G__23673;
chunk__23653_23657 = G__23674;
count__23654_23658 = G__23675;
i__23655_23659 = G__23676;
continue;
}
}
} else
{}
}
break;
}
return ret;
});
cognitect.transit.VectorHandler.prototype.stringRep = (function (v){var self__ = this;
var _ = this;return null;
});
cognitect.transit.__GT_VectorHandler = (function __GT_VectorHandler(){return (new cognitect.transit.VectorHandler());
});
/**
* Return a transit writer. type maybe either :json or :json-verbose.
* opts is a map containing a :handlers entry. :handlers is a JavaScript
* array of interleaved type constructors and handler instances for those
* type constructors.
*/
cognitect.transit.writer = (function() {
var writer = null;
var writer__1 = (function (type){return writer.cljs$core$IFn$_invoke$arity$2(type,null);
});
var writer__2 = (function (type,opts){var keyword_handler = (new cognitect.transit.KeywordHandler());var symbol_handler = (new cognitect.transit.SymbolHandler());var list_handler = (new cognitect.transit.ListHandler());var map_handler = (new cognitect.transit.MapHandler());var set_handler = (new cognitect.transit.SetHandler());var vector_handler = (new cognitect.transit.VectorHandler());var handlers = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.PersistentHashMap.fromArrays([cljs.core.PersistentHashMap,cljs.core.Cons,cljs.core.PersistentArrayMap,cljs.core.NodeSeq,cljs.core.PersistentQueue,cljs.core.IndexedSeq,cljs.core.Keyword,cljs.core.EmptyList,cljs.core.LazySeq,cljs.core.Subvec,cljs.core.PersistentQueueSeq,cljs.core.ArrayNodeSeq,cljs.core.ValSeq,cljs.core.PersistentArrayMapSeq,cljs.core.PersistentVector,cljs.core.List,cljs.core.RSeq,cljs.core.PersistentHashSet,cljs.core.PersistentTreeMap,cljs.core.KeySeq,cljs.core.ChunkedSeq,cljs.core.PersistentTreeSet,cljs.core.ChunkedCons,cljs.core.Symbol,cljs.core.Range,cljs.core.PersistentTreeMapSeq],[map_handler,list_handler,map_handler,list_handler,list_handler,list_handler,keyword_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,set_handler,map_handler,list_handler,list_handler,set_handler,list_handler,symbol_handler,list_handler,list_handler]),cljs.core.constant$keyword$45.cljs$core$IFn$_invoke$arity$1(opts)], 0));var G__23695 = cljs.core.name(type);var G__23696 = cognitect.transit.opts_merge({"unpack": ((function (G__23695,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,handlers){
return (function (x){if((x instanceof cljs.core.PersistentArrayMap))
{return x.arr;
} else
{return false;
}
});})(G__23695,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,handlers))
, "handlers": (function (){var x23700 = cljs.core.clone(handlers);x23700.forEach = ((function (x23700,G__23695,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,handlers){
return (function (f){var coll = this;var seq__23701 = cljs.core.seq(coll);var chunk__23702 = null;var count__23703 = (0);var i__23704 = (0);while(true){
if((i__23704 < count__23703))
{var vec__23705 = chunk__23702.cljs$core$IIndexed$_nth$arity$2(null,i__23704);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23705,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23705,(1),null);var G__23706_23711 = v;var G__23707_23712 = k;(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__23706_23711,G__23707_23712) : f.call(null,G__23706_23711,G__23707_23712));
{
var G__23713 = seq__23701;
var G__23714 = chunk__23702;
var G__23715 = count__23703;
var G__23716 = (i__23704 + (1));
seq__23701 = G__23713;
chunk__23702 = G__23714;
count__23703 = G__23715;
i__23704 = G__23716;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq(seq__23701);if(temp__4126__auto__)
{var seq__23701__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(seq__23701__$1))
{var c__4438__auto__ = cljs.core.chunk_first(seq__23701__$1);{
var G__23717 = cljs.core.chunk_rest(seq__23701__$1);
var G__23718 = c__4438__auto__;
var G__23719 = cljs.core.count(c__4438__auto__);
var G__23720 = (0);
seq__23701 = G__23717;
chunk__23702 = G__23718;
count__23703 = G__23719;
i__23704 = G__23720;
continue;
}
} else
{var vec__23708 = cljs.core.first(seq__23701__$1);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23708,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23708,(1),null);var G__23709_23721 = v;var G__23710_23722 = k;(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__23709_23721,G__23710_23722) : f.call(null,G__23709_23721,G__23710_23722));
{
var G__23723 = cljs.core.next(seq__23701__$1);
var G__23724 = null;
var G__23725 = (0);
var G__23726 = (0);
seq__23701 = G__23723;
chunk__23702 = G__23724;
count__23703 = G__23725;
i__23704 = G__23726;
continue;
}
}
} else
{return null;
}
}
break;
}
});})(x23700,G__23695,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,handlers))
;
return x23700;
})(), "objectBuilder": ((function (G__23695,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,handlers){
return (function (m,kfn,vfn){return cljs.core.reduce_kv(((function (G__23695,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,handlers){
return (function (obj,k,v){var G__23697 = obj;G__23697.push((function (){var G__23698 = k;return (kfn.cljs$core$IFn$_invoke$arity$1 ? kfn.cljs$core$IFn$_invoke$arity$1(G__23698) : kfn.call(null,G__23698));
})(),(function (){var G__23699 = v;return (vfn.cljs$core$IFn$_invoke$arity$1 ? vfn.cljs$core$IFn$_invoke$arity$1(G__23699) : vfn.call(null,G__23699));
})());
return G__23697;
});})(G__23695,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,handlers))
,["^ "],m);
});})(G__23695,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,handlers))
},cljs.core.clj__GT_js(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(opts,cljs.core.constant$keyword$45)));return (com.cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2 ? com.cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2(G__23695,G__23696) : com.cognitect.transit.writer.call(null,G__23695,G__23696));
});
writer = function(type,opts){
switch(arguments.length){
case 1:
return writer__1.call(this,type);
case 2:
return writer__2.call(this,type,opts);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
writer.cljs$core$IFn$_invoke$arity$1 = writer__1;
writer.cljs$core$IFn$_invoke$arity$2 = writer__2;
return writer;
})()
;
/**
* Encode an object into a transit string given a transit writer.
*/
cognitect.transit.write = (function write(w,o){return w.write(o);
});
/**
* Construct a read handler. Implemented as identity, exists primarily
* for API compatiblity with transit-clj
*/
cognitect.transit.read_handler = (function read_handler(from_rep){return from_rep;
});
/**
* Creates a transit write handler whose tag, rep,
* stringRep, and verboseWriteHandler methods
* invoke the provided fns.
*/
cognitect.transit.write_handler = (function() {
var write_handler = null;
var write_handler__2 = (function (tag_fn,rep_fn){return write_handler.cljs$core$IFn$_invoke$arity$4(tag_fn,rep_fn,null,null);
});
var write_handler__3 = (function (tag_fn,rep_fn,str_rep_fn){return write_handler.cljs$core$IFn$_invoke$arity$4(tag_fn,rep_fn,str_rep_fn,null);
});
var write_handler__4 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn){if(typeof cognitect.transit.t23741 !== 'undefined')
{} else
{
/**
* @constructor
*/
cognitect.transit.t23741 = (function (verbose_handler_fn,str_rep_fn,rep_fn,tag_fn,write_handler,meta23742){
this.verbose_handler_fn = verbose_handler_fn;
this.str_rep_fn = str_rep_fn;
this.rep_fn = rep_fn;
this.tag_fn = tag_fn;
this.write_handler = write_handler;
this.meta23742 = meta23742;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cognitect.transit.t23741.cljs$lang$type = true;
cognitect.transit.t23741.cljs$lang$ctorStr = "cognitect.transit/t23741";
cognitect.transit.t23741.cljs$lang$ctorPrWriter = (function (this__4245__auto__,writer__4246__auto__,opt__4247__auto__){return cljs.core._write(writer__4246__auto__,"cognitect.transit/t23741");
});
cognitect.transit.t23741.prototype.tag = (function (o){var self__ = this;
var _ = this;var G__23744 = o;return (self__.tag_fn.cljs$core$IFn$_invoke$arity$1 ? self__.tag_fn.cljs$core$IFn$_invoke$arity$1(G__23744) : self__.tag_fn.call(null,G__23744));
});
cognitect.transit.t23741.prototype.rep = (function (o){var self__ = this;
var _ = this;var G__23745 = o;return (self__.rep_fn.cljs$core$IFn$_invoke$arity$1 ? self__.rep_fn.cljs$core$IFn$_invoke$arity$1(G__23745) : self__.rep_fn.call(null,G__23745));
});
cognitect.transit.t23741.prototype.stringRep = (function (o){var self__ = this;
var _ = this;if(cljs.core.truth_(self__.str_rep_fn))
{var G__23746 = o;return (self__.str_rep_fn.cljs$core$IFn$_invoke$arity$1 ? self__.str_rep_fn.cljs$core$IFn$_invoke$arity$1(G__23746) : self__.str_rep_fn.call(null,G__23746));
} else
{return null;
}
});
cognitect.transit.t23741.prototype.getVerboseHandler = (function (){var self__ = this;
var _ = this;if(cljs.core.truth_(self__.verbose_handler_fn))
{return (self__.verbose_handler_fn.cljs$core$IFn$_invoke$arity$0 ? self__.verbose_handler_fn.cljs$core$IFn$_invoke$arity$0() : self__.verbose_handler_fn.call(null));
} else
{return null;
}
});
cognitect.transit.t23741.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23743){var self__ = this;
var _23743__$1 = this;return self__.meta23742;
});
cognitect.transit.t23741.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23743,meta23742__$1){var self__ = this;
var _23743__$1 = this;return (new cognitect.transit.t23741(self__.verbose_handler_fn,self__.str_rep_fn,self__.rep_fn,self__.tag_fn,self__.write_handler,meta23742__$1));
});
cognitect.transit.__GT_t23741 = (function __GT_t23741(verbose_handler_fn__$1,str_rep_fn__$1,rep_fn__$1,tag_fn__$1,write_handler__$1,meta23742){return (new cognitect.transit.t23741(verbose_handler_fn__$1,str_rep_fn__$1,rep_fn__$1,tag_fn__$1,write_handler__$1,meta23742));
});
}
return (new cognitect.transit.t23741(verbose_handler_fn,str_rep_fn,rep_fn,tag_fn,write_handler,null));
});
write_handler = function(tag_fn,rep_fn,str_rep_fn,verbose_handler_fn){
switch(arguments.length){
case 2:
return write_handler__2.call(this,tag_fn,rep_fn);
case 3:
return write_handler__3.call(this,tag_fn,rep_fn,str_rep_fn);
case 4:
return write_handler__4.call(this,tag_fn,rep_fn,str_rep_fn,verbose_handler_fn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
write_handler.cljs$core$IFn$_invoke$arity$2 = write_handler__2;
write_handler.cljs$core$IFn$_invoke$arity$3 = write_handler__3;
write_handler.cljs$core$IFn$_invoke$arity$4 = write_handler__4;
return write_handler;
})()
;
/**
* Construct a tagged value. tag must be a string and rep can
* be any transit encodeable value.
*/
cognitect.transit.tagged_value = (function tagged_value(tag,rep){var G__23749 = tag;var G__23750 = rep;return (com.cognitect.transit.types.taggedValue.cljs$core$IFn$_invoke$arity$2 ? com.cognitect.transit.types.taggedValue.cljs$core$IFn$_invoke$arity$2(G__23749,G__23750) : com.cognitect.transit.types.taggedValue.call(null,G__23749,G__23750));
});
/**
* Returns true if x is a transit tagged value, false otherwise.
*/
cognitect.transit.tagged_value_QMARK_ = (function tagged_value_QMARK_(x){var G__23752 = x;return (com.cognitect.transit.types.isTaggedValue.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isTaggedValue.cljs$core$IFn$_invoke$arity$1(G__23752) : com.cognitect.transit.types.isTaggedValue.call(null,G__23752));
});
/**
* Construct a transit integer value. Returns JavaScript number if
* in the 53bit integer range, a goog.math.Long instance if above. s
* may be a string or a JavaScript number.
*/
cognitect.transit.integer = (function integer(s){var G__23754 = s;return (com.cognitect.transit.types.integer.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.integer.cljs$core$IFn$_invoke$arity$1(G__23754) : com.cognitect.transit.types.integer.call(null,G__23754));
});
/**
* Returns true if x is an integer value between the 53bit and 64bit
* range, false otherwise.
*/
cognitect.transit.integer_QMARK_ = (function integer_QMARK_(x){var G__23756 = x;return (com.cognitect.transit.types.isInteger.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isInteger.cljs$core$IFn$_invoke$arity$1(G__23756) : com.cognitect.transit.types.isInteger.call(null,G__23756));
});
/**
* Construct a big decimal from a string.
*/
cognitect.transit.bigint = (function bigint(s){var G__23758 = s;return (com.cognitect.transit.types.bigInteger.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.bigInteger.cljs$core$IFn$_invoke$arity$1(G__23758) : com.cognitect.transit.types.bigInteger.call(null,G__23758));
});
/**
* Returns true if x is a transit big decimal value, false otherwise.
*/
cognitect.transit.bigint_QMARK_ = (function bigint_QMARK_(x){var G__23760 = x;return (com.cognitect.transit.types.isBigInteger.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isBigInteger.cljs$core$IFn$_invoke$arity$1(G__23760) : com.cognitect.transit.types.isBigInteger.call(null,G__23760));
});
/**
* Construct a big decimal from a string.
*/
cognitect.transit.bigdec = (function bigdec(s){var G__23762 = s;return (com.cognitect.transit.types.bigDecimalValue.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.bigDecimalValue.cljs$core$IFn$_invoke$arity$1(G__23762) : com.cognitect.transit.types.bigDecimalValue.call(null,G__23762));
});
/**
* Returns true if x is a transit big decimal value, false otherwise.
*/
cognitect.transit.bigdec_QMARK_ = (function bigdec_QMARK_(x){var G__23764 = x;return (com.cognitect.transit.types.isBigDecimal.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isBigDecimal.cljs$core$IFn$_invoke$arity$1(G__23764) : com.cognitect.transit.types.isBigDecimal.call(null,G__23764));
});
/**
* Construct a URI from a string.
*/
cognitect.transit.uri = (function uri(s){var G__23766 = s;return (com.cognitect.transit.types.uri.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.uri.cljs$core$IFn$_invoke$arity$1(G__23766) : com.cognitect.transit.types.uri.call(null,G__23766));
});
/**
* Returns true if x is a transit URI value, false otherwise.
*/
cognitect.transit.uri_QMARK_ = (function uri_QMARK_(x){var G__23768 = x;return (com.cognitect.transit.types.isURI.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isURI.cljs$core$IFn$_invoke$arity$1(G__23768) : com.cognitect.transit.types.isURI.call(null,G__23768));
});
/**
* Construct a UUID from a string.
*/
cognitect.transit.uuid = (function uuid(s){var G__23770 = s;return (com.cognitect.transit.types.uuid.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.uuid.cljs$core$IFn$_invoke$arity$1(G__23770) : com.cognitect.transit.types.uuid.call(null,G__23770));
});
/**
* Returns true if x is a transit UUID value, false otherwise.
*/
cognitect.transit.uuid_QMARK_ = (function uuid_QMARK_(x){var G__23772 = x;return (com.cognitect.transit.types.isUUID.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isUUID.cljs$core$IFn$_invoke$arity$1(G__23772) : com.cognitect.transit.types.isUUID.call(null,G__23772));
});
/**
* Construct a transit binary value. s should be base64 encoded
* string.
*/
cognitect.transit.binary = (function binary(s){var G__23774 = s;return (com.cognitect.transit.types.binary.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.binary.cljs$core$IFn$_invoke$arity$1(G__23774) : com.cognitect.transit.types.binary.call(null,G__23774));
});
/**
* Returns true if x is a transit binary value, false otherwise.
*/
cognitect.transit.binary_QMARK_ = (function binary_QMARK_(x){var G__23776 = x;return (com.cognitect.transit.types.isBinary.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isBinary.cljs$core$IFn$_invoke$arity$1(G__23776) : com.cognitect.transit.types.isBinary.call(null,G__23776));
});
/**
* Construct a quoted transit value. x should be a transit
* encodeable value.
*/
cognitect.transit.quoted = (function quoted(x){var G__23778 = x;return (com.cognitect.transit.types.quoted.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.quoted.cljs$core$IFn$_invoke$arity$1(G__23778) : com.cognitect.transit.types.quoted.call(null,G__23778));
});
/**
* Returns true if x is a transit quoted value, false otherwise.
*/
cognitect.transit.quoted_QMARK_ = (function quoted_QMARK_(x){var G__23780 = x;return (com.cognitect.transit.types.isQuoted.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isQuoted.cljs$core$IFn$_invoke$arity$1(G__23780) : com.cognitect.transit.types.isQuoted.call(null,G__23780));
});
/**
* Construct a transit link value. x should be an IMap instance
* containing at a minimum the following keys: :href, :rel. It
* may optionall include :name, :render, and :prompt. :href must
* be a transit URI, all other values are strings, and :render must
* be either :image or :link.
*/
cognitect.transit.link = (function link(x){var G__23782 = x;return (com.cognitect.transit.types.link.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.link.cljs$core$IFn$_invoke$arity$1(G__23782) : com.cognitect.transit.types.link.call(null,G__23782));
});
/**
* Returns true if x a transit link value, false if otherwise.
*/
cognitect.transit.link_QMARK_ = (function link_QMARK_(x){var G__23784 = x;return (com.cognitect.transit.types.isLink.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isLink.cljs$core$IFn$_invoke$arity$1(G__23784) : com.cognitect.transit.types.isLink.call(null,G__23784));
});