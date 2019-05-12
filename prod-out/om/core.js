// Compiled by ClojureScript 0.0-2356
goog.provide('om.core');
goog.require('cljs.core');
goog.require('goog.ui.IdGenerator');
goog.require('om.dom');
goog.require('om.dom');
om.core._STAR_read_enabled_STAR_ = false;
om.core._STAR_parent_STAR_ = null;
om.core._STAR_instrument_STAR_ = null;
om.core._STAR_state_STAR_ = null;
om.core.IDisplayName = (function (){var obj27505 = {};return obj27505;
})();
om.core.display_name = (function display_name(this$){if((function (){var and__3657__auto__ = this$;if(and__3657__auto__)
{return this$.om$core$IDisplayName$display_name$arity$1;
} else
{return and__3657__auto__;
}
})())
{return this$.om$core$IDisplayName$display_name$arity$1(this$);
} else
{var x__4305__auto__ = (((this$ == null))?null:this$);return (function (){var or__3669__auto__ = (om.core.display_name[(function (){var G__27509 = x__4305__auto__;return goog.typeOf(G__27509);
})()]);if(or__3669__auto__)
{return or__3669__auto__;
} else
{var or__3669__auto____$1 = (om.core.display_name["_"]);if(or__3669__auto____$1)
{return or__3669__auto____$1;
} else
{throw cljs.core.missing_protocol("IDisplayName.display-name",this$);
}
}
})().call(null,this$);
}
});
om.core.IInitState = (function (){var obj27511 = {};return obj27511;
})();
om.core.init_state = (function init_state(this$){if((function (){var and__3657__auto__ = this$;if(and__3657__auto__)
{return this$.om$core$IInitState$init_state$arity$1;
} else
{return and__3657__auto__;
}
})())
{return this$.om$core$IInitState$init_state$arity$1(this$);
} else
{var x__4305__auto__ = (((this$ == null))?null:this$);return (function (){var or__3669__auto__ = (om.core.init_state[(function (){var G__27515 = x__4305__auto__;return goog.typeOf(G__27515);
})()]);if(or__3669__auto__)
{return or__3669__auto__;
} else
{var or__3669__auto____$1 = (om.core.init_state["_"]);if(or__3669__auto____$1)
{return or__3669__auto____$1;
} else
{throw cljs.core.missing_protocol("IInitState.init-state",this$);
}
}
})().call(null,this$);
}
});
om.core.IShouldUpdate = (function (){var obj27517 = {};return obj27517;
})();
om.core.should_update = (function should_update(this$,next_props,next_state){if((function (){var and__3657__auto__ = this$;if(and__3657__auto__)
{return this$.om$core$IShouldUpdate$should_update$arity$3;
} else
{return and__3657__auto__;
}
})())
{return this$.om$core$IShouldUpdate$should_update$arity$3(this$,next_props,next_state);
} else
{var x__4305__auto__ = (((this$ == null))?null:this$);return (function (){var or__3669__auto__ = (om.core.should_update[(function (){var G__27521 = x__4305__auto__;return goog.typeOf(G__27521);
})()]);if(or__3669__auto__)
{return or__3669__auto__;
} else
{var or__3669__auto____$1 = (om.core.should_update["_"]);if(or__3669__auto____$1)
{return or__3669__auto____$1;
} else
{throw cljs.core.missing_protocol("IShouldUpdate.should-update",this$);
}
}
})().call(null,this$,next_props,next_state);
}
});
om.core.IWillMount = (function (){var obj27523 = {};return obj27523;
})();
om.core.will_mount = (function will_mount(this$){if((function (){var and__3657__auto__ = this$;if(and__3657__auto__)
{return this$.om$core$IWillMount$will_mount$arity$1;
} else
{return and__3657__auto__;
}
})())
{return this$.om$core$IWillMount$will_mount$arity$1(this$);
} else
{var x__4305__auto__ = (((this$ == null))?null:this$);return (function (){var or__3669__auto__ = (om.core.will_mount[(function (){var G__27527 = x__4305__auto__;return goog.typeOf(G__27527);
})()]);if(or__3669__auto__)
{return or__3669__auto__;
} else
{var or__3669__auto____$1 = (om.core.will_mount["_"]);if(or__3669__auto____$1)
{return or__3669__auto____$1;
} else
{throw cljs.core.missing_protocol("IWillMount.will-mount",this$);
}
}
})().call(null,this$);
}
});
om.core.IDidMount = (function (){var obj27529 = {};return obj27529;
})();
om.core.did_mount = (function did_mount(this$){if((function (){var and__3657__auto__ = this$;if(and__3657__auto__)
{return this$.om$core$IDidMount$did_mount$arity$1;
} else
{return and__3657__auto__;
}
})())
{return this$.om$core$IDidMount$did_mount$arity$1(this$);
} else
{var x__4305__auto__ = (((this$ == null))?null:this$);return (function (){var or__3669__auto__ = (om.core.did_mount[(function (){var G__27533 = x__4305__auto__;return goog.typeOf(G__27533);
})()]);if(or__3669__auto__)
{return or__3669__auto__;
} else
{var or__3669__auto____$1 = (om.core.did_mount["_"]);if(or__3669__auto____$1)
{return or__3669__auto____$1;
} else
{throw cljs.core.missing_protocol("IDidMount.did-mount",this$);
}
}
})().call(null,this$);
}
});
om.core.IWillUnmount = (function (){var obj27535 = {};return obj27535;
})();
om.core.will_unmount = (function will_unmount(this$){if((function (){var and__3657__auto__ = this$;if(and__3657__auto__)
{return this$.om$core$IWillUnmount$will_unmount$arity$1;
} else
{return and__3657__auto__;
}
})())
{return this$.om$core$IWillUnmount$will_unmount$arity$1(this$);
} else
{var x__4305__auto__ = (((this$ == null))?null:this$);return (function (){var or__3669__auto__ = (om.core.will_unmount[(function (){var G__27539 = x__4305__auto__;return goog.typeOf(G__27539);
})()]);if(or__3669__auto__)
{return or__3669__auto__;
} else
{var or__3669__auto____$1 = (om.core.will_unmount["_"]);if(or__3669__auto____$1)
{return or__3669__auto____$1;
} else
{throw cljs.core.missing_protocol("IWillUnmount.will-unmount",this$);
}
}
})().call(null,this$);
}
});
om.core.IWillUpdate = (function (){var obj27541 = {};return obj27541;
})();
om.core.will_update = (function will_update(this$,next_props,next_state){if((function (){var and__3657__auto__ = this$;if(and__3657__auto__)
{return this$.om$core$IWillUpdate$will_update$arity$3;
} else
{return and__3657__auto__;
}
})())
{return this$.om$core$IWillUpdate$will_update$arity$3(this$,next_props,next_state);
} else
{var x__4305__auto__ = (((this$ == null))?null:this$);return (function (){var or__3669__auto__ = (om.core.will_update[(function (){var G__27545 = x__4305__auto__;return goog.typeOf(G__27545);
})()]);if(or__3669__auto__)
{return or__3669__auto__;
} else
{var or__3669__auto____$1 = (om.core.will_update["_"]);if(or__3669__auto____$1)
{return or__3669__auto____$1;
} else
{throw cljs.core.missing_protocol("IWillUpdate.will-update",this$);
}
}
})().call(null,this$,next_props,next_state);
}
});
om.core.IDidUpdate = (function (){var obj27547 = {};return obj27547;
})();
om.core.did_update = (function did_update(this$,prev_props,prev_state){if((function (){var and__3657__auto__ = this$;if(and__3657__auto__)
{return this$.om$core$IDidUpdate$did_update$arity$3;
} else
{return and__3657__auto__;
}
})())
{return this$.om$core$IDidUpdate$did_update$arity$3(this$,prev_props,prev_state);
} else
{var x__4305__auto__ = (((this$ == null))?null:this$);return (function (){var or__3669__auto__ = (om.core.did_update[(function (){var G__27551 = x__4305__auto__;return goog.typeOf(G__27551);
})()]);if(or__3669__auto__)
{return or__3669__auto__;
} else
{var or__3669__auto____$1 = (om.core.did_update["_"]);if(or__3669__auto____$1)
{return or__3669__auto____$1;
} else
{throw cljs.core.missing_protocol("IDidUpdate.did-update",this$);
}
}
})().call(null,this$,prev_props,prev_state);
}
});
om.core.IWillReceiveProps = (function (){var obj27553 = {};return obj27553;
})();
om.core.will_receive_props = (function will_receive_props(this$,next_props){if((function (){var and__3657__auto__ = this$;if(and__3657__auto__)
{return this$.om$core$IWillReceiveProps$will_receive_props$arity$2;
} else
{return and__3657__auto__;
}
})())
{return this$.om$core$IWillReceiveProps$will_receive_props$arity$2(this$,next_props);
} else
{var x__4305__auto__ = (((this$ == null))?null:this$);return (function (){var or__3669__auto__ = (om.core.will_receive_props[(function (){var G__27557 = x__4305__auto__;return goog.typeOf(G__27557);
})()]);if(or__3669__auto__)
{return or__3669__auto__;
} else
{var or__3669__auto____$1 = (om.core.will_receive_props["_"]);if(or__3669__auto____$1)
{return or__3669__auto____$1;
} else
{throw cljs.core.missing_protocol("IWillReceiveProps.will-receive-props",this$);
}
}
})().call(null,this$,next_props);
}
});
om.core.IRender = (function (){var obj27559 = {};return obj27559;
})();
om.core.render = (function render(this$){if((function (){var and__3657__auto__ = this$;if(and__3657__auto__)
{return this$.om$core$IRender$render$arity$1;
} else
{return and__3657__auto__;
}
})())
{return this$.om$core$IRender$render$arity$1(this$);
} else
{var x__4305__auto__ = (((this$ == null))?null:this$);return (function (){var or__3669__auto__ = (om.core.render[(function (){var G__27563 = x__4305__auto__;return goog.typeOf(G__27563);
})()]);if(or__3669__auto__)
{return or__3669__auto__;
} else
{var or__3669__auto____$1 = (om.core.render["_"]);if(or__3669__auto____$1)
{return or__3669__auto____$1;
} else
{throw cljs.core.missing_protocol("IRender.render",this$);
}
}
})().call(null,this$);
}
});
om.core.IRenderState = (function (){var obj27565 = {};return obj27565;
})();
om.core.render_state = (function render_state(this$,state){if((function (){var and__3657__auto__ = this$;if(and__3657__auto__)
{return this$.om$core$IRenderState$render_state$arity$2;
} else
{return and__3657__auto__;
}
})())
{return this$.om$core$IRenderState$render_state$arity$2(this$,state);
} else
{var x__4305__auto__ = (((this$ == null))?null:this$);return (function (){var or__3669__auto__ = (om.core.render_state[(function (){var G__27569 = x__4305__auto__;return goog.typeOf(G__27569);
})()]);if(or__3669__auto__)
{return or__3669__auto__;
} else
{var or__3669__auto____$1 = (om.core.render_state["_"]);if(or__3669__auto____$1)
{return or__3669__auto____$1;
} else
{throw cljs.core.missing_protocol("IRenderState.render-state",this$);
}
}
})().call(null,this$,state);
}
});
om.core.IOmSwap = (function (){var obj27571 = {};return obj27571;
})();
om.core._om_swap_BANG_ = (function _om_swap_BANG_(this$,cursor,korks,f,tag){if((function (){var and__3657__auto__ = this$;if(and__3657__auto__)
{return this$.om$core$IOmSwap$_om_swap_BANG_$arity$5;
} else
{return and__3657__auto__;
}
})())
{return this$.om$core$IOmSwap$_om_swap_BANG_$arity$5(this$,cursor,korks,f,tag);
} else
{var x__4305__auto__ = (((this$ == null))?null:this$);return (function (){var or__3669__auto__ = (om.core._om_swap_BANG_[(function (){var G__27575 = x__4305__auto__;return goog.typeOf(G__27575);
})()]);if(or__3669__auto__)
{return or__3669__auto__;
} else
{var or__3669__auto____$1 = (om.core._om_swap_BANG_["_"]);if(or__3669__auto____$1)
{return or__3669__auto____$1;
} else
{throw cljs.core.missing_protocol("IOmSwap.-om-swap!",this$);
}
}
})().call(null,this$,cursor,korks,f,tag);
}
});
om.core.IGetState = (function (){var obj27577 = {};return obj27577;
})();
om.core._get_state = (function() {
var _get_state = null;
var _get_state__1 = (function (this$){if((function (){var and__3657__auto__ = this$;if(and__3657__auto__)
{return this$.om$core$IGetState$_get_state$arity$1;
} else
{return and__3657__auto__;
}
})())
{return this$.om$core$IGetState$_get_state$arity$1(this$);
} else
{var x__4305__auto__ = (((this$ == null))?null:this$);return (function (){var or__3669__auto__ = (om.core._get_state[(function (){var G__27583 = x__4305__auto__;return goog.typeOf(G__27583);
})()]);if(or__3669__auto__)
{return or__3669__auto__;
} else
{var or__3669__auto____$1 = (om.core._get_state["_"]);if(or__3669__auto____$1)
{return or__3669__auto____$1;
} else
{throw cljs.core.missing_protocol("IGetState.-get-state",this$);
}
}
})().call(null,this$);
}
});
var _get_state__2 = (function (this$,ks){if((function (){var and__3657__auto__ = this$;if(and__3657__auto__)
{return this$.om$core$IGetState$_get_state$arity$2;
} else
{return and__3657__auto__;
}
})())
{return this$.om$core$IGetState$_get_state$arity$2(this$,ks);
} else
{var x__4305__auto__ = (((this$ == null))?null:this$);return (function (){var or__3669__auto__ = (om.core._get_state[(function (){var G__27585 = x__4305__auto__;return goog.typeOf(G__27585);
})()]);if(or__3669__auto__)
{return or__3669__auto__;
} else
{var or__3669__auto____$1 = (om.core._get_state["_"]);if(or__3669__auto____$1)
{return or__3669__auto____$1;
} else
{throw cljs.core.missing_protocol("IGetState.-get-state",this$);
}
}
})().call(null,this$,ks);
}
});
_get_state = function(this$,ks){
switch(arguments.length){
case 1:
return _get_state__1.call(this,this$);
case 2:
return _get_state__2.call(this,this$,ks);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_get_state.cljs$core$IFn$_invoke$arity$1 = _get_state__1;
_get_state.cljs$core$IFn$_invoke$arity$2 = _get_state__2;
return _get_state;
})()
;
om.core.IGetRenderState = (function (){var obj27587 = {};return obj27587;
})();
om.core._get_render_state = (function() {
var _get_render_state = null;
var _get_render_state__1 = (function (this$){if((function (){var and__3657__auto__ = this$;if(and__3657__auto__)
{return this$.om$core$IGetRenderState$_get_render_state$arity$1;
} else
{return and__3657__auto__;
}
})())
{return this$.om$core$IGetRenderState$_get_render_state$arity$1(this$);
} else
{var x__4305__auto__ = (((this$ == null))?null:this$);return (function (){var or__3669__auto__ = (om.core._get_render_state[(function (){var G__27593 = x__4305__auto__;return goog.typeOf(G__27593);
})()]);if(or__3669__auto__)
{return or__3669__auto__;
} else
{var or__3669__auto____$1 = (om.core._get_render_state["_"]);if(or__3669__auto____$1)
{return or__3669__auto____$1;
} else
{throw cljs.core.missing_protocol("IGetRenderState.-get-render-state",this$);
}
}
})().call(null,this$);
}
});
var _get_render_state__2 = (function (this$,ks){if((function (){var and__3657__auto__ = this$;if(and__3657__auto__)
{return this$.om$core$IGetRenderState$_get_render_state$arity$2;
} else
{return and__3657__auto__;
}
})())
{return this$.om$core$IGetRenderState$_get_render_state$arity$2(this$,ks);
} else
{var x__4305__auto__ = (((this$ == null))?null:this$);return (function (){var or__3669__auto__ = (om.core._get_render_state[(function (){var G__27595 = x__4305__auto__;return goog.typeOf(G__27595);
})()]);if(or__3669__auto__)
{return or__3669__auto__;
} else
{var or__3669__auto____$1 = (om.core._get_render_state["_"]);if(or__3669__auto____$1)
{return or__3669__auto____$1;
} else
{throw cljs.core.missing_protocol("IGetRenderState.-get-render-state",this$);
}
}
})().call(null,this$,ks);
}
});
_get_render_state = function(this$,ks){
switch(arguments.length){
case 1:
return _get_render_state__1.call(this,this$);
case 2:
return _get_render_state__2.call(this,this$,ks);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_get_render_state.cljs$core$IFn$_invoke$arity$1 = _get_render_state__1;
_get_render_state.cljs$core$IFn$_invoke$arity$2 = _get_render_state__2;
return _get_render_state;
})()
;
om.core.ISetState = (function (){var obj27597 = {};return obj27597;
})();
om.core._set_state_BANG_ = (function() {
var _set_state_BANG_ = null;
var _set_state_BANG___3 = (function (this$,val,render){if((function (){var and__3657__auto__ = this$;if(and__3657__auto__)
{return this$.om$core$ISetState$_set_state_BANG_$arity$3;
} else
{return and__3657__auto__;
}
})())
{return this$.om$core$ISetState$_set_state_BANG_$arity$3(this$,val,render);
} else
{var x__4305__auto__ = (((this$ == null))?null:this$);return (function (){var or__3669__auto__ = (om.core._set_state_BANG_[(function (){var G__27603 = x__4305__auto__;return goog.typeOf(G__27603);
})()]);if(or__3669__auto__)
{return or__3669__auto__;
} else
{var or__3669__auto____$1 = (om.core._set_state_BANG_["_"]);if(or__3669__auto____$1)
{return or__3669__auto____$1;
} else
{throw cljs.core.missing_protocol("ISetState.-set-state!",this$);
}
}
})().call(null,this$,val,render);
}
});
var _set_state_BANG___4 = (function (this$,ks,val,render){if((function (){var and__3657__auto__ = this$;if(and__3657__auto__)
{return this$.om$core$ISetState$_set_state_BANG_$arity$4;
} else
{return and__3657__auto__;
}
})())
{return this$.om$core$ISetState$_set_state_BANG_$arity$4(this$,ks,val,render);
} else
{var x__4305__auto__ = (((this$ == null))?null:this$);return (function (){var or__3669__auto__ = (om.core._set_state_BANG_[(function (){var G__27605 = x__4305__auto__;return goog.typeOf(G__27605);
})()]);if(or__3669__auto__)
{return or__3669__auto__;
} else
{var or__3669__auto____$1 = (om.core._set_state_BANG_["_"]);if(or__3669__auto____$1)
{return or__3669__auto____$1;
} else
{throw cljs.core.missing_protocol("ISetState.-set-state!",this$);
}
}
})().call(null,this$,ks,val,render);
}
});
_set_state_BANG_ = function(this$,ks,val,render){
switch(arguments.length){
case 3:
return _set_state_BANG___3.call(this,this$,ks,val);
case 4:
return _set_state_BANG___4.call(this,this$,ks,val,render);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_set_state_BANG_.cljs$core$IFn$_invoke$arity$3 = _set_state_BANG___3;
_set_state_BANG_.cljs$core$IFn$_invoke$arity$4 = _set_state_BANG___4;
return _set_state_BANG_;
})()
;
om.core.IRenderQueue = (function (){var obj27607 = {};return obj27607;
})();
om.core._get_queue = (function _get_queue(this$){if((function (){var and__3657__auto__ = this$;if(and__3657__auto__)
{return this$.om$core$IRenderQueue$_get_queue$arity$1;
} else
{return and__3657__auto__;
}
})())
{return this$.om$core$IRenderQueue$_get_queue$arity$1(this$);
} else
{var x__4305__auto__ = (((this$ == null))?null:this$);return (function (){var or__3669__auto__ = (om.core._get_queue[(function (){var G__27611 = x__4305__auto__;return goog.typeOf(G__27611);
})()]);if(or__3669__auto__)
{return or__3669__auto__;
} else
{var or__3669__auto____$1 = (om.core._get_queue["_"]);if(or__3669__auto____$1)
{return or__3669__auto____$1;
} else
{throw cljs.core.missing_protocol("IRenderQueue.-get-queue",this$);
}
}
})().call(null,this$);
}
});
om.core._queue_render_BANG_ = (function _queue_render_BANG_(this$,c){if((function (){var and__3657__auto__ = this$;if(and__3657__auto__)
{return this$.om$core$IRenderQueue$_queue_render_BANG_$arity$2;
} else
{return and__3657__auto__;
}
})())
{return this$.om$core$IRenderQueue$_queue_render_BANG_$arity$2(this$,c);
} else
{var x__4305__auto__ = (((this$ == null))?null:this$);return (function (){var or__3669__auto__ = (om.core._queue_render_BANG_[(function (){var G__27615 = x__4305__auto__;return goog.typeOf(G__27615);
})()]);if(or__3669__auto__)
{return or__3669__auto__;
} else
{var or__3669__auto____$1 = (om.core._queue_render_BANG_["_"]);if(or__3669__auto____$1)
{return or__3669__auto____$1;
} else
{throw cljs.core.missing_protocol("IRenderQueue.-queue-render!",this$);
}
}
})().call(null,this$,c);
}
});
om.core._empty_queue_BANG_ = (function _empty_queue_BANG_(this$){if((function (){var and__3657__auto__ = this$;if(and__3657__auto__)
{return this$.om$core$IRenderQueue$_empty_queue_BANG_$arity$1;
} else
{return and__3657__auto__;
}
})())
{return this$.om$core$IRenderQueue$_empty_queue_BANG_$arity$1(this$);
} else
{var x__4305__auto__ = (((this$ == null))?null:this$);return (function (){var or__3669__auto__ = (om.core._empty_queue_BANG_[(function (){var G__27619 = x__4305__auto__;return goog.typeOf(G__27619);
})()]);if(or__3669__auto__)
{return or__3669__auto__;
} else
{var or__3669__auto____$1 = (om.core._empty_queue_BANG_["_"]);if(or__3669__auto____$1)
{return or__3669__auto____$1;
} else
{throw cljs.core.missing_protocol("IRenderQueue.-empty-queue!",this$);
}
}
})().call(null,this$);
}
});
om.core.IValue = (function (){var obj27621 = {};return obj27621;
})();
om.core._value = (function _value(x){if((function (){var and__3657__auto__ = x;if(and__3657__auto__)
{return x.om$core$IValue$_value$arity$1;
} else
{return and__3657__auto__;
}
})())
{return x.om$core$IValue$_value$arity$1(x);
} else
{var x__4305__auto__ = (((x == null))?null:x);return (function (){var or__3669__auto__ = (om.core._value[(function (){var G__27625 = x__4305__auto__;return goog.typeOf(G__27625);
})()]);if(or__3669__auto__)
{return or__3669__auto__;
} else
{var or__3669__auto____$1 = (om.core._value["_"]);if(or__3669__auto____$1)
{return or__3669__auto____$1;
} else
{throw cljs.core.missing_protocol("IValue.-value",x);
}
}
})().call(null,x);
}
});
(om.core.IValue["_"] = true);
(om.core._value["_"] = (function (x){return x;
}));
om.core.ICursor = (function (){var obj27627 = {};return obj27627;
})();
om.core._path = (function _path(cursor){if((function (){var and__3657__auto__ = cursor;if(and__3657__auto__)
{return cursor.om$core$ICursor$_path$arity$1;
} else
{return and__3657__auto__;
}
})())
{return cursor.om$core$ICursor$_path$arity$1(cursor);
} else
{var x__4305__auto__ = (((cursor == null))?null:cursor);return (function (){var or__3669__auto__ = (om.core._path[(function (){var G__27631 = x__4305__auto__;return goog.typeOf(G__27631);
})()]);if(or__3669__auto__)
{return or__3669__auto__;
} else
{var or__3669__auto____$1 = (om.core._path["_"]);if(or__3669__auto____$1)
{return or__3669__auto____$1;
} else
{throw cljs.core.missing_protocol("ICursor.-path",cursor);
}
}
})().call(null,cursor);
}
});
om.core._state = (function _state(cursor){if((function (){var and__3657__auto__ = cursor;if(and__3657__auto__)
{return cursor.om$core$ICursor$_state$arity$1;
} else
{return and__3657__auto__;
}
})())
{return cursor.om$core$ICursor$_state$arity$1(cursor);
} else
{var x__4305__auto__ = (((cursor == null))?null:cursor);return (function (){var or__3669__auto__ = (om.core._state[(function (){var G__27635 = x__4305__auto__;return goog.typeOf(G__27635);
})()]);if(or__3669__auto__)
{return or__3669__auto__;
} else
{var or__3669__auto____$1 = (om.core._state["_"]);if(or__3669__auto____$1)
{return or__3669__auto____$1;
} else
{throw cljs.core.missing_protocol("ICursor.-state",cursor);
}
}
})().call(null,cursor);
}
});
om.core.IToCursor = (function (){var obj27637 = {};return obj27637;
})();
om.core._to_cursor = (function() {
var _to_cursor = null;
var _to_cursor__2 = (function (value,state){if((function (){var and__3657__auto__ = value;if(and__3657__auto__)
{return value.om$core$IToCursor$_to_cursor$arity$2;
} else
{return and__3657__auto__;
}
})())
{return value.om$core$IToCursor$_to_cursor$arity$2(value,state);
} else
{var x__4305__auto__ = (((value == null))?null:value);return (function (){var or__3669__auto__ = (om.core._to_cursor[(function (){var G__27643 = x__4305__auto__;return goog.typeOf(G__27643);
})()]);if(or__3669__auto__)
{return or__3669__auto__;
} else
{var or__3669__auto____$1 = (om.core._to_cursor["_"]);if(or__3669__auto____$1)
{return or__3669__auto____$1;
} else
{throw cljs.core.missing_protocol("IToCursor.-to-cursor",value);
}
}
})().call(null,value,state);
}
});
var _to_cursor__3 = (function (value,state,path){if((function (){var and__3657__auto__ = value;if(and__3657__auto__)
{return value.om$core$IToCursor$_to_cursor$arity$3;
} else
{return and__3657__auto__;
}
})())
{return value.om$core$IToCursor$_to_cursor$arity$3(value,state,path);
} else
{var x__4305__auto__ = (((value == null))?null:value);return (function (){var or__3669__auto__ = (om.core._to_cursor[(function (){var G__27645 = x__4305__auto__;return goog.typeOf(G__27645);
})()]);if(or__3669__auto__)
{return or__3669__auto__;
} else
{var or__3669__auto____$1 = (om.core._to_cursor["_"]);if(or__3669__auto____$1)
{return or__3669__auto____$1;
} else
{throw cljs.core.missing_protocol("IToCursor.-to-cursor",value);
}
}
})().call(null,value,state,path);
}
});
_to_cursor = function(value,state,path){
switch(arguments.length){
case 2:
return _to_cursor__2.call(this,value,state);
case 3:
return _to_cursor__3.call(this,value,state,path);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_to_cursor.cljs$core$IFn$_invoke$arity$2 = _to_cursor__2;
_to_cursor.cljs$core$IFn$_invoke$arity$3 = _to_cursor__3;
return _to_cursor;
})()
;
om.core.ICursorDerive = (function (){var obj27647 = {};return obj27647;
})();
om.core._derive = (function _derive(cursor,derived,state,path){if((function (){var and__3657__auto__ = cursor;if(and__3657__auto__)
{return cursor.om$core$ICursorDerive$_derive$arity$4;
} else
{return and__3657__auto__;
}
})())
{return cursor.om$core$ICursorDerive$_derive$arity$4(cursor,derived,state,path);
} else
{var x__4305__auto__ = (((cursor == null))?null:cursor);return (function (){var or__3669__auto__ = (om.core._derive[(function (){var G__27651 = x__4305__auto__;return goog.typeOf(G__27651);
})()]);if(or__3669__auto__)
{return or__3669__auto__;
} else
{var or__3669__auto____$1 = (om.core._derive["_"]);if(or__3669__auto____$1)
{return or__3669__auto____$1;
} else
{throw cljs.core.missing_protocol("ICursorDerive.-derive",cursor);
}
}
})().call(null,cursor,derived,state,path);
}
});
(om.core.ICursorDerive["_"] = true);
(om.core._derive["_"] = (function (this$,derived,state,path){var G__27652 = derived;var G__27653 = state;var G__27654 = path;return (om.core.to_cursor.cljs$core$IFn$_invoke$arity$3 ? om.core.to_cursor.cljs$core$IFn$_invoke$arity$3(G__27652,G__27653,G__27654) : om.core.to_cursor.call(null,G__27652,G__27653,G__27654));
}));
om.core.path = (function path(cursor){return om.core._path(cursor);
});
om.core.value = (function value(cursor){return om.core._value(cursor);
});
om.core.state = (function state(cursor){return om.core._state(cursor);
});
om.core.ITransact = (function (){var obj27656 = {};return obj27656;
})();
om.core._transact_BANG_ = (function _transact_BANG_(cursor,korks,f,tag){if((function (){var and__3657__auto__ = cursor;if(and__3657__auto__)
{return cursor.om$core$ITransact$_transact_BANG_$arity$4;
} else
{return and__3657__auto__;
}
})())
{return cursor.om$core$ITransact$_transact_BANG_$arity$4(cursor,korks,f,tag);
} else
{var x__4305__auto__ = (((cursor == null))?null:cursor);return (function (){var or__3669__auto__ = (om.core._transact_BANG_[(function (){var G__27660 = x__4305__auto__;return goog.typeOf(G__27660);
})()]);if(or__3669__auto__)
{return or__3669__auto__;
} else
{var or__3669__auto____$1 = (om.core._transact_BANG_["_"]);if(or__3669__auto____$1)
{return or__3669__auto____$1;
} else
{throw cljs.core.missing_protocol("ITransact.-transact!",cursor);
}
}
})().call(null,cursor,korks,f,tag);
}
});
om.core.INotify = (function (){var obj27662 = {};return obj27662;
})();
om.core._listen_BANG_ = (function _listen_BANG_(x,key,tx_listen){if((function (){var and__3657__auto__ = x;if(and__3657__auto__)
{return x.om$core$INotify$_listen_BANG_$arity$3;
} else
{return and__3657__auto__;
}
})())
{return x.om$core$INotify$_listen_BANG_$arity$3(x,key,tx_listen);
} else
{var x__4305__auto__ = (((x == null))?null:x);return (function (){var or__3669__auto__ = (om.core._listen_BANG_[(function (){var G__27666 = x__4305__auto__;return goog.typeOf(G__27666);
})()]);if(or__3669__auto__)
{return or__3669__auto__;
} else
{var or__3669__auto____$1 = (om.core._listen_BANG_["_"]);if(or__3669__auto____$1)
{return or__3669__auto____$1;
} else
{throw cljs.core.missing_protocol("INotify.-listen!",x);
}
}
})().call(null,x,key,tx_listen);
}
});
om.core._unlisten_BANG_ = (function _unlisten_BANG_(x,key){if((function (){var and__3657__auto__ = x;if(and__3657__auto__)
{return x.om$core$INotify$_unlisten_BANG_$arity$2;
} else
{return and__3657__auto__;
}
})())
{return x.om$core$INotify$_unlisten_BANG_$arity$2(x,key);
} else
{var x__4305__auto__ = (((x == null))?null:x);return (function (){var or__3669__auto__ = (om.core._unlisten_BANG_[(function (){var G__27670 = x__4305__auto__;return goog.typeOf(G__27670);
})()]);if(or__3669__auto__)
{return or__3669__auto__;
} else
{var or__3669__auto____$1 = (om.core._unlisten_BANG_["_"]);if(or__3669__auto____$1)
{return or__3669__auto____$1;
} else
{throw cljs.core.missing_protocol("INotify.-unlisten!",x);
}
}
})().call(null,x,key);
}
});
om.core._notify_BANG_ = (function _notify_BANG_(x,tx_data,root_cursor){if((function (){var and__3657__auto__ = x;if(and__3657__auto__)
{return x.om$core$INotify$_notify_BANG_$arity$3;
} else
{return and__3657__auto__;
}
})())
{return x.om$core$INotify$_notify_BANG_$arity$3(x,tx_data,root_cursor);
} else
{var x__4305__auto__ = (((x == null))?null:x);return (function (){var or__3669__auto__ = (om.core._notify_BANG_[(function (){var G__27674 = x__4305__auto__;return goog.typeOf(G__27674);
})()]);if(or__3669__auto__)
{return or__3669__auto__;
} else
{var or__3669__auto____$1 = (om.core._notify_BANG_["_"]);if(or__3669__auto____$1)
{return or__3669__auto____$1;
} else
{throw cljs.core.missing_protocol("INotify.-notify!",x);
}
}
})().call(null,x,tx_data,root_cursor);
}
});
om.core.transact_STAR_ = (function transact_STAR_(state,cursor,korks,f,tag){var old_state = (function (){var G__27684 = state;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__27684) : cljs.core.deref.call(null,G__27684));
})();var path = cljs.core.into.cljs$core$IFn$_invoke$arity$2((function (){var G__27685 = cursor;return (om.core.path.cljs$core$IFn$_invoke$arity$1 ? om.core.path.cljs$core$IFn$_invoke$arity$1(G__27685) : om.core.path.call(null,G__27685));
})(),korks);var ret = (((function (){var G__27686 = state;if(G__27686)
{var bit__4332__auto__ = null;if(cljs.core.truth_((function (){var or__3669__auto__ = bit__4332__auto__;if(cljs.core.truth_(or__3669__auto__))
{return or__3669__auto__;
} else
{return G__27686.om$core$IOmSwap$;
}
})()))
{return true;
} else
{if((!G__27686.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(om.core.IOmSwap,G__27686);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(om.core.IOmSwap,G__27686);
}
})())?om.core._om_swap_BANG_(state,cursor,korks,f,tag):((cljs.core.empty_QMARK_(path))?cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(state,f):cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.update_in,path,f)
));if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ret,cljs.core.constant$keyword$82))
{return null;
} else
{var tx_data = new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$83,path,cljs.core.constant$keyword$84,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(old_state,path),cljs.core.constant$keyword$85,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((function (){var G__27687 = state;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__27687) : cljs.core.deref.call(null,G__27687));
})(),path),cljs.core.constant$keyword$86,old_state,cljs.core.constant$keyword$87,(function (){var G__27688 = state;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__27688) : cljs.core.deref.call(null,G__27688));
})()], null);if(!((tag == null)))
{var G__27689 = cursor;var G__27690 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(tx_data,cljs.core.constant$keyword$30,tag);return (om.core.notify_STAR_.cljs$core$IFn$_invoke$arity$2 ? om.core.notify_STAR_.cljs$core$IFn$_invoke$arity$2(G__27689,G__27690) : om.core.notify_STAR_.call(null,G__27689,G__27690));
} else
{var G__27691 = cursor;var G__27692 = tx_data;return (om.core.notify_STAR_.cljs$core$IFn$_invoke$arity$2 ? om.core.notify_STAR_.cljs$core$IFn$_invoke$arity$2(G__27691,G__27692) : om.core.notify_STAR_.call(null,G__27691,G__27692));
}
}
});
om.core.cursor_QMARK_ = (function cursor_QMARK_(x){var G__27694 = x;if(G__27694)
{var bit__4332__auto__ = null;if(cljs.core.truth_((function (){var or__3669__auto__ = bit__4332__auto__;if(cljs.core.truth_(or__3669__auto__))
{return or__3669__auto__;
} else
{return G__27694.om$core$ICursor$;
}
})()))
{return true;
} else
{if((!G__27694.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(om.core.ICursor,G__27694);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(om.core.ICursor,G__27694);
}
});
om.core.children = (function children(node){var c = node.props.children;if(cljs.core.fn_QMARK_(c))
{return node.props.children = (function (){var _STAR_read_enabled_STAR_27697 = om.core._STAR_read_enabled_STAR_;try{om.core._STAR_read_enabled_STAR_ = true;
var G__27698 = node;return (c.cljs$core$IFn$_invoke$arity$1 ? c.cljs$core$IFn$_invoke$arity$1(G__27698) : c.call(null,G__27698));
}finally {om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR_27697;
}})();
} else
{return c;
}
});
/**
* Given an owning Pure node return the Om props. Analogous to React
* component props.
*/
om.core.get_props = (function get_props(x){return (x.props["__om_cursor"]);
});
/**
* Returns the component local state of an owning component. owner is
* the component. An optional key or sequence of keys may be given to
* extract a specific value. Always returns pending state.
*/
om.core.get_state = (function() {
var get_state = null;
var get_state__1 = (function (owner){return om.core._get_state.cljs$core$IFn$_invoke$arity$1(owner);
});
var get_state__2 = (function (owner,korks){var ks = ((cljs.core.sequential_QMARK_(korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null));return om.core._get_state.cljs$core$IFn$_invoke$arity$2(owner,ks);
});
get_state = function(owner,korks){
switch(arguments.length){
case 1:
return get_state__1.call(this,owner);
case 2:
return get_state__2.call(this,owner,korks);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
get_state.cljs$core$IFn$_invoke$arity$1 = get_state__1;
get_state.cljs$core$IFn$_invoke$arity$2 = get_state__2;
return get_state;
})()
;
/**
* Takes an owner and returns a map of global shared values for a
* render loop. An optional key or sequence of keys may be given to
* extract a specific value.
*/
om.core.get_shared = (function() {
var get_shared = null;
var get_shared__1 = (function (owner){if((owner == null))
{return null;
} else
{return (owner.props["__om_shared"]);
}
});
var get_shared__2 = (function (owner,korks){if(!(cljs.core.sequential_QMARK_(korks)))
{return cljs.core.get.cljs$core$IFn$_invoke$arity$2(get_shared.cljs$core$IFn$_invoke$arity$1(owner),korks);
} else
{if(cljs.core.empty_QMARK_(korks))
{return get_shared.cljs$core$IFn$_invoke$arity$1(owner);
} else
{return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(get_shared.cljs$core$IFn$_invoke$arity$1(owner),korks);

}
}
});
get_shared = function(owner,korks){
switch(arguments.length){
case 1:
return get_shared__1.call(this,owner);
case 2:
return get_shared__2.call(this,owner,korks);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
get_shared.cljs$core$IFn$_invoke$arity$1 = get_shared__1;
get_shared.cljs$core$IFn$_invoke$arity$2 = get_shared__2;
return get_shared;
})()
;
om.core.merge_pending_state = (function merge_pending_state(owner){var state = owner.state;var temp__4126__auto__ = (state["__om_pending_state"]);if(cljs.core.truth_(temp__4126__auto__))
{var pending_state = temp__4126__auto__;var G__27703 = state;(G__27703["__om_prev_state"] = (state["__om_state"]));
(G__27703["__om_state"] = pending_state);
(G__27703["__om_pending_state"] = null);
return G__27703;
} else
{return null;
}
});
om.core.merge_props_state = (function() {
var merge_props_state = null;
var merge_props_state__1 = (function (owner){return merge_props_state.cljs$core$IFn$_invoke$arity$2(owner,null);
});
var merge_props_state__2 = (function (owner,props){var props__$1 = (function (){var or__3669__auto__ = props;if(cljs.core.truth_(or__3669__auto__))
{return or__3669__auto__;
} else
{return owner.props;
}
})();var temp__4126__auto__ = (props__$1["__om_state"]);if(cljs.core.truth_(temp__4126__auto__))
{var props_state = temp__4126__auto__;var state = owner.state;(state["__om_pending_state"] = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(function (){var or__3669__auto__ = (state["__om_pending_state"]);if(cljs.core.truth_(or__3669__auto__))
{return or__3669__auto__;
} else
{return (state["__om_state"]);
}
})(),props_state], 0)));
return (props__$1["__om_state"] = null);
} else
{return null;
}
});
merge_props_state = function(owner,props){
switch(arguments.length){
case 1:
return merge_props_state__1.call(this,owner);
case 2:
return merge_props_state__2.call(this,owner,props);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
merge_props_state.cljs$core$IFn$_invoke$arity$1 = merge_props_state__1;
merge_props_state.cljs$core$IFn$_invoke$arity$2 = merge_props_state__2;
return merge_props_state;
})()
;
om.core.pure_methods = cljs.core.PersistentHashMap.fromArrays([cljs.core.constant$keyword$88,cljs.core.constant$keyword$89,cljs.core.constant$keyword$90,cljs.core.constant$keyword$91,cljs.core.constant$keyword$92,cljs.core.constant$keyword$93,cljs.core.constant$keyword$94,cljs.core.constant$keyword$95,cljs.core.constant$keyword$96,cljs.core.constant$keyword$97],[(function (prev_props,prev_state){var this$ = this;var c = om.core.children(this$);if((function (){var G__27706 = c;if(G__27706)
{var bit__4332__auto__ = null;if(cljs.core.truth_((function (){var or__3669__auto__ = bit__4332__auto__;if(cljs.core.truth_(or__3669__auto__))
{return or__3669__auto__;
} else
{return G__27706.om$core$IDidUpdate$;
}
})()))
{return true;
} else
{if((!G__27706.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(om.core.IDidUpdate,G__27706);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(om.core.IDidUpdate,G__27706);
}
})())
{var state_27733 = this$.state;var _STAR_read_enabled_STAR_27707_27734 = om.core._STAR_read_enabled_STAR_;try{om.core._STAR_read_enabled_STAR_ = true;
om.core.did_update(c,om.core.get_props({"props": prev_props}),(function (){var or__3669__auto__ = (state_27733["__om_prev_state"]);if(cljs.core.truth_(or__3669__auto__))
{return or__3669__auto__;
} else
{return (state_27733["__om_state"]);
}
})());
}finally {om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR_27707_27734;
}} else
{}
return (this$.state["__om_prev_state"] = null);
}),(function (){var this$ = this;var c = om.core.children(this$);if((function (){var G__27708 = c;if(G__27708)
{var bit__4332__auto__ = null;if(cljs.core.truth_((function (){var or__3669__auto__ = bit__4332__auto__;if(cljs.core.truth_(or__3669__auto__))
{return or__3669__auto__;
} else
{return G__27708.om$core$IWillUnmount$;
}
})()))
{return true;
} else
{if((!G__27708.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(om.core.IWillUnmount,G__27708);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(om.core.IWillUnmount,G__27708);
}
})())
{var _STAR_read_enabled_STAR_27709 = om.core._STAR_read_enabled_STAR_;try{om.core._STAR_read_enabled_STAR_ = true;
return om.core.will_unmount(c);
}finally {om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR_27709;
}} else
{return null;
}
}),(function (next_props){var this$ = this;var c = om.core.children(this$);if((function (){var G__27710 = c;if(G__27710)
{var bit__4332__auto__ = null;if(cljs.core.truth_((function (){var or__3669__auto__ = bit__4332__auto__;if(cljs.core.truth_(or__3669__auto__))
{return or__3669__auto__;
} else
{return G__27710.om$core$IWillReceiveProps$;
}
})()))
{return true;
} else
{if((!G__27710.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(om.core.IWillReceiveProps,G__27710);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(om.core.IWillReceiveProps,G__27710);
}
})())
{var _STAR_read_enabled_STAR_27711 = om.core._STAR_read_enabled_STAR_;try{om.core._STAR_read_enabled_STAR_ = true;
return om.core.will_receive_props(c,om.core.get_props({"props": next_props}));
}finally {om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR_27711;
}} else
{return null;
}
}),(function (next_props,next_state){var this$ = this;var _STAR_read_enabled_STAR_27712 = om.core._STAR_read_enabled_STAR_;try{om.core._STAR_read_enabled_STAR_ = true;
var props = this$.props;var state = this$.state;var c = om.core.children(this$);om.core.merge_props_state.cljs$core$IFn$_invoke$arity$2(this$,next_props);
if((function (){var G__27713 = c;if(G__27713)
{var bit__4332__auto__ = null;if(cljs.core.truth_((function (){var or__3669__auto__ = bit__4332__auto__;if(cljs.core.truth_(or__3669__auto__))
{return or__3669__auto__;
} else
{return G__27713.om$core$IShouldUpdate$;
}
})()))
{return true;
} else
{if((!G__27713.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(om.core.IShouldUpdate,G__27713);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(om.core.IShouldUpdate,G__27713);
}
})())
{return om.core.should_update(c,om.core.get_props({"props": next_props}),om.core._get_state.cljs$core$IFn$_invoke$arity$1(this$));
} else
{var cursor = (props["__om_cursor"]);var next_cursor = (next_props["__om_cursor"]);if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(om.core._value(cursor),om.core._value(next_cursor)))
{return true;
} else
{if((om.core.cursor_QMARK_(cursor)) && (om.core.cursor_QMARK_(next_cursor)) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(om.core._path(cursor),om.core._path(next_cursor))))
{return true;
} else
{if(!(((state["__om_pending_state"]) == null)))
{return true;
} else
{if(!(((props["__om_index"]) === (next_props["__om_index"]))))
{return true;
} else
{return false;

}
}
}
}
}
}finally {om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR_27712;
}}),(function (){var this$ = this;var c = om.core.children(this$);var props = this$.props;var _STAR_read_enabled_STAR_27714 = om.core._STAR_read_enabled_STAR_;try{om.core._STAR_read_enabled_STAR_ = true;
if((function (){var G__27715 = c;if(G__27715)
{var bit__4332__auto__ = null;if(cljs.core.truth_((function (){var or__3669__auto__ = bit__4332__auto__;if(cljs.core.truth_(or__3669__auto__))
{return or__3669__auto__;
} else
{return G__27715.om$core$IRender$;
}
})()))
{return true;
} else
{if((!G__27715.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(om.core.IRender,G__27715);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(om.core.IRender,G__27715);
}
})())
{var _STAR_parent_STAR_27716 = om.core._STAR_parent_STAR_;var _STAR_state_STAR_27717 = om.core._STAR_state_STAR_;var _STAR_instrument_STAR_27718 = om.core._STAR_instrument_STAR_;try{om.core._STAR_parent_STAR_ = this$;
om.core._STAR_state_STAR_ = (props["__om_app_state"]);
om.core._STAR_instrument_STAR_ = (props["__om_instrument"]);
return om.core.render(c);
}finally {om.core._STAR_instrument_STAR_ = _STAR_instrument_STAR_27718;
om.core._STAR_state_STAR_ = _STAR_state_STAR_27717;
om.core._STAR_parent_STAR_ = _STAR_parent_STAR_27716;
}} else
{if((function (){var G__27719 = c;if(G__27719)
{var bit__4332__auto__ = null;if(cljs.core.truth_((function (){var or__3669__auto__ = bit__4332__auto__;if(cljs.core.truth_(or__3669__auto__))
{return or__3669__auto__;
} else
{return G__27719.om$core$IRenderState$;
}
})()))
{return true;
} else
{if((!G__27719.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(om.core.IRenderState,G__27719);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(om.core.IRenderState,G__27719);
}
})())
{var _STAR_parent_STAR_27720 = om.core._STAR_parent_STAR_;var _STAR_state_STAR_27721 = om.core._STAR_state_STAR_;var _STAR_instrument_STAR_27722 = om.core._STAR_instrument_STAR_;try{om.core._STAR_parent_STAR_ = this$;
om.core._STAR_state_STAR_ = (props["__om_app_state"]);
om.core._STAR_instrument_STAR_ = (props["__om_instrument"]);
return om.core.render_state(c,om.core.get_state.cljs$core$IFn$_invoke$arity$1(this$));
}finally {om.core._STAR_instrument_STAR_ = _STAR_instrument_STAR_27722;
om.core._STAR_state_STAR_ = _STAR_state_STAR_27721;
om.core._STAR_parent_STAR_ = _STAR_parent_STAR_27720;
}} else
{return c;

}
}
}finally {om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR_27714;
}}),(function (next_props,next_state){var this$ = this;var c_27735 = om.core.children(this$);if((function (){var G__27723 = c_27735;if(G__27723)
{var bit__4332__auto__ = null;if(cljs.core.truth_((function (){var or__3669__auto__ = bit__4332__auto__;if(cljs.core.truth_(or__3669__auto__))
{return or__3669__auto__;
} else
{return G__27723.om$core$IWillUpdate$;
}
})()))
{return true;
} else
{if((!G__27723.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(om.core.IWillUpdate,G__27723);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(om.core.IWillUpdate,G__27723);
}
})())
{var state_27736 = this$.state;var _STAR_read_enabled_STAR_27724_27737 = om.core._STAR_read_enabled_STAR_;try{om.core._STAR_read_enabled_STAR_ = true;
om.core.will_update(c_27735,om.core.get_props({"props": next_props}),om.core._get_state.cljs$core$IFn$_invoke$arity$1(this$));
}finally {om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR_27724_27737;
}} else
{}
return om.core.merge_pending_state(this$);
}),(function (){var this$ = this;var c = om.core.children(this$);var props = this$.props;var istate = (function (){var or__3669__auto__ = (props["__om_init_state"]);if(cljs.core.truth_(or__3669__auto__))
{return or__3669__auto__;
} else
{return cljs.core.PersistentArrayMap.EMPTY;
}
})();var id = cljs.core.constant$keyword$98.cljs$core$IFn$_invoke$arity$1(istate);var ret = {"__om_state": cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(((function (){var G__27725 = c;if(G__27725)
{var bit__4332__auto__ = null;if(cljs.core.truth_((function (){var or__3669__auto__ = bit__4332__auto__;if(cljs.core.truth_(or__3669__auto__))
{return or__3669__auto__;
} else
{return G__27725.om$core$IInitState$;
}
})()))
{return true;
} else
{if((!G__27725.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(om.core.IInitState,G__27725);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(om.core.IInitState,G__27725);
}
})())?(function (){var _STAR_read_enabled_STAR_27726 = om.core._STAR_read_enabled_STAR_;try{om.core._STAR_read_enabled_STAR_ = true;
return om.core.init_state(c);
}finally {om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR_27726;
}})():null),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(istate,cljs.core.constant$keyword$98)], 0)), "__om_id": (function (){var or__3669__auto__ = id;if(cljs.core.truth_(or__3669__auto__))
{return or__3669__auto__;
} else
{return goog.ui.IdGenerator.getInstance().getNextUniqueId();
}
})()};(props["__om_init_state"] = null);
return ret;
}),(function (){var this$ = this;var c = om.core.children(this$);if((function (){var G__27727 = c;if(G__27727)
{var bit__4332__auto__ = null;if(cljs.core.truth_((function (){var or__3669__auto__ = bit__4332__auto__;if(cljs.core.truth_(or__3669__auto__))
{return or__3669__auto__;
} else
{return G__27727.om$core$IDidMount$;
}
})()))
{return true;
} else
{if((!G__27727.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(om.core.IDidMount,G__27727);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(om.core.IDidMount,G__27727);
}
})())
{var _STAR_read_enabled_STAR_27728 = om.core._STAR_read_enabled_STAR_;try{om.core._STAR_read_enabled_STAR_ = true;
return om.core.did_mount(c);
}finally {om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR_27728;
}} else
{return null;
}
}),(function (){var this$ = this;var c = om.core.children(this$);if((function (){var G__27729 = c;if(G__27729)
{var bit__4332__auto__ = null;if(cljs.core.truth_((function (){var or__3669__auto__ = bit__4332__auto__;if(cljs.core.truth_(or__3669__auto__))
{return or__3669__auto__;
} else
{return G__27729.om$core$IDisplayName$;
}
})()))
{return true;
} else
{if((!G__27729.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(om.core.IDisplayName,G__27729);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(om.core.IDisplayName,G__27729);
}
})())
{var _STAR_read_enabled_STAR_27730 = om.core._STAR_read_enabled_STAR_;try{om.core._STAR_read_enabled_STAR_ = true;
return om.core.display_name(c);
}finally {om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR_27730;
}} else
{return null;
}
}),(function (){var this$ = this;om.core.merge_props_state.cljs$core$IFn$_invoke$arity$1(this$);
var c_27738 = om.core.children(this$);if((function (){var G__27731 = c_27738;if(G__27731)
{var bit__4332__auto__ = null;if(cljs.core.truth_((function (){var or__3669__auto__ = bit__4332__auto__;if(cljs.core.truth_(or__3669__auto__))
{return or__3669__auto__;
} else
{return G__27731.om$core$IWillMount$;
}
})()))
{return true;
} else
{if((!G__27731.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(om.core.IWillMount,G__27731);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(om.core.IWillMount,G__27731);
}
})())
{var _STAR_read_enabled_STAR_27732_27739 = om.core._STAR_read_enabled_STAR_;try{om.core._STAR_read_enabled_STAR_ = true;
om.core.will_mount(c_27738);
}finally {om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR_27732_27739;
}} else
{}
return om.core.merge_pending_state(this$);
})]);
om.core.specify_state_methods_BANG_ = (function specify_state_methods_BANG_(obj){var x27743 = obj;x27743.om$core$IGetState$ = true;
x27743.om$core$IGetState$_get_state$arity$1 = ((function (x27743){
return (function (this$){var this$__$1 = this;var state = this$__$1.state;var or__3669__auto__ = (state["__om_pending_state"]);if(cljs.core.truth_(or__3669__auto__))
{return or__3669__auto__;
} else
{return (state["__om_state"]);
}
});})(x27743))
;
x27743.om$core$IGetState$_get_state$arity$2 = ((function (x27743){
return (function (this$,ks){var this$__$1 = this;return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.core._get_state.cljs$core$IFn$_invoke$arity$1(this$__$1),ks);
});})(x27743))
;
x27743.om$core$IGetRenderState$ = true;
x27743.om$core$IGetRenderState$_get_render_state$arity$1 = ((function (x27743){
return (function (this$){var this$__$1 = this;return (this$__$1.state["__om_state"]);
});})(x27743))
;
x27743.om$core$IGetRenderState$_get_render_state$arity$2 = ((function (x27743){
return (function (this$,ks){var this$__$1 = this;return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.core._get_render_state.cljs$core$IFn$_invoke$arity$1(this$__$1),ks);
});})(x27743))
;
x27743.om$core$ISetState$ = true;
x27743.om$core$ISetState$_set_state_BANG_$arity$3 = ((function (x27743){
return (function (this$,val,render){var this$__$1 = this;var _STAR_read_enabled_STAR_27744 = om.core._STAR_read_enabled_STAR_;try{om.core._STAR_read_enabled_STAR_ = true;
var props = this$__$1.props;var app_state = (props["__om_app_state"]);(this$__$1.state["__om_pending_state"] = val);
if(cljs.core.truth_((function (){var and__3657__auto__ = !((app_state == null));if(and__3657__auto__)
{return render;
} else
{return and__3657__auto__;
}
})()))
{return om.core._queue_render_BANG_(app_state,this$__$1);
} else
{return null;
}
}finally {om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR_27744;
}});})(x27743))
;
x27743.om$core$ISetState$_set_state_BANG_$arity$4 = ((function (x27743){
return (function (this$,ks,val,render){var this$__$1 = this;var _STAR_read_enabled_STAR_27745 = om.core._STAR_read_enabled_STAR_;try{om.core._STAR_read_enabled_STAR_ = true;
var props = this$__$1.props;var state = this$__$1.state;var pstate = om.core._get_state.cljs$core$IFn$_invoke$arity$1(this$__$1);var app_state = (props["__om_app_state"]);(state["__om_pending_state"] = cljs.core.assoc_in(pstate,ks,val));
if(cljs.core.truth_((function (){var and__3657__auto__ = !((app_state == null));if(and__3657__auto__)
{return render;
} else
{return and__3657__auto__;
}
})()))
{return om.core._queue_render_BANG_(app_state,this$__$1);
} else
{return null;
}
}finally {om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR_27745;
}});})(x27743))
;
return x27743;
});
om.core.pure_descriptor = om.core.specify_state_methods_BANG_(cljs.core.clj__GT_js(om.core.pure_methods));

/**
* @constructor
*/
om.core.MapCursor = (function (value,state,path){
this.value = value;
this.state = state;
this.path = path;
this.cljs$lang$protocol_mask$partition0$ = 2162591503;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
om.core.MapCursor.cljs$lang$type = true;
om.core.MapCursor.cljs$lang$ctorStr = "om.core/MapCursor";
om.core.MapCursor.cljs$lang$ctorPrWriter = (function (this__4245__auto__,writer__4246__auto__,opt__4247__auto__){return cljs.core._write(writer__4246__auto__,"om.core/MapCursor");
});
om.core.MapCursor.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this$,k){var self__ = this;
var this$__$1 = this;return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this$__$1,k,null);
});
om.core.MapCursor.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this$,k,not_found){var self__ = this;
var this$__$1 = this;if(om.core._STAR_read_enabled_STAR_)
{var v = cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(self__.value,k,not_found);if(!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v,not_found)))
{return om.core._derive(this$__$1,v,self__.state,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(self__.path,k));
} else
{return not_found;
}
} else
{throw (new Error(("Cannot manipulate cursor outside of render phase, only om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")));
}
});
om.core.MapCursor.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (_,writer,opts){var self__ = this;
var ___$1 = this;if(om.core._STAR_read_enabled_STAR_)
{return cljs.core._pr_writer(self__.value,writer,opts);
} else
{throw (new Error(("Cannot manipulate cursor outside of render phase, only om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")));
}
});
om.core.MapCursor.prototype.om$core$ICursor$ = true;
om.core.MapCursor.prototype.om$core$ICursor$_path$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.path;
});
om.core.MapCursor.prototype.om$core$ICursor$_state$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.state;
});
om.core.MapCursor.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){var self__ = this;
var ___$1 = this;if(om.core._STAR_read_enabled_STAR_)
{return cljs.core.meta(self__.value);
} else
{throw (new Error(("Cannot manipulate cursor outside of render phase, only om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")));
}
});
om.core.MapCursor.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return (new om.core.MapCursor(self__.value,self__.state,self__.path));
});
om.core.MapCursor.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){var self__ = this;
var ___$1 = this;if(om.core._STAR_read_enabled_STAR_)
{return cljs.core._count(self__.value);
} else
{throw (new Error(("Cannot manipulate cursor outside of render phase, only om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")));
}
});
om.core.MapCursor.prototype.cljs$core$IHash$_hash$arity$1 = (function (_){var self__ = this;
var ___$1 = this;if(om.core._STAR_read_enabled_STAR_)
{return cljs.core.hash(self__.value);
} else
{throw (new Error(("Cannot manipulate cursor outside of render phase, only om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")));
}
});
om.core.MapCursor.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){var self__ = this;
var ___$1 = this;if(om.core._STAR_read_enabled_STAR_)
{if(om.core.cursor_QMARK_(other))
{return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.value,om.core._value(other));
} else
{return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.value,other);
}
} else
{throw (new Error(("Cannot manipulate cursor outside of render phase, only om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")));
}
});
om.core.MapCursor.prototype.om$core$IValue$ = true;
om.core.MapCursor.prototype.om$core$IValue$_value$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.value;
});
om.core.MapCursor.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (_){var self__ = this;
var ___$1 = this;if(om.core._STAR_read_enabled_STAR_)
{return (new om.core.MapCursor(cljs.core.empty(self__.value),self__.state,self__.path));
} else
{throw (new Error(("Cannot manipulate cursor outside of render phase, only om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")));
}
});
om.core.MapCursor.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (_,k){var self__ = this;
var ___$1 = this;if(om.core._STAR_read_enabled_STAR_)
{return (new om.core.MapCursor(cljs.core._dissoc(self__.value,k),self__.state,self__.path));
} else
{throw (new Error(("Cannot manipulate cursor outside of render phase, only om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")));
}
});
om.core.MapCursor.prototype.om$core$ITransact$ = true;
om.core.MapCursor.prototype.om$core$ITransact$_transact_BANG_$arity$4 = (function (this$,korks,f,tag){var self__ = this;
var this$__$1 = this;return om.core.transact_STAR_(self__.state,this$__$1,korks,f,tag);
});
om.core.MapCursor.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (_,k){var self__ = this;
var ___$1 = this;if(om.core._STAR_read_enabled_STAR_)
{return cljs.core._contains_key_QMARK_(self__.value,k);
} else
{throw (new Error(("Cannot manipulate cursor outside of render phase, only om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")));
}
});
om.core.MapCursor.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (_,k,v){var self__ = this;
var ___$1 = this;if(om.core._STAR_read_enabled_STAR_)
{return (new om.core.MapCursor(cljs.core._assoc(self__.value,k,v),self__.state,self__.path));
} else
{throw (new Error(("Cannot manipulate cursor outside of render phase, only om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")));
}
});
om.core.MapCursor.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;if(om.core._STAR_read_enabled_STAR_)
{if((cljs.core.count(self__.value) > (0)))
{return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (this$__$1){
return (function (p__27747){var vec__27748 = p__27747;var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27748,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27748,(1),null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,om.core._derive(this$__$1,v,self__.state,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(self__.path,k))], null);
});})(this$__$1))
,self__.value);
} else
{return null;
}
} else
{throw (new Error(("Cannot manipulate cursor outside of render phase, only om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")));
}
});
om.core.MapCursor.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_,new_meta){var self__ = this;
var ___$1 = this;if(om.core._STAR_read_enabled_STAR_)
{return (new om.core.MapCursor(cljs.core.with_meta(self__.value,new_meta),self__.state,self__.path));
} else
{throw (new Error(("Cannot manipulate cursor outside of render phase, only om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")));
}
});
om.core.MapCursor.prototype.cljs$core$ICollection$_conj$arity$2 = (function (_,o){var self__ = this;
var ___$1 = this;if(om.core._STAR_read_enabled_STAR_)
{return (new om.core.MapCursor(cljs.core._conj(self__.value,o),self__.state,self__.path));
} else
{throw (new Error(("Cannot manipulate cursor outside of render phase, only om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")));
}
});
om.core.MapCursor.prototype.call = (function() {
var G__27750 = null;
var G__27750__2 = (function (self__,k){var self__ = this;
var self____$1 = this;var this$ = self____$1;return this$.cljs$core$ILookup$_lookup$arity$2(null,k);
});
var G__27750__3 = (function (self__,k,not_found){var self__ = this;
var self____$1 = this;var this$ = self____$1;return this$.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});
G__27750 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__27750__2.call(this,self__,k);
case 3:
return G__27750__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__27750.cljs$core$IFn$_invoke$arity$2 = G__27750__2;
G__27750.cljs$core$IFn$_invoke$arity$3 = G__27750__3;
return G__27750;
})()
;
om.core.MapCursor.prototype.apply = (function (self__,args27746){var self__ = this;
var self____$1 = this;return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args27746)));
});
om.core.MapCursor.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){var self__ = this;
var this$ = this;return this$.cljs$core$ILookup$_lookup$arity$2(null,k);
});
om.core.MapCursor.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){var self__ = this;
var this$ = this;return this$.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});
om.core.MapCursor.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;if(!(om.core._STAR_read_enabled_STAR_))
{return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((function (){var G__27749 = self__.state;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__27749) : cljs.core.deref.call(null,G__27749));
})(),self__.path);
} else
{throw (new Error(("Cannot deref cursor during render phase: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$__$1))));
}
});
om.core.__GT_MapCursor = (function __GT_MapCursor(value,state,path){return (new om.core.MapCursor(value,state,path));
});

/**
* @constructor
*/
om.core.IndexedCursor = (function (value,state,path){
this.value = value;
this.state = state;
this.path = path;
this.cljs$lang$protocol_mask$partition0$ = 2179375903;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
om.core.IndexedCursor.cljs$lang$type = true;
om.core.IndexedCursor.cljs$lang$ctorStr = "om.core/IndexedCursor";
om.core.IndexedCursor.cljs$lang$ctorPrWriter = (function (this__4245__auto__,writer__4246__auto__,opt__4247__auto__){return cljs.core._write(writer__4246__auto__,"om.core/IndexedCursor");
});
om.core.IndexedCursor.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this$,n){var self__ = this;
var this$__$1 = this;if(om.core._STAR_read_enabled_STAR_)
{return cljs.core._nth.cljs$core$IFn$_invoke$arity$3(this$__$1,n,null);
} else
{throw (new Error(("Cannot manipulate cursor outside of render phase, only om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")));
}
});
om.core.IndexedCursor.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this$,n,not_found){var self__ = this;
var this$__$1 = this;if(om.core._STAR_read_enabled_STAR_)
{return cljs.core._nth.cljs$core$IFn$_invoke$arity$3(this$__$1,n,not_found);
} else
{throw (new Error(("Cannot manipulate cursor outside of render phase, only om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")));
}
});
om.core.IndexedCursor.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){var self__ = this;
var this$__$1 = this;if(om.core._STAR_read_enabled_STAR_)
{return om.core._derive(this$__$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(self__.value,n),self__.state,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(self__.path,n));
} else
{throw (new Error(("Cannot manipulate cursor outside of render phase, only om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")));
}
});
om.core.IndexedCursor.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){var self__ = this;
var this$__$1 = this;if(om.core._STAR_read_enabled_STAR_)
{if((n < cljs.core._count(self__.value)))
{return om.core._derive(this$__$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(self__.value,n),self__.state,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(self__.path,n));
} else
{return not_found;
}
} else
{throw (new Error(("Cannot manipulate cursor outside of render phase, only om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")));
}
});
om.core.IndexedCursor.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (_,writer,opts){var self__ = this;
var ___$1 = this;if(om.core._STAR_read_enabled_STAR_)
{return cljs.core._pr_writer(self__.value,writer,opts);
} else
{throw (new Error(("Cannot manipulate cursor outside of render phase, only om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")));
}
});
om.core.IndexedCursor.prototype.om$core$ICursor$ = true;
om.core.IndexedCursor.prototype.om$core$ICursor$_path$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.path;
});
om.core.IndexedCursor.prototype.om$core$ICursor$_state$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.state;
});
om.core.IndexedCursor.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){var self__ = this;
var ___$1 = this;if(om.core._STAR_read_enabled_STAR_)
{return cljs.core.meta(self__.value);
} else
{throw (new Error(("Cannot manipulate cursor outside of render phase, only om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")));
}
});
om.core.IndexedCursor.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return (new om.core.IndexedCursor(self__.value,self__.state,self__.path));
});
om.core.IndexedCursor.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){var self__ = this;
var ___$1 = this;if(om.core._STAR_read_enabled_STAR_)
{return cljs.core._count(self__.value);
} else
{throw (new Error(("Cannot manipulate cursor outside of render phase, only om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")));
}
});
om.core.IndexedCursor.prototype.cljs$core$IStack$_peek$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;if(om.core._STAR_read_enabled_STAR_)
{return om.core._derive(this$__$1,cljs.core._peek(self__.value),self__.state,self__.path);
} else
{throw (new Error(("Cannot manipulate cursor outside of render phase, only om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")));
}
});
om.core.IndexedCursor.prototype.cljs$core$IStack$_pop$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;if(om.core._STAR_read_enabled_STAR_)
{return om.core._derive(this$__$1,cljs.core._pop(self__.value),self__.state,self__.path);
} else
{throw (new Error(("Cannot manipulate cursor outside of render phase, only om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")));
}
});
om.core.IndexedCursor.prototype.cljs$core$IHash$_hash$arity$1 = (function (_){var self__ = this;
var ___$1 = this;if(om.core._STAR_read_enabled_STAR_)
{return cljs.core.hash(self__.value);
} else
{throw (new Error(("Cannot manipulate cursor outside of render phase, only om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")));
}
});
om.core.IndexedCursor.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){var self__ = this;
var ___$1 = this;if(om.core._STAR_read_enabled_STAR_)
{if(om.core.cursor_QMARK_(other))
{return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.value,om.core._value(other));
} else
{return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.value,other);
}
} else
{throw (new Error(("Cannot manipulate cursor outside of render phase, only om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")));
}
});
om.core.IndexedCursor.prototype.om$core$IValue$ = true;
om.core.IndexedCursor.prototype.om$core$IValue$_value$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.value;
});
om.core.IndexedCursor.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (_){var self__ = this;
var ___$1 = this;if(om.core._STAR_read_enabled_STAR_)
{return (new om.core.IndexedCursor(cljs.core.empty(self__.value),self__.state,self__.path));
} else
{throw (new Error(("Cannot manipulate cursor outside of render phase, only om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")));
}
});
om.core.IndexedCursor.prototype.om$core$ITransact$ = true;
om.core.IndexedCursor.prototype.om$core$ITransact$_transact_BANG_$arity$4 = (function (this$,korks,f,tag){var self__ = this;
var this$__$1 = this;return om.core.transact_STAR_(self__.state,this$__$1,korks,f,tag);
});
om.core.IndexedCursor.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (_,k){var self__ = this;
var ___$1 = this;if(om.core._STAR_read_enabled_STAR_)
{return cljs.core._contains_key_QMARK_(self__.value,k);
} else
{throw (new Error(("Cannot manipulate cursor outside of render phase, only om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")));
}
});
om.core.IndexedCursor.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this$,n,v){var self__ = this;
var this$__$1 = this;if(om.core._STAR_read_enabled_STAR_)
{return om.core._derive(this$__$1,cljs.core._assoc_n(self__.value,n,v),self__.state,self__.path);
} else
{throw (new Error(("Cannot manipulate cursor outside of render phase, only om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")));
}
});
om.core.IndexedCursor.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;if(om.core._STAR_read_enabled_STAR_)
{if((cljs.core.count(self__.value) > (0)))
{return cljs.core.map.cljs$core$IFn$_invoke$arity$3(((function (this$__$1){
return (function (v,i){return om.core._derive(this$__$1,v,self__.state,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(self__.path,i));
});})(this$__$1))
,self__.value,cljs.core.range.cljs$core$IFn$_invoke$arity$0());
} else
{return null;
}
} else
{throw (new Error(("Cannot manipulate cursor outside of render phase, only om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")));
}
});
om.core.IndexedCursor.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_,new_meta){var self__ = this;
var ___$1 = this;if(om.core._STAR_read_enabled_STAR_)
{return (new om.core.IndexedCursor(cljs.core.with_meta(self__.value,new_meta),self__.state,self__.path));
} else
{throw (new Error(("Cannot manipulate cursor outside of render phase, only om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")));
}
});
om.core.IndexedCursor.prototype.cljs$core$ICollection$_conj$arity$2 = (function (_,o){var self__ = this;
var ___$1 = this;if(om.core._STAR_read_enabled_STAR_)
{return (new om.core.IndexedCursor(cljs.core._conj(self__.value,o),self__.state,self__.path));
} else
{throw (new Error(("Cannot manipulate cursor outside of render phase, only om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")));
}
});
om.core.IndexedCursor.prototype.call = (function() {
var G__27753 = null;
var G__27753__2 = (function (self__,k){var self__ = this;
var self____$1 = this;var this$ = self____$1;return this$.cljs$core$ILookup$_lookup$arity$2(null,k);
});
var G__27753__3 = (function (self__,k,not_found){var self__ = this;
var self____$1 = this;var this$ = self____$1;return this$.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});
G__27753 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__27753__2.call(this,self__,k);
case 3:
return G__27753__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__27753.cljs$core$IFn$_invoke$arity$2 = G__27753__2;
G__27753.cljs$core$IFn$_invoke$arity$3 = G__27753__3;
return G__27753;
})()
;
om.core.IndexedCursor.prototype.apply = (function (self__,args27751){var self__ = this;
var self____$1 = this;return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args27751)));
});
om.core.IndexedCursor.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){var self__ = this;
var this$ = this;return this$.cljs$core$ILookup$_lookup$arity$2(null,k);
});
om.core.IndexedCursor.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){var self__ = this;
var this$ = this;return this$.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});
om.core.IndexedCursor.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;if(!(om.core._STAR_read_enabled_STAR_))
{return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((function (){var G__27752 = self__.state;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__27752) : cljs.core.deref.call(null,G__27752));
})(),self__.path);
} else
{throw (new Error(("Cannot deref cursor during render phase: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$__$1))));
}
});
om.core.__GT_IndexedCursor = (function __GT_IndexedCursor(value,state,path){return (new om.core.IndexedCursor(value,state,path));
});
om.core.to_cursor_STAR_ = (function to_cursor_STAR_(val,state,path){var x27756 = cljs.core.clone(val);x27756.cljs$core$IEquiv$ = true;
x27756.cljs$core$IEquiv$_equiv$arity$2 = ((function (x27756){
return (function (_,other){var ___$1 = this;if(om.core._STAR_read_enabled_STAR_)
{if(om.core.cursor_QMARK_(other))
{return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(val,om.core._value(other));
} else
{return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(val,other);
}
} else
{throw (new Error(("Cannot manipulate cursor outside of render phase, only om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")));
}
});})(x27756))
;
x27756.om$core$ITransact$ = true;
x27756.om$core$ITransact$_transact_BANG_$arity$4 = ((function (x27756){
return (function (this$,korks,f,tag){var this$__$1 = this;return om.core.transact_STAR_(state,this$__$1,korks,f,tag);
});})(x27756))
;
x27756.om$core$ICursor$ = true;
x27756.om$core$ICursor$_path$arity$1 = ((function (x27756){
return (function (_){var ___$1 = this;return path;
});})(x27756))
;
x27756.om$core$ICursor$_state$arity$1 = ((function (x27756){
return (function (_){var ___$1 = this;return state;
});})(x27756))
;
x27756.cljs$core$IDeref$ = true;
x27756.cljs$core$IDeref$_deref$arity$1 = ((function (x27756){
return (function (this$){var this$__$1 = this;if(!(om.core._STAR_read_enabled_STAR_))
{return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((function (){var G__27757 = state;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__27757) : cljs.core.deref.call(null,G__27757));
})(),path);
} else
{throw (new Error(("Cannot deref cursor during render phase: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$__$1))));
}
});})(x27756))
;
return x27756;
});
om.core.to_cursor = (function() {
var to_cursor = null;
var to_cursor__1 = (function (val){return to_cursor.cljs$core$IFn$_invoke$arity$3(val,null,cljs.core.PersistentVector.EMPTY);
});
var to_cursor__2 = (function (val,state){return to_cursor.cljs$core$IFn$_invoke$arity$3(val,state,cljs.core.PersistentVector.EMPTY);
});
var to_cursor__3 = (function (val,state,path){if(om.core.cursor_QMARK_(val))
{return val;
} else
{if((function (){var G__27766 = val;if(G__27766)
{var bit__4332__auto__ = null;if(cljs.core.truth_((function (){var or__3669__auto__ = bit__4332__auto__;if(cljs.core.truth_(or__3669__auto__))
{return or__3669__auto__;
} else
{return G__27766.om$core$IToCursor$;
}
})()))
{return true;
} else
{if((!G__27766.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(om.core.IToCursor,G__27766);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(om.core.IToCursor,G__27766);
}
})())
{return om.core._to_cursor.cljs$core$IFn$_invoke$arity$3(val,state,path);
} else
{if(cljs.core.indexed_QMARK_(val))
{return (new om.core.IndexedCursor(val,state,path));
} else
{if(cljs.core.map_QMARK_(val))
{return (new om.core.MapCursor(val,state,path));
} else
{if((function (){var G__27767 = val;if(G__27767)
{var bit__4332__auto__ = (G__27767.cljs$lang$protocol_mask$partition1$ & (8192));if((bit__4332__auto__) || (G__27767.cljs$core$ICloneable$))
{return true;
} else
{if((!G__27767.cljs$lang$protocol_mask$partition1$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.ICloneable,G__27767);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.ICloneable,G__27767);
}
})())
{return om.core.to_cursor_STAR_(val,state,path);
} else
{return val;

}
}
}
}
}
});
to_cursor = function(val,state,path){
switch(arguments.length){
case 1:
return to_cursor__1.call(this,val);
case 2:
return to_cursor__2.call(this,val,state);
case 3:
return to_cursor__3.call(this,val,state,path);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
to_cursor.cljs$core$IFn$_invoke$arity$1 = to_cursor__1;
to_cursor.cljs$core$IFn$_invoke$arity$2 = to_cursor__2;
to_cursor.cljs$core$IFn$_invoke$arity$3 = to_cursor__3;
return to_cursor;
})()
;
om.core.notify_STAR_ = (function notify_STAR_(cursor,tx_data){var state = om.core._state(cursor);return om.core._notify_BANG_(state,tx_data,om.core.to_cursor.cljs$core$IFn$_invoke$arity$2((function (){var G__27769 = state;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__27769) : cljs.core.deref.call(null,G__27769));
})(),state));
});
om.core.refresh_queued = false;
om.core.refresh_set = (function (){var G__27770 = cljs.core.PersistentHashSet.EMPTY;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__27770) : cljs.core.atom.call(null,G__27770));
})();
om.core.render_all = (function render_all(){om.core.refresh_queued = false;
var seq__27776 = cljs.core.seq((function (){var G__27780 = om.core.refresh_set;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__27780) : cljs.core.deref.call(null,G__27780));
})());var chunk__27777 = null;var count__27778 = (0);var i__27779 = (0);while(true){
if((i__27779 < count__27778))
{var f = chunk__27777.cljs$core$IIndexed$_nth$arity$2(null,i__27779);(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
{
var G__27781 = seq__27776;
var G__27782 = chunk__27777;
var G__27783 = count__27778;
var G__27784 = (i__27779 + (1));
seq__27776 = G__27781;
chunk__27777 = G__27782;
count__27778 = G__27783;
i__27779 = G__27784;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq(seq__27776);if(temp__4126__auto__)
{var seq__27776__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(seq__27776__$1))
{var c__4438__auto__ = cljs.core.chunk_first(seq__27776__$1);{
var G__27785 = cljs.core.chunk_rest(seq__27776__$1);
var G__27786 = c__4438__auto__;
var G__27787 = cljs.core.count(c__4438__auto__);
var G__27788 = (0);
seq__27776 = G__27785;
chunk__27777 = G__27786;
count__27778 = G__27787;
i__27779 = G__27788;
continue;
}
} else
{var f = cljs.core.first(seq__27776__$1);(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
{
var G__27789 = cljs.core.next(seq__27776__$1);
var G__27790 = null;
var G__27791 = (0);
var G__27792 = (0);
seq__27776 = G__27789;
chunk__27777 = G__27790;
count__27778 = G__27791;
i__27779 = G__27792;
continue;
}
}
} else
{return null;
}
}
break;
}
});
om.core.roots = (function (){var G__27793 = cljs.core.PersistentArrayMap.EMPTY;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__27793) : cljs.core.atom.call(null,G__27793));
})();
om.core.valid_component_QMARK_ = (function valid_component_QMARK_(x,f){if((function (){var or__3669__auto__ = (function (){var G__27798 = x;if(G__27798)
{var bit__4332__auto__ = null;if(cljs.core.truth_((function (){var or__3669__auto__ = bit__4332__auto__;if(cljs.core.truth_(or__3669__auto__))
{return or__3669__auto__;
} else
{return G__27798.om$core$IRender$;
}
})()))
{return true;
} else
{if((!G__27798.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(om.core.IRender,G__27798);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(om.core.IRender,G__27798);
}
})();if(or__3669__auto__)
{return or__3669__auto__;
} else
{var G__27799 = x;if(G__27799)
{var bit__4332__auto__ = null;if(cljs.core.truth_((function (){var or__3669__auto____$1 = bit__4332__auto__;if(cljs.core.truth_(or__3669__auto____$1))
{return or__3669__auto____$1;
} else
{return G__27799.om$core$IRenderState$;
}
})()))
{return true;
} else
{if((!G__27799.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(om.core.IRenderState,G__27799);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(om.core.IRenderState,G__27799);
}
}
})())
{return null;
} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(("Invalid Om component fn, "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(f.name)+" does not return valid instance"))+"\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),cljs.core.list(new cljs.core.Symbol(null,"satisfies?","satisfies?",-433227199,null),new cljs.core.Symbol(null,"IRender","IRender",590822196,null),new cljs.core.Symbol(null,"x","x",-555367584,null)),cljs.core.list(new cljs.core.Symbol(null,"satisfies?","satisfies?",-433227199,null),new cljs.core.Symbol(null,"IRenderState","IRenderState",-897673898,null),new cljs.core.Symbol(null,"x","x",-555367584,null)))], 0))))));
}
});
om.core.valid_QMARK_ = (function valid_QMARK_(m){return cljs.core.every_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 10, [cljs.core.constant$keyword$99,null,cljs.core.constant$keyword$100,null,cljs.core.constant$keyword$101,null,cljs.core.constant$keyword$102,null,cljs.core.constant$keyword$103,null,cljs.core.constant$keyword$104,null,cljs.core.constant$keyword$105,null,cljs.core.constant$keyword$106,null,cljs.core.constant$keyword$107,null,cljs.core.constant$keyword$108,null], null), null),cljs.core.keys(m));
});
om.core.id = (function id(owner){return (owner.state["__om_id"]);
});
om.core.get_descriptor = (function() {
var get_descriptor = null;
var get_descriptor__1 = (function (f){return get_descriptor.cljs$core$IFn$_invoke$arity$2(f,null);
});
var get_descriptor__2 = (function (f,descriptor){if(((f["om$descriptor"]) == null))
{(f["om$descriptor"] = (function (){var G__27803 = (function (){var or__3669__auto__ = descriptor;if(cljs.core.truth_(or__3669__auto__))
{return or__3669__auto__;
} else
{return om.core.pure_descriptor;
}
})();return React.createClass(G__27803);
})());
} else
{}
return (f["om$descriptor"]);
});
get_descriptor = function(f,descriptor){
switch(arguments.length){
case 1:
return get_descriptor__1.call(this,f);
case 2:
return get_descriptor__2.call(this,f,descriptor);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
get_descriptor.cljs$core$IFn$_invoke$arity$1 = get_descriptor__1;
get_descriptor.cljs$core$IFn$_invoke$arity$2 = get_descriptor__2;
return get_descriptor;
})()
;
om.core.build_STAR_ = (function() {
var build_STAR_ = null;
var build_STAR___2 = (function (f,cursor){return build_STAR_.cljs$core$IFn$_invoke$arity$3(f,cursor,null);
});
var build_STAR___3 = (function (f,cursor,m){if(om.core.valid_QMARK_(m))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.str,"build options contains invalid keys, only :key, :react-key, ",":fn, :init-state, :state, and :opts allowed, given ",cljs.core.interpose(", ",cljs.core.keys(m))))+"\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"valid?","valid?",1428119148,null),new cljs.core.Symbol(null,"m","m",-1021758608,null))], 0))))));
}
if((m == null))
{var shared = om.core.get_shared.cljs$core$IFn$_invoke$arity$1(om.core._STAR_parent_STAR_);var ctor = om.core.get_descriptor.cljs$core$IFn$_invoke$arity$1(f);var G__27823 = {"children": ((function (shared,ctor){
return (function (this$){var _STAR_read_enabled_STAR_27824 = om.core._STAR_read_enabled_STAR_;try{om.core._STAR_read_enabled_STAR_ = true;
var ret = (function (){var G__27825 = cursor;var G__27826 = this$;return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__27825,G__27826) : f.call(null,G__27825,G__27826));
})();om.core.valid_component_QMARK_(ret,f);
return ret;
}finally {om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR_27824;
}});})(shared,ctor))
, "__om_instrument": om.core._STAR_instrument_STAR_, "__om_app_state": om.core._STAR_state_STAR_, "__om_shared": shared, "__om_cursor": cursor};return (ctor.cljs$core$IFn$_invoke$arity$1 ? ctor.cljs$core$IFn$_invoke$arity$1(G__27823) : ctor.call(null,G__27823));
} else
{var map__27827 = m;var map__27827__$1 = ((cljs.core.seq_QMARK_(map__27827))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27827):map__27827);var opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27827__$1,cljs.core.constant$keyword$106);var init_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27827__$1,cljs.core.constant$keyword$104);var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27827__$1,cljs.core.constant$keyword$105);var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27827__$1,cljs.core.constant$keyword$103);var dataf = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,cljs.core.constant$keyword$100);var cursor_SINGLEQUOTE_ = ((!((dataf == null)))?(function (){var temp__4124__auto__ = cljs.core.constant$keyword$107.cljs$core$IFn$_invoke$arity$1(m);if(cljs.core.truth_(temp__4124__auto__))
{var i = temp__4124__auto__;var G__27828 = cursor;var G__27829 = i;return (dataf.cljs$core$IFn$_invoke$arity$2 ? dataf.cljs$core$IFn$_invoke$arity$2(G__27828,G__27829) : dataf.call(null,G__27828,G__27829));
} else
{var G__27830 = cursor;return (dataf.cljs$core$IFn$_invoke$arity$1 ? dataf.cljs$core$IFn$_invoke$arity$1(G__27830) : dataf.call(null,G__27830));
}
})():cursor);var rkey = ((!((key == null)))?cljs.core.get.cljs$core$IFn$_invoke$arity$2(cursor_SINGLEQUOTE_,key):cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,cljs.core.constant$keyword$102));var shared = (function (){var or__3669__auto__ = cljs.core.constant$keyword$108.cljs$core$IFn$_invoke$arity$1(m);if(cljs.core.truth_(or__3669__auto__))
{return or__3669__auto__;
} else
{return om.core.get_shared.cljs$core$IFn$_invoke$arity$1(om.core._STAR_parent_STAR_);
}
})();var ctor = om.core.get_descriptor.cljs$core$IFn$_invoke$arity$2(f,cljs.core.constant$keyword$99.cljs$core$IFn$_invoke$arity$1(m));var G__27831 = {"__om_shared": shared, "__om_index": cljs.core.constant$keyword$107.cljs$core$IFn$_invoke$arity$1(m), "__om_cursor": cursor_SINGLEQUOTE_, "__om_app_state": om.core._STAR_state_STAR_, "key": rkey, "__om_init_state": init_state, "children": (((opts == null))?((function (map__27827,map__27827__$1,opts,init_state,state,key,dataf,cursor_SINGLEQUOTE_,rkey,shared,ctor){
return (function (this$){var _STAR_read_enabled_STAR_27832 = om.core._STAR_read_enabled_STAR_;try{om.core._STAR_read_enabled_STAR_ = true;
var ret = (function (){var G__27833 = cursor_SINGLEQUOTE_;var G__27834 = this$;return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__27833,G__27834) : f.call(null,G__27833,G__27834));
})();om.core.valid_component_QMARK_(ret,f);
return ret;
}finally {om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR_27832;
}});})(map__27827,map__27827__$1,opts,init_state,state,key,dataf,cursor_SINGLEQUOTE_,rkey,shared,ctor))
:((function (map__27827,map__27827__$1,opts,init_state,state,key,dataf,cursor_SINGLEQUOTE_,rkey,shared,ctor){
return (function (this$){var _STAR_read_enabled_STAR_27835 = om.core._STAR_read_enabled_STAR_;try{om.core._STAR_read_enabled_STAR_ = true;
var ret = (function (){var G__27836 = cursor_SINGLEQUOTE_;var G__27837 = this$;var G__27838 = opts;return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__27836,G__27837,G__27838) : f.call(null,G__27836,G__27837,G__27838));
})();om.core.valid_component_QMARK_(ret,f);
return ret;
}finally {om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR_27835;
}});})(map__27827,map__27827__$1,opts,init_state,state,key,dataf,cursor_SINGLEQUOTE_,rkey,shared,ctor))
), "__om_instrument": om.core._STAR_instrument_STAR_, "__om_state": state};return (ctor.cljs$core$IFn$_invoke$arity$1 ? ctor.cljs$core$IFn$_invoke$arity$1(G__27831) : ctor.call(null,G__27831));

}
});
build_STAR_ = function(f,cursor,m){
switch(arguments.length){
case 2:
return build_STAR___2.call(this,f,cursor);
case 3:
return build_STAR___3.call(this,f,cursor,m);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
build_STAR_.cljs$core$IFn$_invoke$arity$2 = build_STAR___2;
build_STAR_.cljs$core$IFn$_invoke$arity$3 = build_STAR___3;
return build_STAR_;
})()
;
/**
* Builds an Om component. Takes an IRender/IRenderState instance
* returning function f, a cursor, and an optional third argument
* which may be a map of build specifications.
* 
* f - is a function of 2 or 3 arguments. The first argument will be
* the cursor and the second argument will be the owning pure node.
* If a map of options m is passed in this will be the third
* argument. f must return at a minimum an IRender or IRenderState
* instance, this instance may implement other React life cycle
* protocols.
* 
* cursor - an ICursor instance
* 
* m - a map the following keys are allowed:
* 
* :key        - a keyword that should be used to look up the key used by
* React itself when rendering sequential things.
* :react-key  - an explicit react key
* :fn         - a function to apply to the data before invoking f.
* :init-state - a map of initial state to pass to the component.
* :state      - a map of state to pass to the component, will be merged in.
* :opts       - a map of values. Can be used to pass side information down
* the render tree.
* :descriptor - a JS object of React methods, will be used to
* construct a React class per Om component function
* encountered. defaults to pure-descriptor.
* 
* Example:
* 
* (build list-of-gadgets cursor
* {:init-state {:event-chan ...
* :narble ...}})
* 
*/
om.core.build = (function() {
var build = null;
var build__2 = (function (f,cursor){return build.cljs$core$IFn$_invoke$arity$3(f,cursor,null);
});
var build__3 = (function (f,cursor,m){if(!((om.core._STAR_instrument_STAR_ == null)))
{var ret = (function (){var _STAR_read_enabled_STAR_27846 = om.core._STAR_read_enabled_STAR_;try{om.core._STAR_read_enabled_STAR_ = true;
var G__27847 = f;var G__27848 = cursor;var G__27849 = m;return (om.core._STAR_instrument_STAR_.cljs$core$IFn$_invoke$arity$3 ? om.core._STAR_instrument_STAR_.cljs$core$IFn$_invoke$arity$3(G__27847,G__27848,G__27849) : om.core._STAR_instrument_STAR_.call(null,G__27847,G__27848,G__27849));
}finally {om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR_27846;
}})();if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ret,cljs.core.constant$keyword$109))
{return om.core.build_STAR_.cljs$core$IFn$_invoke$arity$3(f,cursor,m);
} else
{return ret;
}
} else
{return om.core.build_STAR_.cljs$core$IFn$_invoke$arity$3(f,cursor,m);
}
});
build = function(f,cursor,m){
switch(arguments.length){
case 2:
return build__2.call(this,f,cursor);
case 3:
return build__3.call(this,f,cursor,m);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
build.cljs$core$IFn$_invoke$arity$2 = build__2;
build.cljs$core$IFn$_invoke$arity$3 = build__3;
return build;
})()
;
/**
* Build a sequence of components. f is the component constructor
* function, xs a sequence of cursors, and m a map of options the
* same as provided to om.core/build.
*/
om.core.build_all = (function() {
var build_all = null;
var build_all__2 = (function (f,xs){return build_all.cljs$core$IFn$_invoke$arity$3(f,xs,null);
});
var build_all__3 = (function (f,xs,m){return cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (x,i){return om.core.build.cljs$core$IFn$_invoke$arity$3(f,x,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,cljs.core.constant$keyword$107,i));
}),xs,cljs.core.range.cljs$core$IFn$_invoke$arity$0());
});
build_all = function(f,xs,m){
switch(arguments.length){
case 2:
return build_all__2.call(this,f,xs);
case 3:
return build_all__3.call(this,f,xs,m);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
build_all.cljs$core$IFn$_invoke$arity$2 = build_all__2;
build_all.cljs$core$IFn$_invoke$arity$3 = build_all__3;
return build_all;
})()
;
om.core.setup = (function setup(state,key,tx_listen){if((function (){var G__27870 = state;if(G__27870)
{var bit__4332__auto__ = null;if(cljs.core.truth_((function (){var or__3669__auto__ = bit__4332__auto__;if(cljs.core.truth_(or__3669__auto__))
{return or__3669__auto__;
} else
{return G__27870.om$core$INotify$;
}
})()))
{return true;
} else
{if((!G__27870.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(om.core.INotify,G__27870);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(om.core.INotify,G__27870);
}
})())
{} else
{var listeners_27887 = (function (){var G__27871 = cljs.core.PersistentArrayMap.EMPTY;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__27871) : cljs.core.atom.call(null,G__27871));
})();var render_queue_27888 = (function (){var G__27872 = cljs.core.PersistentHashSet.EMPTY;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__27872) : cljs.core.atom.call(null,G__27872));
})();var x27873_27889 = state;x27873_27889.om$core$IRenderQueue$ = true;
x27873_27889.om$core$IRenderQueue$_get_queue$arity$1 = ((function (x27873_27889,listeners_27887,render_queue_27888){
return (function (this$){var this$__$1 = this;var G__27874 = render_queue_27888;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__27874) : cljs.core.deref.call(null,G__27874));
});})(x27873_27889,listeners_27887,render_queue_27888))
;
x27873_27889.om$core$IRenderQueue$_queue_render_BANG_$arity$2 = ((function (x27873_27889,listeners_27887,render_queue_27888){
return (function (this$,c){var this$__$1 = this;if(cljs.core.contains_QMARK_((function (){var G__27875 = render_queue_27888;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__27875) : cljs.core.deref.call(null,G__27875));
})(),c))
{return null;
} else
{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(render_queue_27888,cljs.core.conj,c);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(this$__$1,cljs.core.identity);
}
});})(x27873_27889,listeners_27887,render_queue_27888))
;
x27873_27889.om$core$IRenderQueue$_empty_queue_BANG_$arity$1 = ((function (x27873_27889,listeners_27887,render_queue_27888){
return (function (this$){var this$__$1 = this;return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(render_queue_27888,cljs.core.empty);
});})(x27873_27889,listeners_27887,render_queue_27888))
;
x27873_27889.om$core$INotify$ = true;
x27873_27889.om$core$INotify$_listen_BANG_$arity$3 = ((function (x27873_27889,listeners_27887,render_queue_27888){
return (function (this$,key__$1,tx_listen__$1){var this$__$1 = this;if((tx_listen__$1 == null))
{} else
{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(listeners_27887,cljs.core.assoc,key__$1,tx_listen__$1);
}
return this$__$1;
});})(x27873_27889,listeners_27887,render_queue_27888))
;
x27873_27889.om$core$INotify$_unlisten_BANG_$arity$2 = ((function (x27873_27889,listeners_27887,render_queue_27888){
return (function (this$,key__$1){var this$__$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(listeners_27887,cljs.core.dissoc,key__$1);
return this$__$1;
});})(x27873_27889,listeners_27887,render_queue_27888))
;
x27873_27889.om$core$INotify$_notify_BANG_$arity$3 = ((function (x27873_27889,listeners_27887,render_queue_27888){
return (function (this$,tx_data,root_cursor){var this$__$1 = this;var seq__27876_27890 = cljs.core.seq((function (){var G__27880 = listeners_27887;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__27880) : cljs.core.deref.call(null,G__27880));
})());var chunk__27877_27891 = null;var count__27878_27892 = (0);var i__27879_27893 = (0);while(true){
if((i__27879_27893 < count__27878_27892))
{var vec__27881_27894 = chunk__27877_27891.cljs$core$IIndexed$_nth$arity$2(null,i__27879_27893);var __27895 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27881_27894,(0),null);var f_27896 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27881_27894,(1),null);var G__27882_27897 = tx_data;var G__27883_27898 = root_cursor;(f_27896.cljs$core$IFn$_invoke$arity$2 ? f_27896.cljs$core$IFn$_invoke$arity$2(G__27882_27897,G__27883_27898) : f_27896.call(null,G__27882_27897,G__27883_27898));
{
var G__27899 = seq__27876_27890;
var G__27900 = chunk__27877_27891;
var G__27901 = count__27878_27892;
var G__27902 = (i__27879_27893 + (1));
seq__27876_27890 = G__27899;
chunk__27877_27891 = G__27900;
count__27878_27892 = G__27901;
i__27879_27893 = G__27902;
continue;
}
} else
{var temp__4126__auto___27903 = cljs.core.seq(seq__27876_27890);if(temp__4126__auto___27903)
{var seq__27876_27904__$1 = temp__4126__auto___27903;if(cljs.core.chunked_seq_QMARK_(seq__27876_27904__$1))
{var c__4438__auto___27905 = cljs.core.chunk_first(seq__27876_27904__$1);{
var G__27906 = cljs.core.chunk_rest(seq__27876_27904__$1);
var G__27907 = c__4438__auto___27905;
var G__27908 = cljs.core.count(c__4438__auto___27905);
var G__27909 = (0);
seq__27876_27890 = G__27906;
chunk__27877_27891 = G__27907;
count__27878_27892 = G__27908;
i__27879_27893 = G__27909;
continue;
}
} else
{var vec__27884_27910 = cljs.core.first(seq__27876_27904__$1);var __27911 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27884_27910,(0),null);var f_27912 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27884_27910,(1),null);var G__27885_27913 = tx_data;var G__27886_27914 = root_cursor;(f_27912.cljs$core$IFn$_invoke$arity$2 ? f_27912.cljs$core$IFn$_invoke$arity$2(G__27885_27913,G__27886_27914) : f_27912.call(null,G__27885_27913,G__27886_27914));
{
var G__27915 = cljs.core.next(seq__27876_27904__$1);
var G__27916 = null;
var G__27917 = (0);
var G__27918 = (0);
seq__27876_27890 = G__27915;
chunk__27877_27891 = G__27916;
count__27878_27892 = G__27917;
i__27879_27893 = G__27918;
continue;
}
}
} else
{}
}
break;
}
return this$__$1;
});})(x27873_27889,listeners_27887,render_queue_27888))
;
}
return om.core._listen_BANG_(state,key,tx_listen);
});
om.core.tear_down = (function tear_down(state,key){return om.core._unlisten_BANG_(state,key);
});
/**
* Take a component constructor function f, value an immutable tree of
* associative data structures optionally an wrapped in an IAtom
* instance, and a map of options and installs an Om/React render
* loop.
* 
* f must return an instance that at a minimum implements IRender or
* IRenderState (it may implement other React life cycle protocols). f
* must take at least two arguments, the root cursor and the owning pure
* node. A cursor is just the original data wrapped in an ICursor
* instance which maintains path information. Only one root render
* loop allowed per target element. om.core/root is idempotent, if
* called again on the same target element the previous render loop
* will be replaced.
* 
* Options may also include any key allowed by om.core/build to
* customize f. In addition om.core/root supports the following
* special options:
* 
* :target     - (required) a DOM element.
* :shared     - data to be shared by all components, see om.core/get-shared
* :tx-listen  - a function that will listen in in transactions, should
* take 2 arguments - the first a map containing the
* path, old and new state at path, old and new global
* state, and transaction tag if provided.
* :instrument - a function of three arguments that if provided will
* intercept all calls to om.core/build. This function should
* correspond to the three arity version of om.core/build.
* 
* Example:
* 
* (root
* (fn [data owner]
* ...)
* {:message :hello}
* {:target js/document.body})
*/
om.core.root = (function root(f,value,p__27919){var map__27943 = p__27919;var map__27943__$1 = ((cljs.core.seq_QMARK_(map__27943))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27943):map__27943);var options = map__27943__$1;var instrument = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27943__$1,cljs.core.constant$keyword$101);var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27943__$1,cljs.core.constant$keyword$83);var tx_listen = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27943__$1,cljs.core.constant$keyword$110);var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27943__$1,cljs.core.constant$keyword$111);if(!((target == null)))
{} else
{throw (new Error(("Assert failed: No target specified to om.core/root\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"target","target",1893533248,null)))], 0))))));
}
var roots_SINGLEQUOTE__27966 = (function (){var G__27944 = om.core.roots;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__27944) : cljs.core.deref.call(null,G__27944));
})();if(cljs.core.contains_QMARK_(roots_SINGLEQUOTE__27966,target))
{cljs.core.get.cljs$core$IFn$_invoke$arity$2(roots_SINGLEQUOTE__27966,target).call(null);
} else
{}
var watch_key = cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();var state = (((function (){var G__27945 = value;if(G__27945)
{var bit__4332__auto__ = (G__27945.cljs$lang$protocol_mask$partition1$ & (16384));if((bit__4332__auto__) || (G__27945.cljs$core$IAtom$))
{return true;
} else
{if((!G__27945.cljs$lang$protocol_mask$partition1$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.IAtom,G__27945);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.IAtom,G__27945);
}
})())?value:(function (){var G__27946 = value;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__27946) : cljs.core.atom.call(null,G__27946));
})());var state__$1 = om.core.setup(state,watch_key,tx_listen);var m = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(options,cljs.core.constant$keyword$111,cljs.core.array_seq([cljs.core.constant$keyword$110,cljs.core.constant$keyword$83], 0));var rootf = ((function (watch_key,state,state__$1,m,map__27943,map__27943__$1,options,instrument,path,tx_listen,target){
return (function rootf(){cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(om.core.refresh_set,cljs.core.disj,rootf);
var value__$1 = (function (){var G__27954 = state__$1;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__27954) : cljs.core.deref.call(null,G__27954));
})();var cursor = (((path == null))?om.core.to_cursor.cljs$core$IFn$_invoke$arity$3(value__$1,state__$1,cljs.core.PersistentVector.EMPTY):om.core.to_cursor.cljs$core$IFn$_invoke$arity$3(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(value__$1,path),state__$1,path));om.dom.render((function (){var _STAR_instrument_STAR_27955 = om.core._STAR_instrument_STAR_;var _STAR_state_STAR_27956 = om.core._STAR_state_STAR_;try{om.core._STAR_instrument_STAR_ = instrument;
om.core._STAR_state_STAR_ = state__$1;
return om.core.build.cljs$core$IFn$_invoke$arity$3(f,cursor,m);
}finally {om.core._STAR_state_STAR_ = _STAR_state_STAR_27956;
om.core._STAR_instrument_STAR_ = _STAR_instrument_STAR_27955;
}})(),target);
var queue = om.core._get_queue(state__$1);if(cljs.core.empty_QMARK_(queue))
{return null;
} else
{var seq__27957_27967 = cljs.core.seq(queue);var chunk__27958_27968 = null;var count__27959_27969 = (0);var i__27960_27970 = (0);while(true){
if((i__27960_27970 < count__27959_27969))
{var c_27971 = chunk__27958_27968.cljs$core$IIndexed$_nth$arity$2(null,i__27960_27970);if(cljs.core.truth_(c_27971.isMounted()))
{c_27971.forceUpdate();
} else
{}
{
var G__27972 = seq__27957_27967;
var G__27973 = chunk__27958_27968;
var G__27974 = count__27959_27969;
var G__27975 = (i__27960_27970 + (1));
seq__27957_27967 = G__27972;
chunk__27958_27968 = G__27973;
count__27959_27969 = G__27974;
i__27960_27970 = G__27975;
continue;
}
} else
{var temp__4126__auto___27976 = cljs.core.seq(seq__27957_27967);if(temp__4126__auto___27976)
{var seq__27957_27977__$1 = temp__4126__auto___27976;if(cljs.core.chunked_seq_QMARK_(seq__27957_27977__$1))
{var c__4438__auto___27978 = cljs.core.chunk_first(seq__27957_27977__$1);{
var G__27979 = cljs.core.chunk_rest(seq__27957_27977__$1);
var G__27980 = c__4438__auto___27978;
var G__27981 = cljs.core.count(c__4438__auto___27978);
var G__27982 = (0);
seq__27957_27967 = G__27979;
chunk__27958_27968 = G__27980;
count__27959_27969 = G__27981;
i__27960_27970 = G__27982;
continue;
}
} else
{var c_27983 = cljs.core.first(seq__27957_27977__$1);if(cljs.core.truth_(c_27983.isMounted()))
{c_27983.forceUpdate();
} else
{}
{
var G__27984 = cljs.core.next(seq__27957_27977__$1);
var G__27985 = null;
var G__27986 = (0);
var G__27987 = (0);
seq__27957_27967 = G__27984;
chunk__27958_27968 = G__27985;
count__27959_27969 = G__27986;
i__27960_27970 = G__27987;
continue;
}
}
} else
{}
}
break;
}
return om.core._empty_queue_BANG_(state__$1);
}
});})(watch_key,state,state__$1,m,map__27943,map__27943__$1,options,instrument,path,tx_listen,target))
;cljs.core.add_watch(state__$1,watch_key,((function (watch_key,state,state__$1,m,rootf,map__27943,map__27943__$1,options,instrument,path,tx_listen,target){
return (function (_,___$1,___$2,___$3){if(cljs.core.contains_QMARK_((function (){var G__27961 = om.core.refresh_set;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__27961) : cljs.core.deref.call(null,G__27961));
})(),rootf))
{} else
{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(om.core.refresh_set,cljs.core.conj,rootf);
}
if(cljs.core.truth_(om.core.refresh_queued))
{return null;
} else
{om.core.refresh_queued = true;
if(typeof requestAnimationFrame !== 'undefined')
{var G__27962 = om.core.render_all;return requestAnimationFrame(G__27962);
} else
{var G__27963 = om.core.render_all;var G__27964 = (16);return setTimeout(G__27963,G__27964);
}
}
});})(watch_key,state,state__$1,m,rootf,map__27943,map__27943__$1,options,instrument,path,tx_listen,target))
);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(om.core.roots,cljs.core.assoc,target,((function (watch_key,state,state__$1,m,rootf,map__27943,map__27943__$1,options,instrument,path,tx_listen,target){
return (function (){cljs.core.remove_watch(state__$1,watch_key);
om.core.tear_down(state__$1,watch_key);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(om.core.roots,cljs.core.dissoc,target);
var G__27965 = target;return React.unmountComponentAtNode(G__27965);
});})(watch_key,state,state__$1,m,rootf,map__27943,map__27943__$1,options,instrument,path,tx_listen,target))
);
return rootf();
});
/**
* Given a DOM target remove its render loop if one exists.
*/
om.core.detach_root = (function detach_root(target){var temp__4126__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2((function (){var G__27989 = om.core.roots;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__27989) : cljs.core.deref.call(null,G__27989));
})(),target);if(cljs.core.truth_(temp__4126__auto__))
{var f = temp__4126__auto__;return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
} else
{return null;
}
});
/**
* Given a tag, a cursor, an optional list of keys ks, mutate the tree
* at the path specified by the cursor + the optional keys by applying
* f to the specified value in the tree. An Om re-render will be
* triggered.
*/
om.core.transact_BANG_ = (function() {
var transact_BANG_ = null;
var transact_BANG___2 = (function (cursor,f){return transact_BANG_.cljs$core$IFn$_invoke$arity$4(cursor,cljs.core.PersistentVector.EMPTY,f,null);
});
var transact_BANG___3 = (function (cursor,korks,f){return transact_BANG_.cljs$core$IFn$_invoke$arity$4(cursor,korks,f,null);
});
var transact_BANG___4 = (function (cursor,korks,f,tag){var korks__$1 = (((korks == null))?cljs.core.PersistentVector.EMPTY:((cljs.core.sequential_QMARK_(korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null)
));return om.core._transact_BANG_(cursor,korks__$1,f,tag);
});
transact_BANG_ = function(cursor,korks,f,tag){
switch(arguments.length){
case 2:
return transact_BANG___2.call(this,cursor,korks);
case 3:
return transact_BANG___3.call(this,cursor,korks,f);
case 4:
return transact_BANG___4.call(this,cursor,korks,f,tag);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
transact_BANG_.cljs$core$IFn$_invoke$arity$2 = transact_BANG___2;
transact_BANG_.cljs$core$IFn$_invoke$arity$3 = transact_BANG___3;
transact_BANG_.cljs$core$IFn$_invoke$arity$4 = transact_BANG___4;
return transact_BANG_;
})()
;
/**
* Like transact! but no function provided, instead a replacement
* value is given.
*/
om.core.update_BANG_ = (function() {
var update_BANG_ = null;
var update_BANG___2 = (function (cursor,v){return om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$4(cursor,cljs.core.PersistentVector.EMPTY,(function (_){return v;
}),null);
});
var update_BANG___3 = (function (cursor,korks,v){return om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$4(cursor,korks,(function (_){return v;
}),null);
});
var update_BANG___4 = (function (cursor,korks,v,tag){return om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$4(cursor,korks,(function (_){return v;
}),tag);
});
update_BANG_ = function(cursor,korks,v,tag){
switch(arguments.length){
case 2:
return update_BANG___2.call(this,cursor,korks);
case 3:
return update_BANG___3.call(this,cursor,korks,v);
case 4:
return update_BANG___4.call(this,cursor,korks,v,tag);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
update_BANG_.cljs$core$IFn$_invoke$arity$2 = update_BANG___2;
update_BANG_.cljs$core$IFn$_invoke$arity$3 = update_BANG___3;
update_BANG_.cljs$core$IFn$_invoke$arity$4 = update_BANG___4;
return update_BANG_;
})()
;
/**
* A helper function to get at React refs. Given a owning pure node
* extract the ref specified by name.
*/
om.core.get_node = (function() {
var get_node = null;
var get_node__1 = (function (owner){return owner.getDOMNode();
});
var get_node__2 = (function (owner,name){var temp__4126__auto__ = owner.refs;if(cljs.core.truth_(temp__4126__auto__))
{var refs = temp__4126__auto__;return (refs[name]).getDOMNode();
} else
{return null;
}
});
get_node = function(owner,name){
switch(arguments.length){
case 1:
return get_node__1.call(this,owner);
case 2:
return get_node__2.call(this,owner,name);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
get_node.cljs$core$IFn$_invoke$arity$1 = get_node__1;
get_node.cljs$core$IFn$_invoke$arity$2 = get_node__2;
return get_node;
})()
;
/**
* Takes a pure owning component, a sequential list of keys and value and
* sets the state of the component. Conceptually analagous to React
* setState. Will schedule an Om re-render.
*/
om.core.set_state_BANG_ = (function() {
var set_state_BANG_ = null;
var set_state_BANG___2 = (function (owner,v){return om.core._set_state_BANG_.cljs$core$IFn$_invoke$arity$3(owner,v,true);
});
var set_state_BANG___3 = (function (owner,korks,v){var ks = ((cljs.core.sequential_QMARK_(korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null));return om.core._set_state_BANG_.cljs$core$IFn$_invoke$arity$4(owner,ks,v,true);
});
set_state_BANG_ = function(owner,korks,v){
switch(arguments.length){
case 2:
return set_state_BANG___2.call(this,owner,korks);
case 3:
return set_state_BANG___3.call(this,owner,korks,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
set_state_BANG_.cljs$core$IFn$_invoke$arity$2 = set_state_BANG___2;
set_state_BANG_.cljs$core$IFn$_invoke$arity$3 = set_state_BANG___3;
return set_state_BANG_;
})()
;
/**
* EXPERIMENTAL: Same as set-state! but does not trigger re-render.
*/
om.core.set_state_nr_BANG_ = (function() {
var set_state_nr_BANG_ = null;
var set_state_nr_BANG___2 = (function (owner,v){return om.core._set_state_BANG_.cljs$core$IFn$_invoke$arity$3(owner,v,false);
});
var set_state_nr_BANG___3 = (function (owner,korks,v){var ks = ((cljs.core.sequential_QMARK_(korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null));return om.core._set_state_BANG_.cljs$core$IFn$_invoke$arity$4(owner,ks,v,false);
});
set_state_nr_BANG_ = function(owner,korks,v){
switch(arguments.length){
case 2:
return set_state_nr_BANG___2.call(this,owner,korks);
case 3:
return set_state_nr_BANG___3.call(this,owner,korks,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
set_state_nr_BANG_.cljs$core$IFn$_invoke$arity$2 = set_state_nr_BANG___2;
set_state_nr_BANG_.cljs$core$IFn$_invoke$arity$3 = set_state_nr_BANG___3;
return set_state_nr_BANG_;
})()
;
/**
* Takes a pure owning component, a sequential list of keys and a
* function to transition the state of the component. Conceptually
* analagous to React setState. Will schedule an Om re-render.
*/
om.core.update_state_BANG_ = (function() {
var update_state_BANG_ = null;
var update_state_BANG___2 = (function (owner,f){return om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$2(owner,(function (){var G__28000 = om.core.get_state.cljs$core$IFn$_invoke$arity$1(owner);return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__28000) : f.call(null,G__28000));
})());
});
var update_state_BANG___3 = (function (owner,korks,f){return om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(owner,korks,(function (){var G__28001 = om.core.get_state.cljs$core$IFn$_invoke$arity$2(owner,korks);return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__28001) : f.call(null,G__28001));
})());
});
update_state_BANG_ = function(owner,korks,f){
switch(arguments.length){
case 2:
return update_state_BANG___2.call(this,owner,korks);
case 3:
return update_state_BANG___3.call(this,owner,korks,f);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
update_state_BANG_.cljs$core$IFn$_invoke$arity$2 = update_state_BANG___2;
update_state_BANG_.cljs$core$IFn$_invoke$arity$3 = update_state_BANG___3;
return update_state_BANG_;
})()
;
/**
* EXPERIMENTAL: Same as update-state! but does not trigger re-render.
*/
om.core.update_state_nr_BANG_ = (function() {
var update_state_nr_BANG_ = null;
var update_state_nr_BANG___2 = (function (owner,f){return om.core.set_state_nr_BANG_.cljs$core$IFn$_invoke$arity$2(owner,(function (){var G__28004 = om.core.get_state.cljs$core$IFn$_invoke$arity$1(owner);return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__28004) : f.call(null,G__28004));
})());
});
var update_state_nr_BANG___3 = (function (owner,korks,f){return om.core.set_state_nr_BANG_.cljs$core$IFn$_invoke$arity$3(owner,korks,(function (){var G__28005 = om.core.get_state.cljs$core$IFn$_invoke$arity$2(owner,korks);return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__28005) : f.call(null,G__28005));
})());
});
update_state_nr_BANG_ = function(owner,korks,f){
switch(arguments.length){
case 2:
return update_state_nr_BANG___2.call(this,owner,korks);
case 3:
return update_state_nr_BANG___3.call(this,owner,korks,f);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
update_state_nr_BANG_.cljs$core$IFn$_invoke$arity$2 = update_state_nr_BANG___2;
update_state_nr_BANG_.cljs$core$IFn$_invoke$arity$3 = update_state_nr_BANG___3;
return update_state_nr_BANG_;
})()
;
/**
* Utility to re-render an owner.
*/
om.core.refresh_BANG_ = (function refresh_BANG_(owner){return om.core.update_state_BANG_.cljs$core$IFn$_invoke$arity$2(owner,cljs.core.identity);
});
/**
* Takes a pure owning component and an optional key or sequential
* list of keys and returns a property in the component local state if
* it exists. Always returns the rendered state, not the pending
* state.
*/
om.core.get_render_state = (function() {
var get_render_state = null;
var get_render_state__1 = (function (owner){return om.core._get_render_state.cljs$core$IFn$_invoke$arity$1(owner);
});
var get_render_state__2 = (function (owner,korks){var ks = ((cljs.core.sequential_QMARK_(korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null));return om.core._get_render_state.cljs$core$IFn$_invoke$arity$2(owner,ks);
});
get_render_state = function(owner,korks){
switch(arguments.length){
case 1:
return get_render_state__1.call(this,owner);
case 2:
return get_render_state__2.call(this,owner,korks);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
get_render_state.cljs$core$IFn$_invoke$arity$1 = get_render_state__1;
get_render_state.cljs$core$IFn$_invoke$arity$2 = get_render_state__2;
return get_render_state;
})()
;
/**
* Returns true if in the React render phase.
*/
om.core.rendering_QMARK_ = (function rendering_QMARK_(){return om.core._STAR_read_enabled_STAR_ === true;
});
