// Compiled by ClojureScript 0.0-2356
goog.provide('no.en.core');
goog.require('cljs.core');
goog.require('cljs.reader');
goog.require('clojure.string');
goog.require('goog.crypt.base64');
goog.require('goog.crypt.base64');
goog.require('cljs.reader');
goog.require('clojure.string');
no.en.core.port_number = new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$33,(80),cljs.core.constant$keyword$34,(443),cljs.core.constant$keyword$35,(3306),cljs.core.constant$keyword$36,(5432),cljs.core.constant$keyword$37,(5672)], null);
no.en.core.url_regex = /([^:]+):\/\/(([^:]+):([^@]+)@)?(([^:\/]+)(:([0-9]+))?((\/[^?]*)(\?([^#]*))?)?)(\#(.*))?/;
/**
* Split the string `s` by the regex `pattern`.
*/
no.en.core.split_by_regex = (function split_by_regex(s,pattern){if(cljs.core.sequential_QMARK_(s))
{return s;
} else
{if(cljs.core.not(clojure.string.blank_QMARK_(s)))
{return clojure.string.split.cljs$core$IFn$_invoke$arity$2(s,pattern);
} else
{return null;
}
}
});
/**
* Split the string `s` by comma.
*/
no.en.core.split_by_comma = (function split_by_comma(s){return no.en.core.split_by_regex(s,/\s*,\s*/);
});
/**
* Returns `bytes` as an UTF-8 encoded string.
*/
no.en.core.utf8_string = (function utf8_string(bytes){throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("utf8-string not implemented yet",bytes);
});
/**
* Returns `s` as a Base64 encoded string.
*/
no.en.core.base64_encode = (function base64_encode(bytes){if(cljs.core.truth_(bytes))
{var G__22967 = bytes;var G__22968 = false;return goog.crypt.base64.encodeString(G__22967,G__22968);
} else
{return null;
}
});
/**
* Returns `s` as a Base64 decoded string.
*/
no.en.core.base64_decode = (function base64_decode(s){if(cljs.core.truth_(s))
{var G__22971 = s;var G__22972 = false;return goog.crypt.base64.decodeString(G__22971,G__22972);
} else
{return null;
}
});
/**
* Removes all map entries where the value of the entry is empty.
*/
no.en.core.compact_map = (function compact_map(m){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m__$1,k){var v = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m__$1,k);if(((v == null)) || (((cljs.core.map_QMARK_(v)) || (cljs.core.sequential_QMARK_(v))) && (cljs.core.empty_QMARK_(v))))
{return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m__$1,k);
} else
{return m__$1;
}
}),m,cljs.core.keys(m));
});
/**
* Returns `s` as an URL encoded string.
* @param {...*} var_args
*/
no.en.core.url_encode = (function() { 
var url_encode__delegate = function (s,p__22973){var vec__22976 = p__22973;var encoding = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22976,(0),null);if(cljs.core.truth_(s))
{return clojure.string.replace((function (){var G__22977 = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(s));return encodeURIComponent(G__22977);
})(),"*","%2A");
} else
{return null;
}
};
var url_encode = function (s,var_args){
var p__22973 = null;if (arguments.length > 1) {
  p__22973 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return url_encode__delegate.call(this,s,p__22973);};
url_encode.cljs$lang$maxFixedArity = 1;
url_encode.cljs$lang$applyTo = (function (arglist__22978){
var s = cljs.core.first(arglist__22978);
var p__22973 = cljs.core.rest(arglist__22978);
return url_encode__delegate(s,p__22973);
});
url_encode.cljs$core$IFn$_invoke$arity$variadic = url_encode__delegate;
return url_encode;
})()
;
/**
* Returns `s` as an URL decoded string.
* @param {...*} var_args
*/
no.en.core.url_decode = (function() { 
var url_decode__delegate = function (s,p__22979){var vec__22982 = p__22979;var encoding = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22982,(0),null);if(cljs.core.truth_(s))
{var G__22983 = s;return decodeURIComponent(G__22983);
} else
{return null;
}
};
var url_decode = function (s,var_args){
var p__22979 = null;if (arguments.length > 1) {
  p__22979 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return url_decode__delegate.call(this,s,p__22979);};
url_decode.cljs$lang$maxFixedArity = 1;
url_decode.cljs$lang$applyTo = (function (arglist__22984){
var s = cljs.core.first(arglist__22984);
var p__22979 = cljs.core.rest(arglist__22984);
return url_decode__delegate(s,p__22979);
});
url_decode.cljs$core$IFn$_invoke$arity$variadic = url_decode__delegate;
return url_decode;
})()
;
no.en.core.pow = (function pow(n,x){return Math.pow(n,x);
});
no.en.core.byte_scale = cljs.core.PersistentHashMap.fromArrays(["T","K","G","M","Y","Z","E","B","P"],[no.en.core.pow((1024),(4)),no.en.core.pow((1024),(1)),no.en.core.pow((1024),(3)),no.en.core.pow((1024),(2)),no.en.core.pow((1024),(8)),no.en.core.pow((1024),(7)),no.en.core.pow((1024),(6)),no.en.core.pow((1024),(0)),no.en.core.pow((1024),(5))]);
no.en.core.apply_unit = (function apply_unit(number,unit){if(typeof unit === 'string')
{var G__22987 = clojure.string.upper_case(unit);switch (G__22987) {
default:
var G__22988 = unit;switch (G__22988) {
case "M":
return (number * (1000000));

break;
case "B":
return (number * (1000000000));

break;
default:
throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(unit))));

}

}
} else
{return number;
}
});
no.en.core.parse_number = (function parse_number(s,parse_fn){var temp__4124__auto__ = cljs.core.re_matches(/\s*([-+]?[0-9]*\.?[0-9]+([eE][-+]?[0-9]+)?)(M|B)?.*/,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)));if(cljs.core.truth_(temp__4124__auto__))
{var matches = temp__4124__auto__;var number = (function (){var G__22993 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(matches,(1));return (parse_fn.cljs$core$IFn$_invoke$arity$1 ? parse_fn.cljs$core$IFn$_invoke$arity$1(G__22993) : parse_fn.call(null,G__22993));
})();var unit = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(matches,(3));if(cljs.core.not((function (){var G__22994 = number;return isNaN(G__22994);
})()))
{return no.en.core.apply_unit(number,unit);
} else
{return null;
}
} else
{return null;
}
});
no.en.core.parse_bytes = (function parse_bytes(s){var temp__4124__auto__ = cljs.core.re_matches(/\s*([-+]?[0-9]*\.?[0-9]+([eE][-+]?[0-9]+)?)(B|K|M|G|T|P|E|Z|Y)?.*/,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)));if(cljs.core.truth_(temp__4124__auto__))
{var matches = temp__4124__auto__;var number = cljs.reader.read_string(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(matches,(1)));var unit = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(matches,(3));return cljs.core.long$((cljs.core.long$(cljs.reader.read_string((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(matches,(1)))))) * cljs.core.get.cljs$core$IFn$_invoke$arity$3(no.en.core.byte_scale,clojure.string.upper_case((function (){var or__3669__auto__ = unit;if(cljs.core.truth_(or__3669__auto__))
{return or__3669__auto__;
} else
{return "";
}
})()),(1))));
} else
{return null;
}
});
/**
* Parse `s` as a integer number.
*/
no.en.core.parse_integer = (function parse_integer(s){return no.en.core.parse_number(s,(function (p1__22995_SHARP_){var G__22997 = p1__22995_SHARP_;return parseInt(G__22997);
}));
});
/**
* Parse `s` as a long number.
*/
no.en.core.parse_long = (function parse_long(s){return no.en.core.parse_number(s,(function (p1__22998_SHARP_){var G__23000 = p1__22998_SHARP_;return parseInt(G__23000);
}));
});
/**
* Parse `s` as a double number.
*/
no.en.core.parse_double = (function parse_double(s){return no.en.core.parse_number(s,(function (p1__23001_SHARP_){var G__23003 = p1__23001_SHARP_;return parseFloat(G__23003);
}));
});
/**
* Parse `s` as a float number.
*/
no.en.core.parse_float = (function parse_float(s){return no.en.core.parse_number(s,(function (p1__23004_SHARP_){var G__23006 = p1__23004_SHARP_;return parseFloat(G__23006);
}));
});
/**
* Format the map `m` into a query parameter string.
*/
no.en.core.format_query_params = (function format_query_params(m){var params = clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__23009_SHARP_){return clojure.string.join.cljs$core$IFn$_invoke$arity$2("=",p1__23009_SHARP_);
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__23008_SHARP_){return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[no.en.core.url_encode(cljs.core.name(cljs.core.first(p1__23008_SHARP_))),no.en.core.url_encode(cljs.core.second(p1__23008_SHARP_))],null));
}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__23007_SHARP_){return clojure.string.blank_QMARK_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.second(p1__23007_SHARP_))));
}),cljs.core.seq(m)))));if(cljs.core.not(clojure.string.blank_QMARK_(params)))
{return params;
} else
{return null;
}
});
/**
* Format the Ring map as an url.
*/
no.en.core.format_url = (function format_url(m){if(!(cljs.core.empty_QMARK_(m)))
{var query_params = cljs.core.constant$keyword$38.cljs$core$IFn$_invoke$arity$1(m);return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(cljs.core.constant$keyword$39.cljs$core$IFn$_invoke$arity$1(m))?(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(cljs.core.constant$keyword$39.cljs$core$IFn$_invoke$arity$1(m)))+"://"):null))+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var map__23012 = m;var map__23012__$1 = ((cljs.core.seq_QMARK_(map__23012))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23012):map__23012);var password = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23012__$1,cljs.core.constant$keyword$40);var user = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23012__$1,cljs.core.constant$keyword$41);if(cljs.core.truth_(user))
{return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(user)?user:null))+cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(password)?(":"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(password)):null))+"@");
} else
{return null;
}
})())+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$42.cljs$core$IFn$_invoke$arity$1(m))+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__4124__auto__ = cljs.core.constant$keyword$43.cljs$core$IFn$_invoke$arity$1(m);if(cljs.core.truth_(temp__4124__auto__))
{var port = temp__4124__auto__;if(!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(port,(function (){var G__23013 = cljs.core.constant$keyword$39.cljs$core$IFn$_invoke$arity$1(m);return (no.en.core.port_number.cljs$core$IFn$_invoke$arity$1 ? no.en.core.port_number.cljs$core$IFn$_invoke$arity$1(G__23013) : no.en.core.port_number.call(null,G__23013));
})())))
{return (":"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(port));
} else
{return null;
}
} else
{return null;
}
})())+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((((cljs.core.constant$keyword$44.cljs$core$IFn$_invoke$arity$1(m) == null)) && (!(cljs.core.empty_QMARK_(query_params))))?"/":cljs.core.constant$keyword$44.cljs$core$IFn$_invoke$arity$1(m)))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((!(cljs.core.empty_QMARK_(query_params)))?("?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(no.en.core.format_query_params(query_params))):null))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((cljs.core.not(clojure.string.blank_QMARK_(cljs.core.constant$keyword$45.cljs$core$IFn$_invoke$arity$1(m))))?("#"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$45.cljs$core$IFn$_invoke$arity$1(m))):null)));
} else
{return null;
}
});
/**
* Parse `s` as a percentage.
*/
no.en.core.parse_percent = (function parse_percent(s){return no.en.core.parse_double(clojure.string.replace(s,"%",""));
});
/**
* Quote the special characters in `s` that are used in regular expressions.
*/
no.en.core.pattern_quote = (function pattern_quote(s){return clojure.string.replace(cljs.core.name(s),/([\[\]\^\$\|\(\)\\\+\*\?\{\}\=\!.])/,"\\\\$1");
});
/**
* Returns the first string that separates the components in `s`.
*/
no.en.core.separator = (function separator(s){var temp__4124__auto__ = cljs.core.re_matches(/([a-z0-9_-]+)([^a-z0-9_-]+).*/i,s);if(cljs.core.truth_(temp__4124__auto__))
{var matches = temp__4124__auto__;return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(matches,(2));
} else
{return null;
}
});
/**
* Parse the query parameter string `s` and return a map.
*/
no.en.core.parse_query_params = (function parse_query_params(s){if(cljs.core.truth_(s))
{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__23016_SHARP_){return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(no.en.core.url_decode(cljs.core.first(p1__23016_SHARP_))),no.en.core.url_decode(cljs.core.second(p1__23016_SHARP_))],null));
}),cljs.core.array_seq([cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__23015_SHARP_){return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2),cljs.core.count(p1__23015_SHARP_));
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__23014_SHARP_){return clojure.string.split.cljs$core$IFn$_invoke$arity$2(p1__23014_SHARP_,/=/);
}),clojure.string.split.cljs$core$IFn$_invoke$arity$2((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)),/&/)))], 0)));
} else
{return null;
}
});
/**
* Parse the url `s` and return a Ring compatible map.
*/
no.en.core.parse_url = (function parse_url(s){var temp__4124__auto__ = cljs.core.re_matches(no.en.core.url_regex,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)));if(cljs.core.truth_(temp__4124__auto__))
{var matches = temp__4124__auto__;var scheme = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(matches,(1)));return no.en.core.compact_map(cljs.core.PersistentHashMap.fromArrays([cljs.core.constant$keyword$40,cljs.core.constant$keyword$45,cljs.core.constant$keyword$43,cljs.core.constant$keyword$38,cljs.core.constant$keyword$44,cljs.core.constant$keyword$42,cljs.core.constant$keyword$46,cljs.core.constant$keyword$41,cljs.core.constant$keyword$39],[cljs.core.nth.cljs$core$IFn$_invoke$arity$2(matches,(4)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(matches,(14)),(function (){var or__3669__auto__ = no.en.core.parse_integer(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(matches,(8)));if(cljs.core.truth_(or__3669__auto__))
{return or__3669__auto__;
} else
{var G__23018 = scheme;return (no.en.core.port_number.cljs$core$IFn$_invoke$arity$1 ? no.en.core.port_number.cljs$core$IFn$_invoke$arity$1(G__23018) : no.en.core.port_number.call(null,G__23018));
}
})(),no.en.core.parse_query_params(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(matches,(12))),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(matches,(10)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(matches,(6)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(matches,(12)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(matches,(3)),scheme]));
} else
{return null;
}
});
/**
* Executes thunk. If an exception is thrown, will retry. At most n retries
* are done. If still some exception is thrown it is bubbled upwards in
* the call chain.
*/
no.en.core.with_retries_STAR_ = (function with_retries_STAR_(n,thunk){var n__$1 = n;while(true){
var temp__4124__auto__ = (function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){return (thunk.cljs$core$IFn$_invoke$arity$0 ? thunk.cljs$core$IFn$_invoke$arity$0() : thunk.call(null));
})()], null);
}catch (e23021){if((e23021 instanceof Error))
{var e = e23021;if((n__$1 === (0)))
{throw e;
} else
{return null;
}
} else
{throw e23021;

}
}})();if(cljs.core.truth_(temp__4124__auto__))
{var result = temp__4124__auto__;var G__23022 = (0);return (result.cljs$core$IFn$_invoke$arity$1 ? result.cljs$core$IFn$_invoke$arity$1(G__23022) : result.call(null,G__23022));
} else
{{
var G__23023 = (n__$1 - (1));
n__$1 = G__23023;
continue;
}
}
break;
}
});