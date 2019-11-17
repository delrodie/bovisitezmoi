// Garden Gnome Software - Skin
// Pano2VR 6.0.4/17320
// Filename: panodu5aout.ggsk
// Generated 2019-08-17T12:57:28

function pano2vrSkin(player,base) {
	player.addVariable('opt_3d_preview', 2, true);
	player.addVariable('opt_hotspot_preview', 2, true);
	player.addVariable('category_visible', 2, false);
	player.addVariable('node_visible', 2, false);
	player.addVariable('vis_thumbnail_menu', 2, true);
	player.addVariable('opt_thumbnail_menu_tooltip', 2, true);
	player.addVariable('vis_website', 2, false);
	player.addVariable('opt_url', 2, false);
	var me=this;
	var skin=this;
	var flag=false;
	var hotspotTemplates={};
	var skinKeyPressed = 0;
	this.player=player;
	this.player.skinObj=this;
	this.divSkin=player.divSkin;
	this.ggUserdata=player.userdata;
	this.lastSize={ w: -1,h: -1 };
	var basePath="";
	// auto detect base path
	if (base=='?') {
		var scripts = document.getElementsByTagName('script');
		for(var i=0;i<scripts.length;i++) {
			var src=scripts[i].src;
			if (src.indexOf('skin.js')>=0) {
				var p=src.lastIndexOf('/');
				if (p>=0) {
					basePath=src.substr(0,p+1);
				}
			}
		}
	} else
	if (base) {
		basePath=base;
	}
	this.elementMouseDown=[];
	this.elementMouseOver=[];
	var cssPrefix='';
	var domTransition='transition';
	var domTransform='transform';
	var prefixes='Webkit,Moz,O,ms,Ms'.split(',');
	var i;
	var hs,el,els,elo,ela,elHorScrollFg,elHorScrollBg,elVertScrollFg,elVertScrollBg,elCornerBg;
	if (typeof document.body.style['transform'] == 'undefined') {
		for(var i=0;i<prefixes.length;i++) {
			if (typeof document.body.style[prefixes[i] + 'Transform'] !== 'undefined') {
				cssPrefix='-' + prefixes[i].toLowerCase() + '-';
				domTransition=prefixes[i] + 'Transition';
				domTransform=prefixes[i] + 'Transform';
			}
		}
	}
	
	player.setMargins(0,0,0,0);
	
	this.updateSize=function(startElement) {
		var stack=[];
		stack.push(startElement);
		while(stack.length>0) {
			var e=stack.pop();
			if (e.ggUpdatePosition) {
				e.ggUpdatePosition();
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	
	this.callNodeChange=function(startElement) {
		var stack=[];
		stack.push(startElement);
		while(stack.length>0) {
			var e=stack.pop();
			if (e.ggNodeChange) {
				e.ggNodeChange();
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	player.addListener('configloaded', function() { me.callNodeChange(me.divSkin); });
	player.addListener('changenode', function() { me.ggUserdata=player.userdata; me.callNodeChange(me.divSkin); });
	
	var parameterToTransform=function(p) {
		var hs='translate(' + p.rx + 'px,' + p.ry + 'px) rotate(' + p.a + 'deg) scale(' + p.sx + ',' + p.sy + ')';
		return hs;
	}
	
	this.findElements=function(id,regex) {
		var r=[];
		var stack=[];
		var pat=new RegExp(id,'');
		stack.push(me.divSkin);
		while(stack.length>0) {
			var e=stack.pop();
			if (regex) {
				if (pat.test(e.ggId)) r.push(e);
			} else {
				if (e.ggId==id) r.push(e);
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
		return r;
	}
	
	this.addSkin=function() {
		var hs='';
		this.ggCurrentTime=new Date().getTime();
		el=me._button_direction=document.createElement('div');
		el.ggId="button_direction";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : 8px;';
		hs+='height : 62px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 82px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._button_direction.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._button_direction.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		el=me._button_image_right=document.createElement('div');
		els=me._button_image_right__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxOS4xLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBiYXNlUHJvZmlsZT0idGlueSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiDQoJIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSItMjQwIDMzMiAxMzAgMTMwIiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxnIG'+
			'lkPSJMYXllcl8xXzFfIj4NCgk8cGF0aCBmaWxsPSIjMDAwMDAwIiBkPSJNLTE3NSwzNDAuOWMtMzEsMC01Ni4xLDI1LjEtNTYuMSw1Ni4xYzAsMzEsMjUuMSw1Ni4xLDU2LjEsNTYuMXM1Ni4xLTI1LjEsNTYuMS01Ni4xDQoJCUMtMTE4LjksMzY2LTE0NCwzNDAuOS0xNzUsMzQwLjl6IE0tMTQ5LDM5OC4xbC0zMC4xLDMwLjFjLTAuNiwwLjYtMS42LDAuNi0yLjIsMGwtMTEuMy0xMS4zYy0wLjYtMC42LTAuNi0xLjYsMC0yLjJsMTcuNy0xNy43DQoJCWwtMTcuNy0xNy43Yy0wLjYtMC42LTAuNi0xLjYsMC0yLjJsMTEuMy0xMS4zYzAuNi0wLjYsMS42LTAuNiwyLjIsMGwzMC4xLDMwYzAuMywwLjMs'+
			'MC40LDAuNywwLjQsMS4xDQoJCUMtMTQ4LjUsMzk3LjQtMTQ4LjYsMzk3LjgtMTQ5LDM5OC4xeiIvPg0KPC9nPg0KPGcgaWQ9IkxheWVyXzIiPg0KCTxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik0tMTkyLjUsMzc5LjNsMTcuNywxNy43bC0xNy43LDE3LjdjLTAuNiwwLjYtMC42LDEuNiwwLDIuMmwxMS4zLDExLjNjMC42LDAuNiwxLjYsMC42LDIuMiwwbDMwLjEtMzAuMQ0KCQljMC4zLTAuMywwLjUtMC43LDAuNC0xLjFjMC0wLjQtMC4xLTAuOC0wLjQtMS4xbC0zMC4xLTMwYy0wLjYtMC42LTEuNi0wLjYtMi4yLDBsLTExLjMsMTEuM0MtMTkzLjEsMzc3LjctMTkzLjEsMzc4LjctMTkyLjUsMzc5Lj'+
			'MNCgkJeiIvPg0KPC9nPg0KPC9zdmc+DQo=';
		me._button_image_right__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;button_image_right;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._button_image_right__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxOS4xLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBiYXNlUHJvZmlsZT0idGlueSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiDQoJIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSItMjQwIDMzMiAxMzAgMTMwIiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxnIG'+
			'lkPSJMYXllcl8xXzFfIj4NCgk8cGF0aCBmaWxsPSIjMDAwMDAwIiBkPSJNLTE3NSwzMzQuNmMtMzQuNCwwLTYyLjQsMjcuOS02Mi40LDYyLjRjMCwzNC40LDI3LjksNjIuNCw2Mi40LDYyLjRzNjIuNC0yNy45LDYyLjQtNjIuNA0KCQlDLTExMi42LDM2Mi42LTE0MC42LDMzNC42LTE3NSwzMzQuNnogTS0xNDYuMSwzOTguMmwtMzMuNSwzMy40Yy0wLjcsMC43LTEuNywwLjctMi40LDBsLTEyLjUtMTIuNWMtMC43LTAuNy0wLjctMS43LDAtMi40DQoJCWwxOS43LTE5LjdsLTE5LjctMTkuN2MtMC43LTAuNy0wLjctMS43LDAtMi40bDEyLjUtMTIuNWMwLjctMC43LDEuNy0wLjcsMi40LDBsMzMuNSwz'+
			'My40YzAuMywwLjMsMC41LDAuOCwwLjUsMS4yDQoJCUMtMTQ1LjYsMzk3LjQtMTQ1LjcsMzk3LjktMTQ2LjEsMzk4LjJ6Ii8+DQo8L2c+DQo8ZyBpZD0iTGF5ZXJfMiI+DQoJPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTS0xOTQuNCwzNzcuM2wxOS43LDE5LjdsLTE5LjcsMTkuN2MtMC43LDAuNy0wLjcsMS43LDAsMi40bDEyLjUsMTIuNWMwLjcsMC43LDEuNywwLjcsMi40LDBsMzMuNS0zMy40DQoJCWMwLjMtMC4zLDAuNS0wLjgsMC41LTEuM2MwLTAuNC0wLjItMC45LTAuNS0xLjJsLTMzLjUtMzMuNGMtMC43LTAuNy0xLjctMC43LTIuNCwwbC0xMi41LDEyLjUNCgkJQy0xOTUuMSwzNzUuNi0xOT'+
			'UuMSwzNzYuNi0xOTQuNCwzNzcuM3oiLz4NCjwvZz4NCjwvc3ZnPg0K';
		me._button_image_right__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;button_image_right;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="button_image_right";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 51px;';
		hs+='position : absolute;';
		hs+='top : 15px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._button_image_right.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._button_image_right.onmouseover=function (e) {
			me._button_image_right__img.style.visibility='hidden';
			me._button_image_right__imgo.style.visibility='inherit';
		}
		me._button_image_right.onmouseout=function (e) {
			me._button_image_right__img.style.visibility='inherit';
			me._button_image_right__imgo.style.visibility='hidden';
			me.elementMouseDown['button_image_right']=false;
		}
		me._button_image_right.onmousedown=function (e) {
			me.elementMouseDown['button_image_right']=true;
		}
		me._button_image_right.onmouseup=function (e) {
			me.elementMouseDown['button_image_right']=false;
		}
		me._button_image_right.ontouchend=function (e) {
			me.elementMouseDown['button_image_right']=false;
		}
		me._button_image_right.ggUpdatePosition=function (useTransition) {
		}
		me._button_direction.appendChild(me._button_image_right);
		el=me._button_image_left=document.createElement('div');
		els=me._button_image_left__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxOS4xLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBiYXNlUHJvZmlsZT0idGlueSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiDQoJIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSItMjQwIDMzMiAxMzAgMTMwIiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxnIG'+
			'lkPSJMYXllcl8xXzFfIj4NCgk8cGF0aCBmaWxsPSIjMDAwMDAwIiBkPSJNLTE3NSwzNDAuOGMtMzEsMC01Ni4yLDI1LjEtNTYuMiw1Ni4yczI1LjEsNTYuMiw1Ni4yLDU2LjJzNTYuMi0yNS4xLDU2LjItNTYuMg0KCQlDLTExOC44LDM2Ni0xNDQsMzQwLjgtMTc1LDM0MC44eiBNLTE1Ny41LDQxNi45bC0xMS4zLDExLjNjLTAuNiwwLjYtMS41LDAuNi0yLjIsMGwtMzAuMi0zMC4xYy0wLjMtMC4zLTAuNC0wLjctMC40LTEuMQ0KCQljMC0wLjUsMC4xLTAuOCwwLjQtMS4ybDMwLjItMzAuMWMwLjYtMC42LDEuNS0wLjYsMi4yLDBsMTEuMywxMS4zYzAuNiwwLjYsMC42LDEuNSwwLDIuMmwtMTcuNywx'+
			'Ny43bDE3LjcsMTcuNw0KCQlDLTE1Ni45LDQxNS40LTE1Ni45LDQxNi4zLTE1Ny41LDQxNi45eiIvPg0KPC9nPg0KPGcgaWQ9IkxheWVyXzIiPg0KCTxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik0tMTU3LjUsNDE0LjdsLTE3LjctMTcuN2wxNy43LTE3LjdjMC42LTAuNiwwLjYtMS41LDAtMi4ybC0xMS4zLTExLjNjLTAuNi0wLjYtMS41LTAuNi0yLjIsMGwtMzAuMiwzMC4xDQoJCWMtMC4zLDAuMy0wLjQsMC43LTAuNCwxLjJjMCwwLjQsMC4yLDAuOCwwLjQsMS4xbDMwLjIsMzAuMWMwLjYsMC42LDEuNSwwLjYsMi4yLDBsMTEuMy0xMS4zQy0xNTYuOSw0MTYuMy0xNTYuOSw0MTUuNC0xNTcuNSw0MT'+
			'QuNw0KCQl6Ii8+DQo8L2c+DQo8L3N2Zz4NCg==';
		me._button_image_left__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;button_image_left;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._button_image_left__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxOS4xLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBiYXNlUHJvZmlsZT0idGlueSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiDQoJIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSItMjQwIDMzMiAxMzAgMTMwIiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxnIG'+
			'lkPSJMYXllcl8xXzFfIj4NCgk8cGF0aCBmaWxsPSIjMDAwMDAwIiBkPSJNLTE3NSwzMzQuNmMtMzQuNCwwLTYyLjQsMjcuOS02Mi40LDYyLjRzMjcuOSw2Mi40LDYyLjQsNjIuNHM2Mi40LTI3LjksNjIuNC02Mi40DQoJCUMtMTEyLjYsMzYyLjYtMTQwLjYsMzM0LjYtMTc1LDMzNC42eiBNLTE1NS42LDQxOS4xbC0xMi41LDEyLjVjLTAuNywwLjctMS43LDAuNy0yLjQsMGwtMzMuNS0zMy40Yy0wLjMtMC4zLTAuNS0wLjgtMC41LTEuMg0KCQljMC0wLjUsMC4xLTAuOSwwLjUtMS4zbDMzLjUtMzMuNGMwLjctMC43LDEuNy0wLjcsMi40LDBsMTIuNSwxMi41YzAuNywwLjcsMC43LDEuNywwLDIuNGwt'+
			'MTkuNywxOS43bDE5LjcsMTkuNw0KCQlDLTE1NC45LDQxNy40LTE1NC45LDQxOC40LTE1NS42LDQxOS4xeiIvPg0KPC9nPg0KPGcgaWQ9IkxheWVyXzIiPg0KCTxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik0tMTU1LjYsNDE2LjdsLTE5LjctMTkuN2wxOS43LTE5LjdjMC43LTAuNywwLjctMS43LDAtMi40bC0xMi41LTEyLjVjLTAuNy0wLjctMS43LTAuNy0yLjQsMGwtMzMuNSwzMy40DQoJCWMtMC4zLDAuMy0wLjUsMC44LTAuNSwxLjNjMCwwLjQsMC4yLDAuOSwwLjUsMS4ybDMzLjUsMzMuNGMwLjcsMC43LDEuNywwLjcsMi40LDBsMTIuNS0xMi41Qy0xNTQuOSw0MTguNC0xNTQuOSw0MTcuNC0xNT'+
			'UuNiw0MTYuNw0KCQl6Ii8+DQo8L2c+DQo8L3N2Zz4NCg==';
		me._button_image_left__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;button_image_left;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="button_image_left";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : -1px;';
		hs+='position : absolute;';
		hs+='top : 15px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._button_image_left.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._button_image_left.onmouseover=function (e) {
			me._button_image_left__img.style.visibility='hidden';
			me._button_image_left__imgo.style.visibility='inherit';
		}
		me._button_image_left.onmouseout=function (e) {
			me._button_image_left__img.style.visibility='inherit';
			me._button_image_left__imgo.style.visibility='hidden';
			me.elementMouseDown['button_image_left']=false;
		}
		me._button_image_left.onmousedown=function (e) {
			me.elementMouseDown['button_image_left']=true;
		}
		me._button_image_left.onmouseup=function (e) {
			me.elementMouseDown['button_image_left']=false;
		}
		me._button_image_left.ontouchend=function (e) {
			me.elementMouseDown['button_image_left']=false;
		}
		me._button_image_left.ggUpdatePosition=function (useTransition) {
		}
		me._button_direction.appendChild(me._button_image_left);
		el=me._button_image_down=document.createElement('div');
		els=me._button_image_down__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxOS4xLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBiYXNlUHJvZmlsZT0idGlueSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiDQoJIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSItMjQwIDMzMiAxMzAgMTMwIiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxnIG'+
			'lkPSJMYXllcl8xXzFfIj4NCgk8cGF0aCBmaWxsPSIjMDAwMDAwIiBkPSJNLTE3NSwzNDAuOWMtMzEsMC01Ni4xLDI1LjEtNTYuMSw1Ni4xczI1LjEsNTYuMSw1Ni4xLDU2LjFjMzEsMCw1Ni4xLTI1LjEsNTYuMS01Ni4xUy0xNDQsMzQwLjktMTc1LDM0MC45DQoJCXogTS0xNDMuOCwzOTIuOWwtMzAsMzAuMWMtMC4zLDAuMy0wLjcsMC40LTEuMSwwLjRjLTAuNCwwLTAuOC0wLjEtMS4xLTAuNGwtMzAuMS0zMC4xYy0wLjYtMC42LTAuNi0xLjYsMC0yLjJsMTEuMy0xMS4zDQoJCWMwLjYtMC42LDEuNi0wLjYsMi4yLDBsMTcuNywxNy43bDE3LjctMTcuN2MwLjYtMC42LDEuNi0wLjYsMi4yLDBsMTEu'+
			'MywxMS4zQy0xNDMuMiwzOTEuNC0xNDMuMiwzOTIuMy0xNDMuOCwzOTIuOXoiLz4NCjwvZz4NCjxnIGlkPSJMYXllcl8yIj4NCgk8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNLTE1Ny4zLDM3OS41bC0xNy43LDE3LjdsLTE3LjctMTcuN2MtMC42LTAuNi0xLjYtMC42LTIuMiwwbC0xMS4zLDExLjNjLTAuNiwwLjYtMC42LDEuNiwwLDIuMmwzMC4xLDMwLjENCgkJYzAuMywwLjMsMC43LDAuNSwxLjEsMC40YzAuNCwwLDAuOC0wLjEsMS4xLTAuNGwzMC0zMC4xYzAuNi0wLjYsMC42LTEuNiwwLTIuMmwtMTEuMy0xMS4zQy0xNTUuNywzNzguOS0xNTYuNywzNzguOS0xNTcuMywzNzkuNXoiDQoJCS8+DQ'+
			'o8L2c+DQo8L3N2Zz4NCg==';
		me._button_image_down__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;button_image_down;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._button_image_down__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxOS4xLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBiYXNlUHJvZmlsZT0idGlueSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiDQoJIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSItMjQwIDMzMiAxMzAgMTMwIiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxnIG'+
			'lkPSJMYXllcl8xXzFfIj4NCgk8cGF0aCBmaWxsPSIjMDAwMDAwIiBkPSJNLTE3NSwzMzQuNmMtMzQuNCwwLTYyLjQsMjcuOS02Mi40LDYyLjRzMjcuOSw2Mi40LDYyLjQsNjIuNGMzNC40LDAsNjIuNC0yNy45LDYyLjQtNjIuNA0KCQlTLTE0MC42LDMzNC42LTE3NSwzMzQuNnogTS0xNDAuNCwzOTIuNWwtMzMuNCwzMy41Yy0wLjMsMC4zLTAuOCwwLjUtMS4yLDAuNWMtMC41LDAtMC45LTAuMS0xLjMtMC41bC0zMy40LTMzLjUNCgkJYy0wLjctMC43LTAuNy0xLjcsMC0yLjRsMTIuNS0xMi41YzAuNy0wLjcsMS43LTAuNywyLjQsMGwxOS43LDE5LjdsMTkuNy0xOS43YzAuNy0wLjcsMS43LTAuNywy'+
			'LjQsMGwxMi41LDEyLjUNCgkJQy0xMzkuNywzOTAuNy0xMzkuNywzOTEuOC0xNDAuNCwzOTIuNXoiLz4NCjwvZz4NCjxnIGlkPSJMYXllcl8yIj4NCgk8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNLTE1NS4zLDM3Ny42bC0xOS43LDE5LjdsLTE5LjctMTkuN2MtMC43LTAuNy0xLjctMC43LTIuNCwwbC0xMi41LDEyLjVjLTAuNywwLjctMC43LDEuNywwLDIuNGwzMy40LDMzLjUNCgkJYzAuMywwLjMsMC44LDAuNSwxLjMsMC41YzAuNCwwLDAuOS0wLjIsMS4yLTAuNWwzMy40LTMzLjVjMC43LTAuNywwLjctMS43LDAtMi40bC0xMi41LTEyLjVDLTE1My42LDM3Ni45LTE1NC42LDM3Ni45LTE1NS4zLD'+
			'M3Ny42DQoJCXoiLz4NCjwvZz4NCjwvc3ZnPg0K';
		me._button_image_down__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;button_image_down;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="button_image_down";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 25px;';
		hs+='position : absolute;';
		hs+='top : 31px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._button_image_down.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._button_image_down.onmouseover=function (e) {
			me._button_image_down__img.style.visibility='hidden';
			me._button_image_down__imgo.style.visibility='inherit';
		}
		me._button_image_down.onmouseout=function (e) {
			me._button_image_down__img.style.visibility='inherit';
			me._button_image_down__imgo.style.visibility='hidden';
			me.elementMouseDown['button_image_down']=false;
		}
		me._button_image_down.onmousedown=function (e) {
			me.elementMouseDown['button_image_down']=true;
		}
		me._button_image_down.onmouseup=function (e) {
			me.elementMouseDown['button_image_down']=false;
		}
		me._button_image_down.ontouchend=function (e) {
			me.elementMouseDown['button_image_down']=false;
		}
		me._button_image_down.ggUpdatePosition=function (useTransition) {
		}
		me._button_direction.appendChild(me._button_image_down);
		el=me._button_image_up=document.createElement('div');
		els=me._button_image_up__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxOS4xLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBiYXNlUHJvZmlsZT0idGlueSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiDQoJIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSItMjQwIDMzMiAxMzAgMTMwIiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxnIG'+
			'lkPSJMYXllcl8xXzFfIj4NCgk8cGF0aCBmaWxsPSIjMDAwMDAwIiBkPSJNLTE3NSwzNDAuOWMtMzEsMC01Ni4xLDI1LjEtNTYuMSw1Ni4xczI1LjEsNTYuMSw1Ni4xLDU2LjFjMzEsMCw1Ni4xLTI1LjEsNTYuMS01Ni4xUy0xNDQsMzQwLjktMTc1LDM0MC45DQoJCXogTS0xNDMuOCw0MDMuMmwtMTEuMywxMS4zYy0wLjYsMC42LTEuNiwwLjYtMi4yLDBsLTE3LjctMTcuN2wtMTcuNywxNy43Yy0wLjYsMC42LTEuNiwwLjYtMi4yLDBsLTExLjMtMTEuMw0KCQljLTAuNi0wLjYtMC42LTEuNiwwLTIuMmwzMC0zMC4xYzAuMy0wLjMsMC43LTAuNCwxLjEtMC40YzAuNCwwLDAuOCwwLjEsMS4xLDAuNGwz'+
			'MC4xLDMwLjFDLTE0My4yLDQwMS43LTE0My4yLDQwMi42LTE0My44LDQwMy4yeiINCgkJLz4NCjwvZz4NCjxnIGlkPSJMYXllcl8yIj4NCgk8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNLTE5Mi43LDQxNC41bDE3LjctMTcuN2wxNy43LDE3LjdjMC42LDAuNiwxLjYsMC42LDIuMiwwbDExLjMtMTEuM2MwLjYtMC42LDAuNi0xLjYsMC0yLjJsLTMwLjEtMzAuMQ0KCQljLTAuMy0wLjMtMC43LTAuNS0xLjEtMC40Yy0wLjQsMC0wLjgsMC4xLTEuMSwwLjRsLTMwLDMwLjFjLTAuNiwwLjYtMC42LDEuNiwwLDIuMmwxMS4zLDExLjMNCgkJQy0xOTQuMyw0MTUuMS0xOTMuMyw0MTUuMS0xOTIuNyw0MTQuNX'+
			'oiLz4NCjwvZz4NCjwvc3ZnPg0K';
		me._button_image_up__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;button_image_up;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._button_image_up__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxOS4xLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBiYXNlUHJvZmlsZT0idGlueSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiDQoJIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSItMjQwIDMzMiAxMzAgMTMwIiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxnIG'+
			'lkPSJMYXllcl8xXzFfIj4NCgk8cGF0aCBmaWxsPSIjMDAwMDAwIiBkPSJNLTE3NSwzMzQuNmMtMzQuNCwwLTYyLjQsMjcuOS02Mi40LDYyLjRzMjcuOSw2Mi40LDYyLjQsNjIuNGMzNC40LDAsNjIuNC0yNy45LDYyLjQtNjIuNA0KCQlTLTE0MC42LDMzNC42LTE3NSwzMzQuNnogTS0xNDAuNCw0MDMuOWwtMTIuNSwxMi41Yy0wLjcsMC43LTEuNywwLjctMi40LDBsLTE5LjctMTkuN2wtMTkuNywxOS43Yy0wLjcsMC43LTEuNywwLjctMi40LDANCgkJbC0xMi41LTEyLjVjLTAuNy0wLjctMC43LTEuNywwLTIuNGwzMy40LTMzLjVjMC4zLTAuMywwLjgtMC41LDEuMi0wLjVjMC41LDAsMC45LDAuMSwx'+
			'LjMsMC41bDMzLjQsMzMuNQ0KCQlDLTEzOS43LDQwMi4yLTEzOS43LDQwMy4zLTE0MC40LDQwMy45eiIvPg0KPC9nPg0KPGcgaWQ9IkxheWVyXzIiPg0KCTxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik0tMTk0LjcsNDE2LjRsMTkuNy0xOS43bDE5LjcsMTkuN2MwLjcsMC43LDEuNywwLjcsMi40LDBsMTIuNS0xMi41YzAuNy0wLjcsMC43LTEuNywwLTIuNGwtMzMuNC0zMy41DQoJCWMtMC4zLTAuMy0wLjgtMC41LTEuMy0wLjVjLTAuNCwwLTAuOSwwLjItMS4yLDAuNWwtMzMuNCwzMy41Yy0wLjcsMC43LTAuNywxLjcsMCwyLjRsMTIuNSwxMi41DQoJCUMtMTk2LjQsNDE3LjEtMTk1LjQsNDE3LjEtMT'+
			'k0LjcsNDE2LjR6Ii8+DQo8L2c+DQo8L3N2Zz4NCg==';
		me._button_image_up__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;button_image_up;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="button_image_up";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 25px;';
		hs+='position : absolute;';
		hs+='top : -1px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._button_image_up.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._button_image_up.onmouseover=function (e) {
			me._button_image_up__img.style.visibility='hidden';
			me._button_image_up__imgo.style.visibility='inherit';
		}
		me._button_image_up.onmouseout=function (e) {
			me._button_image_up__img.style.visibility='inherit';
			me._button_image_up__imgo.style.visibility='hidden';
			me.elementMouseDown['button_image_up']=false;
		}
		me._button_image_up.onmousedown=function (e) {
			me.elementMouseDown['button_image_up']=true;
		}
		me._button_image_up.onmouseup=function (e) {
			me.elementMouseDown['button_image_up']=false;
		}
		me._button_image_up.ontouchend=function (e) {
			me.elementMouseDown['button_image_up']=false;
		}
		me._button_image_up.ggUpdatePosition=function (useTransition) {
		}
		me._button_direction.appendChild(me._button_image_up);
		me.divSkin.appendChild(me._button_direction);
		el=me._button_zoom=document.createElement('div');
		el.ggId="button_zoom";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : 23px;';
		hs+='height : 32px;';
		hs+='position : absolute;';
		hs+='right : 214px;';
		hs+='visibility : inherit;';
		hs+='width : 64px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._button_zoom.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._button_zoom.ggUpdatePosition=function (useTransition) {
		}
		el=me._zoomout=document.createElement('div');
		els=me._zoomout__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHYXJkZW4gR25vbWUgU29mdHdhcmUgLSBTa2luIEJ1dHRvbnMgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xIEJhc2ljLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLWJhc2ljLmR0ZCI+CjxzdmcgdmVyc2lvbj0iMS4xIiBiYXNlUHJvZmlsZT0iYmFzaWMiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIgoJCQl4PSIwcHgiIH'+
			'k9IjBweCIgd2lkdGg9IjMycHgiIGhlaWdodD0iMzJweCIgdmlld0JveD0iMCAwIDMyIDMyIiB4bWw6c3BhY2U9InByZXNlcnZlIj4KCTxnIG9wYWNpdHk9IjAuNCIgc3Ryb2tlPSIjM0MzQzNDIiBzdHJva2Utd2lkdGg9IjEuNSI+CgkJPHBhdGggZD0iTTIxLjc1OCwxNC44MDRIMTAuMjQxYy0wLjY2LDAtMS4xOTYsMC41MzUtMS4xOTYsMS4xOTZjMCwwLjY2MSwwLjUzNiwxLjE5NiwxLjE5NiwxLjE5NmgxMS41MTcNCgkJCWMwLjY2MSwwLDEuMTk3LTAuNTM2LDEuMTk3LTEuMTk2QzIyLjk1NSwxNS4zMzksMjIuNDE5LDE0LjgwNCwyMS43NTgsMTQuODA0eiBNMTYsMy41QzkuMDk2LDMuNSwzLjUs'+
			'OS4wOTYsMy41LDE2DQoJCQljMCw2LjkwMyw1LjU5NiwxMi40OTksMTIuNSwxMi41YzYuOTAzLTAuMDAxLDEyLjQ5OS01LjU5NywxMi41LTEyLjVDMjguNDk5LDkuMDk2LDIyLjkwMywzLjUsMTYsMy41eiBNMjMuMTQ2LDIzLjE0Ng0KCQkJYy0xLjgzMiwxLjgzMS00LjM1MiwyLjk2LTcuMTQ2LDIuOTZzLTUuMzE0LTEuMTI5LTcuMTQ2LTIuOTZDNy4wMjIsMjEuMzE0LDUuODk0LDE4Ljc5NSw1Ljg5MywxNg0KCQkJYzAuMDAxLTIuNzk1LDEuMTI5LTUuMzE0LDIuOTYxLTcuMTQ3YzEuODMzLTEuODMxLDQuMzUyLTIuOTYsNy4xNDYtMi45NjFjMi43OTUsMC4wMDEsNS4zMTMsMS4xMyw3LjE0NiwyLj'+
			'k2MQ0KCQkJYzEuODMyLDEuODMzLDIuOTYsNC4zNTIsMi45NjEsNy4xNDdDMjYuMTA2LDE4Ljc5NSwyNC45NzksMjEuMzE0LDIzLjE0NiwyMy4xNDZ6Ii8+DQoJPC9nPgoJPGcgZmlsbD0iI0ZGRkZGRiIgc3Ryb2tlPSIjMDAwMDAwIiBzdHJva2Utd2lkdGg9IjAuMiI+CgkJPHBhdGggZD0iTTIxLjc1OCwxNC44MDRIMTAuMjQxYy0wLjY2LDAtMS4xOTYsMC41MzUtMS4xOTYsMS4xOTZjMCwwLjY2MSwwLjUzNiwxLjE5NiwxLjE5NiwxLjE5NmgxMS41MTcNCgkJCWMwLjY2MSwwLDEuMTk3LTAuNTM2LDEuMTk3LTEuMTk2QzIyLjk1NSwxNS4zMzksMjIuNDE5LDE0LjgwNCwyMS43NTgsMTQuODA0eiBN'+
			'MTYsMy41QzkuMDk2LDMuNSwzLjUsOS4wOTYsMy41LDE2DQoJCQljMCw2LjkwMyw1LjU5NiwxMi40OTksMTIuNSwxMi41YzYuOTAzLTAuMDAxLDEyLjQ5OS01LjU5NywxMi41LTEyLjVDMjguNDk5LDkuMDk2LDIyLjkwMywzLjUsMTYsMy41eiBNMjMuMTQ2LDIzLjE0Ng0KCQkJYy0xLjgzMiwxLjgzMS00LjM1MiwyLjk2LTcuMTQ2LDIuOTZzLTUuMzE0LTEuMTI5LTcuMTQ2LTIuOTZDNy4wMjIsMjEuMzE0LDUuODk0LDE4Ljc5NSw1Ljg5MywxNg0KCQkJYzAuMDAxLTIuNzk1LDEuMTI5LTUuMzE0LDIuOTYxLTcuMTQ3YzEuODMzLTEuODMxLDQuMzUyLTIuOTYsNy4xNDYtMi45NjFjMi43OTUsMC4wMD'+
			'EsNS4zMTMsMS4xMyw3LjE0NiwyLjk2MQ0KCQkJYzEuODMyLDEuODMzLDIuOTYsNC4zNTIsMi45NjEsNy4xNDdDMjYuMTA2LDE4Ljc5NSwyNC45NzksMjEuMzE0LDIzLjE0NiwyMy4xNDZ6Ii8+DQoJPC9nPgo8L3N2Zz4=';
		me._zoomout__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;zoomout;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._zoomout__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHYXJkZW4gR25vbWUgU29mdHdhcmUgLSBTa2luIEJ1dHRvbnMgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xIEJhc2ljLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLWJhc2ljLmR0ZCI+CjxzdmcgdmVyc2lvbj0iMS4xIiBiYXNlUHJvZmlsZT0iYmFzaWMiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIgoJCQl4PSIwcHgiIH'+
			'k9IjBweCIgd2lkdGg9IjMycHgiIGhlaWdodD0iMzJweCIgdmlld0JveD0iMCAwIDMyIDMyIiB4bWw6c3BhY2U9InByZXNlcnZlIj4KCTxnIG9wYWNpdHk9IjAuNCIgc3Ryb2tlPSIjM0MzQzNDIiBzdHJva2Utd2lkdGg9IjEuNSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTYsMTYpIHNjYWxlKDEuMSkgdHJhbnNsYXRlKC0xNiwtMTYpIj4KCQk8cGF0aCBkPSJNMjEuNzU4LDE0LjgwNEgxMC4yNDFjLTAuNjYsMC0xLjE5NiwwLjUzNS0xLjE5NiwxLjE5NmMwLDAuNjYxLDAuNTM2LDEuMTk2LDEuMTk2LDEuMTk2aDExLjUxNw0KCQkJYzAuNjYxLDAsMS4xOTctMC41MzYsMS4xOTctMS4xOTZDMjIuOTU1'+
			'LDE1LjMzOSwyMi40MTksMTQuODA0LDIxLjc1OCwxNC44MDR6IE0xNiwzLjVDOS4wOTYsMy41LDMuNSw5LjA5NiwzLjUsMTYNCgkJCWMwLDYuOTAzLDUuNTk2LDEyLjQ5OSwxMi41LDEyLjVjNi45MDMtMC4wMDEsMTIuNDk5LTUuNTk3LDEyLjUtMTIuNUMyOC40OTksOS4wOTYsMjIuOTAzLDMuNSwxNiwzLjV6IE0yMy4xNDYsMjMuMTQ2DQoJCQljLTEuODMyLDEuODMxLTQuMzUyLDIuOTYtNy4xNDYsMi45NnMtNS4zMTQtMS4xMjktNy4xNDYtMi45NkM3LjAyMiwyMS4zMTQsNS44OTQsMTguNzk1LDUuODkzLDE2DQoJCQljMC4wMDEtMi43OTUsMS4xMjktNS4zMTQsMi45NjEtNy4xNDdjMS44MzMtMS'+
			'44MzEsNC4zNTItMi45Niw3LjE0Ni0yLjk2MWMyLjc5NSwwLjAwMSw1LjMxMywxLjEzLDcuMTQ2LDIuOTYxDQoJCQljMS44MzIsMS44MzMsMi45Niw0LjM1MiwyLjk2MSw3LjE0N0MyNi4xMDYsMTguNzk1LDI0Ljk3OSwyMS4zMTQsMjMuMTQ2LDIzLjE0NnoiLz4NCgk8L2c+Cgk8ZyBmaWxsPSIjRkZGRkZGIiBzdHJva2U9IiMwMDAwMDAiIHN0cm9rZS13aWR0aD0iMC4yIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxNiwxNikgc2NhbGUoMS4xKSB0cmFuc2xhdGUoLTE2LC0xNikiPgoJCTxwYXRoIGQ9Ik0yMS43NTgsMTQuODA0SDEwLjI0MWMtMC42NiwwLTEuMTk2LDAuNTM1LTEuMTk2LDEuMTk2YzAs'+
			'MC42NjEsMC41MzYsMS4xOTYsMS4xOTYsMS4xOTZoMTEuNTE3DQoJCQljMC42NjEsMCwxLjE5Ny0wLjUzNiwxLjE5Ny0xLjE5NkMyMi45NTUsMTUuMzM5LDIyLjQxOSwxNC44MDQsMjEuNzU4LDE0LjgwNHogTTE2LDMuNUM5LjA5NiwzLjUsMy41LDkuMDk2LDMuNSwxNg0KCQkJYzAsNi45MDMsNS41OTYsMTIuNDk5LDEyLjUsMTIuNWM2LjkwMy0wLjAwMSwxMi40OTktNS41OTcsMTIuNS0xMi41QzI4LjQ5OSw5LjA5NiwyMi45MDMsMy41LDE2LDMuNXogTTIzLjE0NiwyMy4xNDYNCgkJCWMtMS44MzIsMS44MzEtNC4zNTIsMi45Ni03LjE0NiwyLjk2cy01LjMxNC0xLjEyOS03LjE0Ni0yLjk2QzcuMD'+
			'IyLDIxLjMxNCw1Ljg5NCwxOC43OTUsNS44OTMsMTYNCgkJCWMwLjAwMS0yLjc5NSwxLjEyOS01LjMxNCwyLjk2MS03LjE0N2MxLjgzMy0xLjgzMSw0LjM1Mi0yLjk2LDcuMTQ2LTIuOTYxYzIuNzk1LDAuMDAxLDUuMzEzLDEuMTMsNy4xNDYsMi45NjENCgkJCWMxLjgzMiwxLjgzMywyLjk2LDQuMzUyLDIuOTYxLDcuMTQ3QzI2LjEwNiwxOC43OTUsMjQuOTc5LDIxLjMxNCwyMy4xNDYsMjMuMTQ2eiIvPg0KCTwvZz4KPC9zdmc+';
		me._zoomout__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;zoomout;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="zoomout";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 32px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._zoomout.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._zoomout.onmouseover=function (e) {
			me._zoomout__img.style.visibility='hidden';
			me._zoomout__imgo.style.visibility='inherit';
			me.elementMouseOver['zoomout']=true;
			me._tt_zoomout.logicBlock_visible();
		}
		me._zoomout.onmouseout=function (e) {
			me._zoomout__img.style.visibility='inherit';
			me._zoomout__imgo.style.visibility='hidden';
			me.elementMouseDown['zoomout']=false;
			me.elementMouseOver['zoomout']=false;
			me._tt_zoomout.logicBlock_visible();
		}
		me._zoomout.onmousedown=function (e) {
			me.elementMouseDown['zoomout']=true;
		}
		me._zoomout.onmouseup=function (e) {
			me.elementMouseDown['zoomout']=false;
		}
		me._zoomout.ontouchend=function (e) {
			me.elementMouseDown['zoomout']=false;
			me.elementMouseOver['zoomout']=false;
			me._tt_zoomout.logicBlock_visible();
		}
		me._zoomout.ggUpdatePosition=function (useTransition) {
		}
		el=me._tt_zoomout=document.createElement('div');
		els=me._tt_zoomout__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tt_zoomout";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='z-index: 100;';
		hs+='height : 20px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : 32px;';
		hs+='visibility : hidden;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		hs+='text-shadow: 1px 1px 4px #000000;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="Zoom Out";
		el.appendChild(els);
		me._tt_zoomout.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._tt_zoomout.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				(player.getIsMobile() == true)
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._tt_zoomout.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._tt_zoomout.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._tt_zoomout.style[domTransition]='left 0s, top 0s';
				if (me._tt_zoomout.ggCurrentLogicStatePosition == 0) {
					this.ggDx = 0;
					me._tt_zoomout.style.top='-25px';
					me._tt_zoomout.ggUpdatePosition(true);
				}
				else {
					me._tt_zoomout.ggDx=0;
					me._tt_zoomout.style.top='32px';
					me._tt_zoomout.ggUpdatePosition(true);
				}
			}
		}
		me._tt_zoomout.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				(me.elementMouseOver['zoomout'] == true)
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._tt_zoomout.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._tt_zoomout.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._tt_zoomout.style[domTransition]='left 0s, top 0s';
				if (me._tt_zoomout.ggCurrentLogicStateVisible == 0) {
					me._tt_zoomout.style.visibility=(Number(me._tt_zoomout.style.opacity)>0||!me._tt_zoomout.style.opacity)?'inherit':'hidden';
					me._tt_zoomout.ggVisible=true;
				}
				else {
					me._tt_zoomout.style.visibility="hidden";
					me._tt_zoomout.ggVisible=false;
				}
			}
		}
		me._tt_zoomout.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((98-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me._zoomout.appendChild(me._tt_zoomout);
		me._button_zoom.appendChild(me._zoomout);
		el=me._zoomin=document.createElement('div');
		els=me._zoomin__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHYXJkZW4gR25vbWUgU29mdHdhcmUgLSBTa2luIEJ1dHRvbnMgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xIEJhc2ljLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLWJhc2ljLmR0ZCI+CjxzdmcgdmVyc2lvbj0iMS4xIiBiYXNlUHJvZmlsZT0iYmFzaWMiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIgoJCQl4PSIwcHgiIH'+
			'k9IjBweCIgd2lkdGg9IjMycHgiIGhlaWdodD0iMzJweCIgdmlld0JveD0iMCAwIDMyIDMyIiB4bWw6c3BhY2U9InByZXNlcnZlIj4KCTxnIG9wYWNpdHk9IjAuNCIgc3Ryb2tlPSIjM0MzQzNDIiBzdHJva2Utd2lkdGg9IjEuNSI+CgkJPHBhdGggZD0iTTIyLjA2MSwxNC44MDNoLTQuODY0VjkuOTM4YzAtMC42NjEtMC41MzYtMS4xOTctMS4xOTctMS4xOTdjLTAuNjYsMC0xLjE5NiwwLjUzNi0xLjE5NiwxLjE5N3Y0Ljg2NQ0KCQkJSDkuOTM4Yy0wLjY2MSwwLTEuMTk2LDAuNTM2LTEuMTk2LDEuMTk3YzAsMC42NiwwLjUzNiwxLjE5NiwxLjE5NiwxLjE5Nmg0Ljg2NnY0Ljg2NWMwLDAuNjYsMC41'+
			'MzYsMS4xOTYsMS4xOTYsMS4xOTYNCgkJCWMwLjY2MSwwLDEuMTk3LTAuNTM2LDEuMTk3LTEuMTk2di00Ljg2NWg0Ljg2NGMwLjY2MSwwLDEuMTk2LTAuNTM2LDEuMTk2LTEuMTk2QzIzLjI1NywxNS4zMzksMjIuNzIyLDE0LjgwMywyMi4wNjEsMTQuODAzeg0KCQkJIE0xNiwzLjVDOS4wOTYsMy41LDMuNSw5LjA5NiwzLjUsMTZjMCw2LjkwMyw1LjU5NiwxMi40OTksMTIuNSwxMi41YzYuOTAzLTAuMDAxLDEyLjQ5OS01LjU5NywxMi41LTEyLjUNCgkJCUMyOC40OTksOS4wOTYsMjIuOTAzLDMuNSwxNiwzLjV6IE0yMy4xNDYsMjMuMTQ2Yy0xLjgzMiwxLjgzMS00LjM1MiwyLjk2LTcuMTQ2LDIuOT'+
			'ZzLTUuMzE0LTEuMTI5LTcuMTQ2LTIuOTYNCgkJCUM3LjAyMiwyMS4zMTQsNS44OTQsMTguNzk1LDUuODkzLDE2YzAuMDAxLTIuNzk1LDEuMTI5LTUuMzE0LDIuOTYxLTcuMTQ3YzEuODMzLTEuODMxLDQuMzUyLTIuOTYsNy4xNDYtMi45NjENCgkJCWMyLjc5NSwwLjAwMSw1LjMxMywxLjEzLDcuMTQ2LDIuOTYxYzEuODMyLDEuODMzLDIuOTYsNC4zNTIsMi45NjEsNy4xNDdDMjYuMTA2LDE4Ljc5NSwyNC45NzksMjEuMzE0LDIzLjE0NiwyMy4xNDZ6Ii8+DQoJPC9nPgoJPGcgZmlsbD0iI0ZGRkZGRiIgc3Ryb2tlPSIjMDAwMDAwIiBzdHJva2Utd2lkdGg9IjAuMiI+CgkJPHBhdGggZD0iTTIyLjA2'+
			'MSwxNC44MDNoLTQuODY0VjkuOTM4YzAtMC42NjEtMC41MzYtMS4xOTctMS4xOTctMS4xOTdjLTAuNjYsMC0xLjE5NiwwLjUzNi0xLjE5NiwxLjE5N3Y0Ljg2NQ0KCQkJSDkuOTM4Yy0wLjY2MSwwLTEuMTk2LDAuNTM2LTEuMTk2LDEuMTk3YzAsMC42NiwwLjUzNiwxLjE5NiwxLjE5NiwxLjE5Nmg0Ljg2NnY0Ljg2NWMwLDAuNjYsMC41MzYsMS4xOTYsMS4xOTYsMS4xOTYNCgkJCWMwLjY2MSwwLDEuMTk3LTAuNTM2LDEuMTk3LTEuMTk2di00Ljg2NWg0Ljg2NGMwLjY2MSwwLDEuMTk2LTAuNTM2LDEuMTk2LTEuMTk2QzIzLjI1NywxNS4zMzksMjIuNzIyLDE0LjgwMywyMi4wNjEsMTQuODAzeg0KCQ'+
			'kJIE0xNiwzLjVDOS4wOTYsMy41LDMuNSw5LjA5NiwzLjUsMTZjMCw2LjkwMyw1LjU5NiwxMi40OTksMTIuNSwxMi41YzYuOTAzLTAuMDAxLDEyLjQ5OS01LjU5NywxMi41LTEyLjUNCgkJCUMyOC40OTksOS4wOTYsMjIuOTAzLDMuNSwxNiwzLjV6IE0yMy4xNDYsMjMuMTQ2Yy0xLjgzMiwxLjgzMS00LjM1MiwyLjk2LTcuMTQ2LDIuOTZzLTUuMzE0LTEuMTI5LTcuMTQ2LTIuOTYNCgkJCUM3LjAyMiwyMS4zMTQsNS44OTQsMTguNzk1LDUuODkzLDE2YzAuMDAxLTIuNzk1LDEuMTI5LTUuMzE0LDIuOTYxLTcuMTQ3YzEuODMzLTEuODMxLDQuMzUyLTIuOTYsNy4xNDYtMi45NjENCgkJCWMyLjc5NSww'+
			'LjAwMSw1LjMxMywxLjEzLDcuMTQ2LDIuOTYxYzEuODMyLDEuODMzLDIuOTYsNC4zNTIsMi45NjEsNy4xNDdDMjYuMTA2LDE4Ljc5NSwyNC45NzksMjEuMzE0LDIzLjE0NiwyMy4xNDZ6Ii8+DQoJPC9nPgo8L3N2Zz4=';
		me._zoomin__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;zoomin;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._zoomin__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHYXJkZW4gR25vbWUgU29mdHdhcmUgLSBTa2luIEJ1dHRvbnMgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xIEJhc2ljLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLWJhc2ljLmR0ZCI+CjxzdmcgdmVyc2lvbj0iMS4xIiBiYXNlUHJvZmlsZT0iYmFzaWMiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIgoJCQl4PSIwcHgiIH'+
			'k9IjBweCIgd2lkdGg9IjMycHgiIGhlaWdodD0iMzJweCIgdmlld0JveD0iMCAwIDMyIDMyIiB4bWw6c3BhY2U9InByZXNlcnZlIj4KCTxnIG9wYWNpdHk9IjAuNCIgc3Ryb2tlPSIjM0MzQzNDIiBzdHJva2Utd2lkdGg9IjEuNSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTYsMTYpIHNjYWxlKDEuMSkgdHJhbnNsYXRlKC0xNiwtMTYpIj4KCQk8cGF0aCBkPSJNMjIuMDYxLDE0LjgwM2gtNC44NjRWOS45MzhjMC0wLjY2MS0wLjUzNi0xLjE5Ny0xLjE5Ny0xLjE5N2MtMC42NiwwLTEuMTk2LDAuNTM2LTEuMTk2LDEuMTk3djQuODY1DQoJCQlIOS45MzhjLTAuNjYxLDAtMS4xOTYsMC41MzYtMS4xOTYs'+
			'MS4xOTdjMCwwLjY2LDAuNTM2LDEuMTk2LDEuMTk2LDEuMTk2aDQuODY2djQuODY1YzAsMC42NiwwLjUzNiwxLjE5NiwxLjE5NiwxLjE5Ng0KCQkJYzAuNjYxLDAsMS4xOTctMC41MzYsMS4xOTctMS4xOTZ2LTQuODY1aDQuODY0YzAuNjYxLDAsMS4xOTYtMC41MzYsMS4xOTYtMS4xOTZDMjMuMjU3LDE1LjMzOSwyMi43MjIsMTQuODAzLDIyLjA2MSwxNC44MDN6DQoJCQkgTTE2LDMuNUM5LjA5NiwzLjUsMy41LDkuMDk2LDMuNSwxNmMwLDYuOTAzLDUuNTk2LDEyLjQ5OSwxMi41LDEyLjVjNi45MDMtMC4wMDEsMTIuNDk5LTUuNTk3LDEyLjUtMTIuNQ0KCQkJQzI4LjQ5OSw5LjA5NiwyMi45MDMsMy'+
			'41LDE2LDMuNXogTTIzLjE0NiwyMy4xNDZjLTEuODMyLDEuODMxLTQuMzUyLDIuOTYtNy4xNDYsMi45NnMtNS4zMTQtMS4xMjktNy4xNDYtMi45Ng0KCQkJQzcuMDIyLDIxLjMxNCw1Ljg5NCwxOC43OTUsNS44OTMsMTZjMC4wMDEtMi43OTUsMS4xMjktNS4zMTQsMi45NjEtNy4xNDdjMS44MzMtMS44MzEsNC4zNTItMi45Niw3LjE0Ni0yLjk2MQ0KCQkJYzIuNzk1LDAuMDAxLDUuMzEzLDEuMTMsNy4xNDYsMi45NjFjMS44MzIsMS44MzMsMi45Niw0LjM1MiwyLjk2MSw3LjE0N0MyNi4xMDYsMTguNzk1LDI0Ljk3OSwyMS4zMTQsMjMuMTQ2LDIzLjE0NnoiLz4NCgk8L2c+Cgk8ZyBmaWxsPSIjRkZG'+
			'RkZGIiBzdHJva2U9IiMwMDAwMDAiIHN0cm9rZS13aWR0aD0iMC4yIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxNiwxNikgc2NhbGUoMS4xKSB0cmFuc2xhdGUoLTE2LC0xNikiPgoJCTxwYXRoIGQ9Ik0yMi4wNjEsMTQuODAzaC00Ljg2NFY5LjkzOGMwLTAuNjYxLTAuNTM2LTEuMTk3LTEuMTk3LTEuMTk3Yy0wLjY2LDAtMS4xOTYsMC41MzYtMS4xOTYsMS4xOTd2NC44NjUNCgkJCUg5LjkzOGMtMC42NjEsMC0xLjE5NiwwLjUzNi0xLjE5NiwxLjE5N2MwLDAuNjYsMC41MzYsMS4xOTYsMS4xOTYsMS4xOTZoNC44NjZ2NC44NjVjMCwwLjY2LDAuNTM2LDEuMTk2LDEuMTk2LDEuMTk2DQoJCQljMC42Nj'+
			'EsMCwxLjE5Ny0wLjUzNiwxLjE5Ny0xLjE5NnYtNC44NjVoNC44NjRjMC42NjEsMCwxLjE5Ni0wLjUzNiwxLjE5Ni0xLjE5NkMyMy4yNTcsMTUuMzM5LDIyLjcyMiwxNC44MDMsMjIuMDYxLDE0LjgwM3oNCgkJCSBNMTYsMy41QzkuMDk2LDMuNSwzLjUsOS4wOTYsMy41LDE2YzAsNi45MDMsNS41OTYsMTIuNDk5LDEyLjUsMTIuNWM2LjkwMy0wLjAwMSwxMi40OTktNS41OTcsMTIuNS0xMi41DQoJCQlDMjguNDk5LDkuMDk2LDIyLjkwMywzLjUsMTYsMy41eiBNMjMuMTQ2LDIzLjE0NmMtMS44MzIsMS44MzEtNC4zNTIsMi45Ni03LjE0NiwyLjk2cy01LjMxNC0xLjEyOS03LjE0Ni0yLjk2DQoJCQlD'+
			'Ny4wMjIsMjEuMzE0LDUuODk0LDE4Ljc5NSw1Ljg5MywxNmMwLjAwMS0yLjc5NSwxLjEyOS01LjMxNCwyLjk2MS03LjE0N2MxLjgzMy0xLjgzMSw0LjM1Mi0yLjk2LDcuMTQ2LTIuOTYxDQoJCQljMi43OTUsMC4wMDEsNS4zMTMsMS4xMyw3LjE0NiwyLjk2MWMxLjgzMiwxLjgzMywyLjk2LDQuMzUyLDIuOTYxLDcuMTQ3QzI2LjEwNiwxOC43OTUsMjQuOTc5LDIxLjMxNCwyMy4xNDYsMjMuMTQ2eiIvPg0KCTwvZz4KPC9zdmc+';
		me._zoomin__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;zoomin;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="zoomin";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._zoomin.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._zoomin.onmouseover=function (e) {
			me._zoomin__img.style.visibility='hidden';
			me._zoomin__imgo.style.visibility='inherit';
			me.elementMouseOver['zoomin']=true;
			me._tt_zoomin.logicBlock_visible();
		}
		me._zoomin.onmouseout=function (e) {
			me._zoomin__img.style.visibility='inherit';
			me._zoomin__imgo.style.visibility='hidden';
			me.elementMouseDown['zoomin']=false;
			me.elementMouseOver['zoomin']=false;
			me._tt_zoomin.logicBlock_visible();
		}
		me._zoomin.onmousedown=function (e) {
			me.elementMouseDown['zoomin']=true;
		}
		me._zoomin.onmouseup=function (e) {
			me.elementMouseDown['zoomin']=false;
		}
		me._zoomin.ontouchend=function (e) {
			me.elementMouseDown['zoomin']=false;
			me.elementMouseOver['zoomin']=false;
			me._tt_zoomin.logicBlock_visible();
		}
		me._zoomin.ggUpdatePosition=function (useTransition) {
		}
		el=me._tt_zoomin=document.createElement('div');
		els=me._tt_zoomin__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tt_zoomin";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='z-index: 100;';
		hs+='height : 20px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : 32px;';
		hs+='visibility : hidden;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		hs+='text-shadow: 1px 1px 4px #000000;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="Zoom In";
		el.appendChild(els);
		me._tt_zoomin.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._tt_zoomin.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				(player.getIsMobile() == true)
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._tt_zoomin.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._tt_zoomin.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._tt_zoomin.style[domTransition]='left 0s, top 0s';
				if (me._tt_zoomin.ggCurrentLogicStatePosition == 0) {
					this.ggDx = 0;
					me._tt_zoomin.style.top='-25px';
					me._tt_zoomin.ggUpdatePosition(true);
				}
				else {
					me._tt_zoomin.ggDx=0;
					me._tt_zoomin.style.top='32px';
					me._tt_zoomin.ggUpdatePosition(true);
				}
			}
		}
		me._tt_zoomin.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				(me.elementMouseOver['zoomin'] == true)
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._tt_zoomin.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._tt_zoomin.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._tt_zoomin.style[domTransition]='left 0s, top 0s';
				if (me._tt_zoomin.ggCurrentLogicStateVisible == 0) {
					me._tt_zoomin.style.visibility=(Number(me._tt_zoomin.style.opacity)>0||!me._tt_zoomin.style.opacity)?'inherit':'hidden';
					me._tt_zoomin.ggVisible=true;
				}
				else {
					me._tt_zoomin.style.visibility="hidden";
					me._tt_zoomin.ggVisible=false;
				}
			}
		}
		me._tt_zoomin.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((98-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me._zoomin.appendChild(me._tt_zoomin);
		me._button_zoom.appendChild(me._zoomin);
		me.divSkin.appendChild(me._button_zoom);
		el=me._map_pin=document.createElement('div');
		el.ggId="map_pin";
		el.ggDx=-308;
		el.ggDy=-219;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 41px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 24px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._map_pin.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._map_pin.onclick=function (e) {
			if (
				(
					(me._map_pin.ggIsActive() == false)
				)
			) {
				player.openNext(player.hotspot.url,"");
			}
		}
		me._map_pin.onmouseover=function (e) {
			me.elementMouseOver['map_pin']=true;
			me._map_pin_tt.logicBlock_alpha();
		}
		me._map_pin.onmouseout=function (e) {
			me.elementMouseOver['map_pin']=false;
			me._map_pin_tt.logicBlock_alpha();
		}
		me._map_pin.ontouchend=function (e) {
			me.elementMouseOver['map_pin']=false;
			me._map_pin_tt.logicBlock_alpha();
		}
		me._map_pin.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		el=me._map_pin_active=document.createElement('div');
		els=me._map_pin_active__img=document.createElement('img');
		els.className='ggskin ggskin_map_pin_active';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAABSCAYAAAAWy4frAAATIUlEQVR4nMWba3Bcx3Xnf6e77wxmQFLiA5Yl0SQlK5JsQpJtWCJVVhKwnCwp26mkolBVydbWVqKqPKryIZ9clVQSM0pixS57vYmTKEqZ5Yo363VZeViJYlMVe4lNLJESRclLgqHEOLT4BgmAIDDPe293n3y4M8AIJEGAguSDupiZO7cf/z6nz/n36R7hOuTrO7EAjz5NAFAwz2299wNC/EiEB1DuBt1kRNYqCICARtVJkDcQXjPwkmKe377/0PcE4pXqXYrIUh5WMCPDw2bbyIgH2HP/+zeLMf9VhZ8xIu/rdxYAr5DHSFB9U3krQmIMrtNqwwei6lFRvqEx/u8dB/7tCMDe4WE3PDISuwCXFchTQ0PJrxw8mAP80wODHzaG3xL4mZXOSY6ShqgxBO'+
			'+9F9UgghgRI7MtKKhGVTSKWHXOqbHWla2RBKHmvSp8I0Y+/fGXRl+e3+ZyAJG9w8N228iI/8ehO9clSemzVuQXK9bQjEoIIc/z1AjG9q9YwapVN7ByxQoq5RIll4B0mlAl8zmtNKNWrzMzM02jXkeJIUnK0VqbVI3QCpGg+uU8zz75UwePTewdHnbbRkZCMRTXCWQXmE+BCuieLff8NKK7Vzq7thFUYww+S1NX6e+Xd990E+9as5ZV/VVKzmGMKfp+lcZijGTeM9NocuHiJGPnz9NqNrRUKntjrOu3IjUfJlF5bMeLh59RkN8D2bWAqV0ViILp2uhzWwY/3efMb3oFr5qlabtUqVTZ9J4N3DKwjkq53OmgoqrowoOHIIgIxhTNt9KUs+MTvHHyJK12k3K5L3MiJSfQ9vGJ7S+O/tb8Pi0KSG+BPVvu+eoNifn5magh'+
			'hojPU7thw0beu3491b4+YoyEWNQtsiTfgXacgTUGYwzNdpv/OH2akydP4JJyMNawyoidzuP/2fHi4V9YCMxlLWth1QqwZ+vg39zg7CMzIWbe50niEnn/nXdx89q1RJTYBbA053c5IOYACcK5yUn+7djr5D5X55J8lTWlaR/+dsf+0Z+b38eumPmVPr2zuPfc1sEv3eDsI7WoaZ7npWp1hTxw333csm4tPgRiiMjsSOhburr1hBDxwXPLurU8cN99VKsrJM/zUi1qeoOzjzy3dfBLvX3sFdv74eWhoeQnv33O73lw82+scu43a0HzPM9KK/r7uX/zIP2VCrn3GOkC6PGtl32Wea+93zPvOTqACt36EKiUy7xrzRomLl2i1W47LyZf6eyHd966bvqnnxvf9/LQUPKX587NmthszR035/c8uPkBi3kxAsF77euryP2Dg1'+
			'TLZXwIS54H1yuqirOWZppyYHSUdrul1jkxQCBu2bHvyEvdPkPHtBSkewOV3YkRVNWLEbnvrruolsvkwXdCwlszo0Wbm0AePNVymXvvuhMREVX1iRFQ2Q2wbWTEdymQAfjLoSEHsGfr5k+ucnYwjWRZlrq7b7+D1StWFOaELKkvqoU77r10iXgMgveeNStWcvd77yDLUpdGslXODu7ZuvmTvX2XXWB2QXz2oXtWO6//nhiztpmm8V3rBsyH7ryT2JmMizeJwgtZMTgz5w5A8VEJGjtxZAl1UoB65dgxLkyMx2q5bPIYJ72TH/nEdw9P7QJjfnx42AA4r7+20tm1PmpurTF3rF+PEYGoix7BGBUnQtk6fIycrTc5MT3DiekZztab+BgpW4cTIS6hXqJiRLhj/XqsNcZHzVc6u9Z5/TWAHx8eLkLrNx++o2ymyq+VrdtU'+
			'b7fCe25Zb+/ZtAkfw6JjRFSl7BxT7TYjp87yT8dPsPvYDwoVAYjw2J238fHbNzL8nltY3ddH6n0xWIvSiuKM5fAbb3Dq7Omwoq9i0+DfiKvTuz/2re+nDsBcrOyoOtnUitEbY9yt69YVJtLrHRdqRJWytXzvwgS//p3v8vz45Ox3a2zh8i+GyO7Xj7P79eN8ZGAtf/rRh/jAwFrSRXrCbn9uXbeOM2NnbRajr1q7qXmxsgN4phNY9GetMeR5zpobV7OqUiHEUGDo1nCVK8ZI2VqePzPGB7/2DM+PT3J3f4UBZymJMB0i0yFSEmHAWe7ur/D8+GTx7JkxytYWDOEa7QgQYmBVpcKaG1eT5znWGEB/FsC88OCDFYThrKDkZuDGNThjCh50rTmhSp+1fH9qmof+7psAbCyXeK3RYtwHclUiBTHKVRn3gdcaLTaWSwjw0N'+
			'99k3+fmqbPWuIi2lNVnDEM3LiGEILJooIw/MKDD1ZMLdbfb0Q2pCFQShJZ3V9d1AihigFSH/iTVw8DcFtfiRNp9qb43nvRsdQTacamvhIAX3z1MKkPnYB27TZjjKzur1JKEklDwIhs6GDgnqo1xBh9pVKRSqmEql6TQ0WNlIzhtYtTfPHIMW4rl/hBO8P0dPqKtk4RvH7QzritXOKLR47x2sUpSsYQNS7YplBopVIqUalUJMboq9Ygwj0mwvuMCCFGqn0VEmvRK7nG3p50w6kqr1yYeFNHF7PInv/MKxcmZufBZe313lPQqCTWUu2rEGLEiBDhfU7RDcXDqtVSaRb1ZY5kXuVCkWA4OjkFgNeF9HBl6ZY5OjlFHmOPFVwBTLcbWiwbqqUS3QWNohucwE2hmEhSTkpznmpR8UNJvZ99v3QpyqTed+bAYooUmisnJVRV'+
			'QmEdNzlFk+4zZna5sshKL+/T9ZdZLJBO33oDqaKJE5lXXAtyJ3L1WrvfWAwDlT5g6cvc3jIDlb6CINJdcS4AQ7v/eupR1KHiu6VDjJ34odekilEV64R7160FILkOIN0y965bixUhCwWnWlAxWiQ4QoxziEWCQ2XMCIiIplk6mxCYj3o+riLSRj44sAaAsSwjEcHrtXIoRVknwliWAfDBgTWE7mSf5WYUqr/CAlNVSbMUEdFOIua8QfS4UNhcM02JehVdzHPHAmQhsL6/ypd/bAsNhburfbNtLwRCKZ5tKHz5x7awvr9KFsKby+m81573qkoryxApKK0ox40gR6MqxlhppG1y72dd8GL4jw+RR27fyGN3bOJwo8W9/RVKC5hZSYR7+yscbrR47I5NPHL7Rnzo0cYi2ETuPY20jRhrYmEBR11UPVz3ASPi2mmqrSyTUq'+
			'XSddgLiiD4GKlayxNbPwQou79/AgfcXk6I82zMCJxMcw41Wjx2x0ae2PohqtaSdQLbtdyWdrxVO89pp6laEdvwgWjiqNM17ddlqu8HJWtum8kzrbVasrpS6WTSrzWBixHKQmBNucT//MgDPPTum/jF5w9wPL1K7lmEL3/kfn7uvRupOEtW8KXL5+RVkAhQa7XIvdcV5bKkMZ6xDXfMfexb30/3bB08UBJzmzEmTjXqZv3q1XNDsAgxImQhUjaG/37Xe/mJ9TdzaOIiR6YuMZMWE3pVucTm1Tdy77o13NpfxcdIFuLiQfSAmWo2EJFYMsZkGl7efuhQw3W+/WdFH7XGcqlRJ81zStZxbf8zV7kBgirBe26uVli/cT3bN9w66wVFBCtC0A4bEJljvIuUgm17LtXrOGu1cNTm2wAOIDGyt+6Dd8a4ZprqdKspN61chY9L'+
			'Szx0n81DIFO9LEh2773JzS5SlCKlWm+3aaZtdc4lNR8QY0YAjIJ89IXR/wD291kDQhiv1eYC47UdyWUXHWJ3ucsu7l1Pnd2F3kS9RtAY+4xB0Ve3v3BoFIqtNAsgyjMWsMYyWa/RznNEpGNeP9xLUQxC6nPGazMk1sVEBFGehSJLasYHRrQwi/BMrWNerTTVqWazZ9XW+9p9r/Pam/95Md/pFeqb307xagSmWy0a7ZYaMUk9BBD7DYDxgQEVKHamdkHcs3Xzt/ud++h0mvl3rbrB3XfresLVIv07KN21+pGxc5yemgyrSmXbjOHlh/eN3t99xkCR4AIQ+F8COFuYVz1NsXTt84dzqRZEspXnTNRrJMZFJyCRr0GxYToLZLjYbKTqzD/Ucj+RGOPy4OOFWq0zQRcym7f7KubHRL1OK0ujNZLUfGgHG/4G4NzBg2EWiI'+
			'DuHR52P/rdw1Mi8nSfMSTWhbGZaTKfFwnsHxKS7n7JuZlprLGxYg0K3/r4C0dPfH0ndlcnBTC78zM+MFBMepXdjRCwYlwtbTHZbBZrhB+CVlQVK8J0q8WlVgNnrQRVUPkSwMD48Oz0nc+cjUDcs3Xw//Zbu20mz/2aar/74C23LjV+LYsoYI0wen6MszNTYWVSsu0Qj27fP7p5wT3Ekc6kNyJPKsWO0WSzwaVWC9vVyjukjkIbUE9TxjuTPClyCrsFtDvJrwikO+mT8tq/b4ZwrGzEKTGcmZmhw/vfOYcFgHCuViPzPjpjknoeLjn4a5ib5FcE0kW6bWTEC+YvEhFKxsUL9RlqaYoV5rQyXzvLqa0OCW3nOWO1aRJrQ6XYgf3qT7w4en7v8LDbNS/Pd9k27y8fPOgBVOJf1byfcMYkeQzxXG0G0R7+xLz2539ehkl+'+
			'vl6jlWdqjElqPpCb8CRAl40sCKSrlR37jlxU4UsVI5SsC2P1GZp5NqeVtzkAZt5ztjaDM9b3W4PA33/ihaOjX9+5017pPNdlQDpaKYKMlz+fyUPDiiRtn8cztZmetfXyaeDNV2FWFxoNamlbjYhNY0Sj+QLAwPj4FRnTFYEIxL3Dw277gdFTCF+pWkPJuHC2Nk0rzzu5p7cHSTehcbo2jTEmVK01edSRHS8d+tddMHvobVFAAIZHRiKAWvPHNR+CMZKkPtdzjXpxXOJt0Ep3bky0mkynLZwx4lVB9DMwxwmXBKSrlYefP/Q68JV+a3DG+dMz0zTzgrYst1YE8DFyauYSRoyvGGPTGF/ase/IHu091LAUIDDnHaLq52o+RGskaflcz9Zr2CL5tayT3Iow2WwyVWijA5DPA3QXgAsM/MIyd0Zl8Csrrf1vNR9yKya5/6'+
			'abi41MfXN2cynSLdNb9tXxMS5laVjhrG2F+P937B/9wGLqWlAj0OOzTfxMzQc1hQfTs406QkFbuia21L/ZMh2Xe6HV5GLaIjFGO2cmnugO5rX6uahBnNXKlsHdKxP7SzUfciOS3D9wM2U3p5W3Kq9MnKeWpb7fWdcK8cCO/aMP9PRTFyp7TY3AnFbUmc/WfAhGJEmD1zONWk9uSudee9/3zgXm3WOOHF5oNbiUtjqn6AAtPFVHGwuC6CJdlHTP4O7ZOvjkSmd/teZDLpB8eODdVK0r1vbXeZZLVXll8gK1POvOjZd27B/dolc48nc1WZRGAFbffrCIK7jP1HxoW5EkiyGertfmRuN6PBVwvtXkUtbueCoQ4ffh2p7quoA8+jThqaGh5OH933tD0Cer1pAYG862GtTybC5JsYS4YYAsBk42ZnCduNHy8V+27xt9dtcC'+
			'UfwtAYG5NYAPfHbGh5oTSXwMerLRq5XFXV1tjDWbxUAYI0EVY8zjsHAUf8tAdkF8amgo+fiBI2Oi+oWKNZSM9YVpLD51pJ3MSDt4TjVrOLG+aoxNY/jWf9l36Dtf34ldijaWDATmtGJ963/UfDjvjEmCajzZqMFi3XBHG2eaTZo+VyfYNEai2sfhzUmFxcqSgeyC+PLQUPKTB49PK/qZPiOUjA0X0haTaRtDseOrC1xGhIbPOd2qkxjrq85Krvq1j714aH/vydG3FQjAUGcVWavxZzN5OF4ykggSTjRrhKjI/MX3PLMShVPNBmkomELdhxjgcbjy6u9tA9JdRT565EhmRB93IjgxejFLmUi7GZfu03P9UgWLUPMZZ9tNEmN8vzUg8uQn9o8e3Ts87K7n1zzXDQSg8wMV2b7/yF81Qnilz4ozRsKJVmPugMz8id5xWS'+
			'ebDXyM6kSSmg91nP9DgP/XWQO9o0AA9nb3VoRPATgxTOcZ59utnoxLIarFIYFLWcb5tEXJmOKsFXxux78ePffy0FCyawk/RVpWINtGRvwuMNv3jT7bCvHbVWOsM8afbDVIQ+gcei60IRSn30606iiExEgy4/3ZUp9+HuDZeXmqdxQIzAUuNfK7aYxYMI3gOdsuNoq6nsoijGcpE3lKSUwsGQPI728bOVJ/6i1qA5aHfffQ/Hu+uiIxP1/3ITeQDK1aQ58xs87r1doUtRhCvzG2FePhh/eP3rsc7cMyaATmXKYYHq93aX6MerrdRBSswFja4lLIcVIcJxeV34HFLZoWI8sCpEsot+87/Brok/3WkBjjz2YtGsGTx8gbaZNEjK8aY1shfGfHi4ef2bVEYriQLAsQmKMu5cAfzhFKjafTFqfSFu0Y1DBLRX4b4P07dy7b'+
			'9uSyAdnVIZTbDhwZAz5fEEoTxvKUU2mLkhjf76wE1b/uUpFHn376LXmqXlk2IDCXADdN87m6D2ecSCLFYWwFkroPWR7kU3D9VORqsqxABPTloaFk+6FDDVV9onOSIgr4lc4C+oVPHDh8/KmhoeR6qcjVZFmBwByhnNlw5C9mvD+WiDgRkhkfLpT7kj+CyzdplkOWHcgsoXyaICp/YI3QZwwon9428r1LyxH83mkRgD1bBl/bs3Xw1Pz7yy3LrpGuzBFKfQKV3+3cW1SO6nrkPwHZ1w2h+2jlNgAAAABJRU5ErkJggg==';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="map_pin_active";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='bottom : 0px;';
		hs+='cursor : pointer;';
		hs+='height : 41px;';
		hs+='left : -10000px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 24px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 100%';
		me._map_pin_active.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._map_pin_active.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				(me.elementMouseOver['map_pin_active'] == true)
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._map_pin_active.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._map_pin_active.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._map_pin_active.style[domTransition]='' + cssPrefix + 'transform 200ms ease 0ms, opacity 500ms ease 0ms, visibility 500ms ease 0ms';
				if (me._map_pin_active.ggCurrentLogicStateScaling == 0) {
					me._map_pin_active.ggParameter.sx = 1.1;
					me._map_pin_active.ggParameter.sy = 1.1;
					me._map_pin_active.style[domTransform]=parameterToTransform(me._map_pin_active.ggParameter);
				}
				else {
					me._map_pin_active.ggParameter.sx = 1;
					me._map_pin_active.ggParameter.sy = 1;
					me._map_pin_active.style[domTransform]=parameterToTransform(me._map_pin_active.ggParameter);
				}
			}
		}
		me._map_pin_active.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				(me._map_pin_active.ggIsActive() == true)
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._map_pin_active.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._map_pin_active.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._map_pin_active.style[domTransition]='' + cssPrefix + 'transform 200ms ease 0ms, opacity 500ms ease 0ms, visibility 500ms ease 0ms';
				if (me._map_pin_active.ggCurrentLogicStateAlpha == 0) {
					me._map_pin_active.style.visibility=me._map_pin_active.ggVisible?'inherit':'hidden';
					me._map_pin_active.style.opacity=1;
				}
				else {
					me._map_pin_active.style.visibility="hidden";
					me._map_pin_active.style.opacity=0;
				}
			}
		}
		me._map_pin_active.onmouseover=function (e) {
			me.elementMouseOver['map_pin_active']=true;
			me._map_pin_active.logicBlock_scaling();
		}
		me._map_pin_active.onmouseout=function (e) {
			me.elementMouseOver['map_pin_active']=false;
			me._map_pin_active.logicBlock_scaling();
		}
		me._map_pin_active.ontouchend=function (e) {
			me.elementMouseOver['map_pin_active']=false;
			me._map_pin_active.logicBlock_scaling();
		}
		me._map_pin_active.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me._map_pin.appendChild(me._map_pin_active);
		el=me._map_pin_normal=document.createElement('div');
		els=me._map_pin_normal__img=document.createElement('img');
		els.className='ggskin ggskin_map_pin_normal';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAABSCAYAAAAWy4frAAAP30lEQVR4nN2bfYzlV1nHP+f8Xu/bzOy87U53ZrdtcFugFiwhrRKhDcY/uhL5x0b5xxDDHyZq1Eg0DUEgQqRGXpoK0WBM1ShgAikRTa0KVAi02KYYaLsF2i47szs7L3dm7vvv5ZzHP87vzu7s7tw7L3dq4rM5yeTe3z3n+Z7vc56381v1S7/5e/x/EH/UE16auGfeC0sntR/OCzKPyAJoDyWvKtSizdNFk3aXSpWtSxNLL5hRrTsSICuz992tPP9XgAcCpRbcp4ICUAoQ+p9pP0D7AbmM1VfnTn7ZWPP52F/+2mFBqYOa1qWJe+b9Uu13gQcULOycVRF4Hn4QEAZur9IsJ88yMmNAhGuer4vYL0uePzS7+vWXXhMgy9U3VSiN/6H2gj/QSpf6n5dKJW'+
			'qVMrValcDXA+fIjdBqd2i3OzRbre3PrdiuUvozSbv+sfnGM/UjA3Jp/J73+uXahxG7ABAGIccmxqnVqvje9cqLCLb4WwNKqeueMSK0Wh3W1+ukWdr/3ary/I8G6sIjezW5PZ2R82NviMqVm/7Ct/Y3sAalPWanp5gYr+1QOjNCkluMFXIrmGtMyCuARL4m8jSBr9DAWLXMWLXM5laTlbV1EDODyT+VyOwvLlfDB060vtcepuNQRhbH3jIZxtUvKeW9A2BsbJzZmSk87ZQyVuhm1gG41vb3IJGnqUbejvnW1utsbm4CYK35H5slZ+c2v7M4aJ6Bxrwyc++ZMB77Lqh3iFiOz85y/Pg0SiusQCsxrLUz2qkht4II+x693LLWztjq5hgrKK2YmZlibm4OAKXUnV5UfnZl9r67DwTk0sQ982j9TZBblfY4tXCKscKU0lRY'+
			'a6e0UoPASEY3t6x3MjqJOxLVapmF+Xm0F4DYGbT+2sXqXXfsC8hy9U0VHURfReyM9gJuOX2KOI5AoNnN2Uwy7P6taKhYgVZqaHQMCMRxxM2n5omCEKwp+eXxxxbH3jK5ZyCE1b/XYu/0EeZvmsP3fYwV6u2MTmoRy5GObmaotzOMFXzf58TcTSilUTa/NYyrX9o8+XpvKJDlmbd/RCn1bivC9PE5oih0IDoZqbHIa/QvNZZ6x4EJQ5+5uTmsCGLMO9J0+s8GAlmZufeMsvZBgMnpWSrVKlag0cvJzf4Ps6eVc7W+xtNq37/PjbDVzbHiAu7k9CwAYuV3VmbuPXO17jviiDXZx5VSXhxFTE46U+ykhm5m2YtoBZXQudJAa/S1fAtkuZCJpZPuzV33covq5YzFPpOTk3RaLXq9jidKPgmcvY6Rldn77kZ4t1jh2NSMWz'+
			'QTmj2zJ7cTac1UOaQceESeRhe5Ypam9Hrpdt4Y+Ipy4DFZDoh9vae5u6mLUwhMzcwgVpAsv3/5+H2/0Nd/mxHJep8CKJVrlMrOpJqJuS6/u1aUgmrkUwrcnmRZytbGBr0kIU26GJO757RHHEXEcZnK2BhRVKIW+YTa0kjyoes0e4agrImiEqXqGN3WJsraPwfetM3Iyux9dwvcAzA9ewKAJLP0jMXCrkMpmCwF2yCaW1ucf/VlNjbW6HaaO0CINXS7HTY21lg8/zL1+joiEAWa6UqI76mBa6VGtk18enrGbX6e3tkPlD6AFXNWRCiXKwRBiAg0knzwFuGY0FphTc7ypYt02g0ATk/XOPvmBd6wMM0dC1MEnuaFpTrPL23wn99f5Lnza9RXL9FtbDFz0zxBEFILfda72cD1WklO7IcEQUipVKbTaWOSzq8CT3ln3vqz'+
			'NLyZzyqlpmvHpimVyiTG0E0HH/DY96hGzp0vL52n026CUrznbWf4+Ht+jre+7gTzU1VC38P3NCcmKvz0qSne9ZZbqJUCvvvKOmnao91qMj4+ged5gJDlu68r4s6YrzVWhE6rgVhzrJZefERfrN51h9LebQDVag1rhV5uEVG7DoBKrLFW2Nqq02m3UFrzyHvfzu+ffTNRcF282hal4D1vO8Pnf+ud1OKAPEtZX13FWqHse2i1+7oiil5u3bPlqptPe7ddrN51h0bkLCJEUYznBQB0E8HK7qMceGhRGJOxvnIJRPj1nz/DPT91YiCLV8vNs2O8/10/AyJsbaySJi5Tr4X+wLW7ifMKnhcQRXE/6JzVyg9PAHhRGYDcuh8MkqAIEJvrq4gx3DxT433v3DWf21Xuv+sW7r3dga+vrADge9cXX1eLFSEtEr0odjoL3KKV59'+
			'8sYomL2tra4RG3v1jS6yBiefdbbx1oToPk197+ekQs3Z5jRCsK89p9/X7Z6fs+IhZgQdu05xoHngOS2cGH3NMKrVymmvS6ANxxavpAIABuu8llEGINed5zCg7Zk20dC52V0sc1yEmsJfB8rEC/ybF7/uRA5GkbKeLE60/eMLPek1TjgPnJClhLt9vFijPdQToY43QIPN+ZEHJSi7UVB8u5NCMgIrsOjXsuz1wBVAnUgc2qLxPlCACbZVgRtBqsgxF3VlDurIq1Fa08/6KIkOWug+GpwalPn9aoVEJEaPVyXl1pHBiECJy7tIWIEBQOp5fbgTpozx32LE8REZTnX9RizY8VgkkdkGEHrR+wRPmEYYhCeH5x/cBAzq82yNIEhRDFjplsSMngiWPCpCkKQaz5sQYuWCtkeYa1MKS35s5HLlgLQVTBWuGpc0sHBvLNF5ew'+
			'VgjCCCM+1rpUf5BoRfFchnWu+IJW8AoIaeI8kC7aMoN2JDVuodLYOCD88zMv88zLl/cNYqne4q/+7TlAKI85h7GXAq7v/p3OgoJXdN7rfBsgaW1hcueFAn+webVSd9BLlWOUx45hreWP/+FJkmzvfWgR+NDn/4tmJyGKS1QnXGBsJ3bg2oFfbLQVktYWAKbXfU6PndDfUlo3wQU4gMgb7IWyXGgXSeWx2dNoz2ep3uZ9n/nXPR38eqvH+x/9Ov/9I8fi1NzNKK1Ic6EzZDPiIsh0O83+lnRsRX/du/O218mmTNytlLpda01cGQcUnXTwhGkuRL7G15qwFNNpbLCy2eKfvv0Sge9xemaMUrizI9vqZTzx3Cv89uf+gxcvrALCsePzxJVjiMBaO0OGpEfjsY8CWvVl0l4LkCdOdZ7/Wx8gqEw8lnebv9xpbTJx/DS+dh'+
			'SmAw6diLDVy5gqB0SlCY7f/EY2l1+m12nx8Fee4uGvPMX89Bi3z89QiXx+cH6FH1/e3FbUCyIm524lLtcQYDNxncZBEvouqxCg03Jzic2/Cv1SV/EEgMkSep0mYalGyfNIssHFVZIJ9W7OROzjBTFTC2+gWV+iub6MWMPiWoPFtZ2mppSiOjHL+Mw8ojysuHPRSYY3OMqhyz7SbhOTJQAE1WNfYbMAMrf5ncXF6I3/Itbe39y8zFSpRhho6DG0lu4mll6aMhH7xKGmNnmS2uRJTNYj6XXIu02sGOJSlSCqbmfZgvNQG13XahomSkFUeKutjWUQi4g81m9uX2k+5OZhtLq/t7WGmTmN5weUIk2nN3ynRGCjm1MzPuXYdVC8IKYcxFC7Pg+zAp2epZkOL6f7UoucqibPSBsuACvhs/3vt4HUTqh/byyb88DpTmOFyrGT'+
			'lLRHW/bW0wJX5zcS0Bpiz8PXirBwl5kVslxIrSE/wG1h5LsbgHb9ImINoM6dMuce73+/Hccnll4wUiBsrju36PvKxRT21H7aHsZCOzNsJTmr7YzVdsZmN6edGbK9tcl2jChUrslhhdamK8BQPHw10B0JiS/qb4DEZl16rfp2WTsoE30tRsX3XJnbvIzNUwQaYRw/uiuQk3JuBcUXAZr1SyCOUq2GpMRHOHxPuZREoF2/XJDB3117HXddiqhEHgHI2ptkRf5VDrz/KxxU+yV42iLvtQCsUvpT1+p9HZAF88OngWcBOlsXHZBQo3De5rUcnlbEoXMWm+suwxZ4YiF/8UdDgQCI4pMA3Y3L26xUo5G/7TFUxqIirU+6V1wu6mM3evaGQMaPe/8I6gewkxWv/zbGazAC74rrbqy96hQT9Y1T5tyTewbiLunlg+BYMVnBSu'+
			'gPrRVGNfpnI+m2yVobFHR88Eb67goE4JR56UsUZ6VZX8SKEIcKT8NRX7uFgSIMXIOhXX/FkQGP78bGQCBuA/SDAGljlayoVWrR0bNSLroySbtJ3nFJp1X80SBdBwJZMC8+DnwLoLP5EwDHirf/aL/XEfqKOHBno7v1k2JH9WO35C89d2AgxSwPAmStjW1WxiP/yA553ztexYb14/IHhmk5FMgpc+5JgccBOhvnMQJB4KLtqONGWOR2RqBTnA3gCze1nv3+oYG4h5wHy9qb5EWtPB6PPq7UijmT5gbGXTNYpfSunmqnjnuQBfPDp1H6MXB2K9blQIGnRpYYxoHC1wqxkGxdcAuLevRGUfzAQAAKO7V5p0Hadn59fITRvl84pe1tNhKlbxzFbyR7BlLY6Rfgyo4FgSL0B3fO9zKiQG833Xob5/tLfm6vbOwLCEBhr9Yk'+
			'bdL2BtYW+dAhD/lY6HKq7tYK1mURSVCb/NP96LYvIAv5iz9C1KNwZed8T1EK9zXNDimFGs9TWISsWfSQRT0y7I25a2XfGgRjxz5IUUXm3Q1EHCsHMSlw50wEsuYqNush0PCEh/ar176BFDv1OXCsCIKnFeVo/6yUQo3WCkFIiyiu4NMn5dzKfuc6kE14Vn2EgpWstYogVIPB18rXDiiYREgay4jJEGjoSu266u/IgJyUcyuIciVx4wJi3d2ia1Tszaxi31WdYiEvzoaCT+/3xeVDAQHQ1erHBBo2T0lbywhQjTxu8I7ydaIUjMU+Au63JgNYCUuljx9Yn4P+cL7xTF3Bp+HKjvqe2hMr5cBDa7AmJ2+4mCTCJ/byovLIgQAUO7giJiNrLQPDWemzAZA1LxddQ1aicumRw+hyKCAnWt9ri/AJgLxxAWtytFJUwt1ZqY'+
			'SuaLImx3ZcPwClPnwYNg4NBKDYyRWxhqzpGmj915+ujeBXf5c1L/XZOC9l768Pq8ehgZxofa+NUh8G3A5LwUp0/fVdLfaKrmWO7ThTRKmHTjeeTw6rx6GBABQ7et6xcgkrQi0qXtDsL6SgErq3JpLNC9tsjB3XfzkKHUYC5HTj+QSlHgKwnWVMnqGuYaUSeSilMHmGdJ0JiuIDo/p/ViMBAuB2Vp0Ta7CtpR0HG9h2ALbVf7lAnXONwNHIyIBMLL1gRMmfAEj3MtYFOWqxRy3ue6orbIA8OMr/9TYyILCz1drf+UroXXG522zwbNEAHJmMFMjVrVbpXkby3nabR/LeVWzw0VGuCyMGAjtbrbZ95WWbq/4eORtwBEDgSquV3ho262CzDvTWdn43YjkSIFe3WqW9iLSLqlXUN4rvRi5HAsSJa7WSbrgBA68FDitHBuTq'+
			'Visw9FrgsHKEjFxptV7791HIkV4MLpgfPv0T//bHABbyF58+yrWO/IbTYD901GsA/C9GVYNNoq0j2AAAAABJRU5ErkJggg==';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="map_pin_normal";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='bottom : 0px;';
		hs+='cursor : pointer;';
		hs+='height : 31px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 18px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 100%';
		me._map_pin_normal.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._map_pin_normal.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				(me.elementMouseOver['map_pin_normal'] == true)
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._map_pin_normal.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._map_pin_normal.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._map_pin_normal.style[domTransition]='' + cssPrefix + 'transform 200ms ease 0ms, opacity 500ms ease 0ms, visibility 500ms ease 0ms';
				if (me._map_pin_normal.ggCurrentLogicStateScaling == 0) {
					me._map_pin_normal.ggParameter.sx = 1.1;
					me._map_pin_normal.ggParameter.sy = 1.1;
					me._map_pin_normal.style[domTransform]=parameterToTransform(me._map_pin_normal.ggParameter);
				}
				else {
					me._map_pin_normal.ggParameter.sx = 1;
					me._map_pin_normal.ggParameter.sy = 1;
					me._map_pin_normal.style[domTransform]=parameterToTransform(me._map_pin_normal.ggParameter);
				}
			}
		}
		me._map_pin_normal.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				(me._map_pin_normal.ggIsActive() == true)
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._map_pin_normal.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._map_pin_normal.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._map_pin_normal.style[domTransition]='' + cssPrefix + 'transform 200ms ease 0ms, opacity 500ms ease 0ms, visibility 500ms ease 0ms';
				if (me._map_pin_normal.ggCurrentLogicStateAlpha == 0) {
					me._map_pin_normal.style.visibility="hidden";
					me._map_pin_normal.style.opacity=0;
				}
				else {
					me._map_pin_normal.style.visibility=me._map_pin_normal.ggVisible?'inherit':'hidden';
					me._map_pin_normal.style.opacity=1;
				}
			}
		}
		me._map_pin_normal.onmouseover=function (e) {
			me.elementMouseOver['map_pin_normal']=true;
			me._map_pin_normal.logicBlock_scaling();
		}
		me._map_pin_normal.onmouseout=function (e) {
			me.elementMouseOver['map_pin_normal']=false;
			me._map_pin_normal.logicBlock_scaling();
		}
		me._map_pin_normal.ontouchend=function (e) {
			me.elementMouseOver['map_pin_normal']=false;
			me._map_pin_normal.logicBlock_scaling();
		}
		me._map_pin_normal.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me._map_pin.appendChild(me._map_pin_normal);
		el=me._map_pin_tt=document.createElement('div');
		els=me._map_pin_tt__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="map_pin_tt";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 20px;';
		hs+='left : -36px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : 48px;';
		hs+='visibility : hidden;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='background: #ffffff;';
		hs+='border: 0px solid #000000;';
		hs+='border-radius: 10px;';
		hs+=cssPrefix + 'border-radius: 10px;';
		hs+='color: #000000;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 2px 5px 2px 5px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._map_pin_tt.ggUpdateText=function() {
			var hs=me.ggUserdata.title;
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._map_pin_tt.ggUpdateText();
		el.appendChild(els);
		me._map_pin_tt.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._map_pin_tt.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				(me.elementMouseOver['map_pin'] == true) && 
				(me.ggUserdata.title != "")
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._map_pin_tt.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._map_pin_tt.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._map_pin_tt.style[domTransition]='opacity 500ms ease 0ms, visibility 500ms ease 0ms';
				if (me._map_pin_tt.ggCurrentLogicStateAlpha == 0) {
					me._map_pin_tt.style.visibility=me._map_pin_tt.ggVisible?'inherit':'hidden';
					me._map_pin_tt.style.opacity=1;
				}
				else {
					me._map_pin_tt.style.visibility="hidden";
					me._map_pin_tt.style.opacity=0;
				}
			}
		}
		me._map_pin_tt.ggUpdatePosition=function (useTransition) {
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((98-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me._map_pin.appendChild(me._map_pin_tt);
		me.divSkin.appendChild(me._map_pin);
		el=me._button_fullscreen=document.createElement('div');
		el.ggId="button_fullscreen";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : 23px;';
		hs+='height : 32px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._button_fullscreen.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._button_fullscreen.onclick=function (e) {
			player.toggleFullscreen();
		}
		me._button_fullscreen.onmouseover=function (e) {
			me.elementMouseOver['button_fullscreen']=true;
			me._tt_fullscreen.logicBlock_visible();
		}
		me._button_fullscreen.onmouseout=function (e) {
			me.elementMouseOver['button_fullscreen']=false;
			me._tt_fullscreen.logicBlock_visible();
		}
		me._button_fullscreen.ontouchend=function (e) {
			me.elementMouseOver['button_fullscreen']=false;
			me._tt_fullscreen.logicBlock_visible();
		}
		me._button_fullscreen.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		el=me._button_image_normalscreen=document.createElement('div');
		els=me._button_image_normalscreen__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHYXJkZW4gR25vbWUgU29mdHdhcmUgLSBTa2luIEJ1dHRvbnMgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xIEJhc2ljLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLWJhc2ljLmR0ZCI+CjxzdmcgdmVyc2lvbj0iMS4xIiBiYXNlUHJvZmlsZT0iYmFzaWMiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIgoJCQl4PSIwcHgiIH'+
			'k9IjBweCIgd2lkdGg9IjMycHgiIGhlaWdodD0iMzJweCIgdmlld0JveD0iMCAwIDMyIDMyIiB4bWw6c3BhY2U9InByZXNlcnZlIj4KCTxnIG9wYWNpdHk9IjAuNCIgc3Ryb2tlPSIjM0MzQzNDIiBzdHJva2Utd2lkdGg9IjEuNSI+Cgk8cGF0aCBkPSJNMTYsMTQuODA0SDQuNjk3Yy0wLjMxNSwwLTAuNjI0LDAuMTI4LTAuODQ2LDAuMzUxQzMuNjI3LDE1LjM3NywzLjUsMTUuNjg2LDMuNSwxNnY4LjEyDQoJCWMwLDAuMzE1LDAuMTI3LDAuNjI0LDAuMzUsMC44NDZjMC4yMjMsMC4yMjQsMC41MzEsMC4zNTEsMC44NDYsMC4zNTFIMTZjMC4zMiwwLDAuNjItMC4xMjQsMC44NDYtMC4zNTENCgkJYzAu'+
			'MjI2LTAuMjI2LDAuMzUtMC41MjUsMC4zNS0wLjg0NlYxNmMwLTAuMzE0LTAuMTI4LTAuNjIzLTAuMzUtMC44NDZDMTYuNjIzLDE0LjkzMiwxNi4zMTQsMTQuODA0LDE2LDE0LjgwNHogTTE0LjgwNCwyMi45MjQNCgkJSDUuODkzdi01LjcyOGg4LjkxMVYyMi45MjR6IE00LjY5NywxMy45OThjMC42NjEsMCwxLjE5Ni0wLjUzNiwxLjE5Ni0xLjE5NnYtMC4zMDhjMC0wLjY2LTAuNTM2LTEuMTk1LTEuMTk2LTEuMTk1DQoJCWMtMC42NjEsMC0xLjE5NiwwLjUzNS0xLjE5NiwxLjE5NXYwLjMwOEMzLjUsMTMuNDYyLDQuMDM2LDEzLjk5OCw0LjY5NywxMy45OTh6IE00LjY5NywxMC40NzdjMC42NjEsMC'+
			'wxLjE5Ny0wLjUzNiwxLjE5Ny0xLjE5N2gwDQoJCVY5LjA3NmMwLjY2MSwwLDEuMTk2LTAuNTM1LDEuMTk2LTEuMTk2YzAtMC42Ni0wLjUzNi0xLjE5Ni0xLjE5Ni0xLjE5Nkg0LjY5N2MtMC4zMTUsMC0wLjYyMywwLjEyNy0wLjg0NiwwLjM1DQoJCUMzLjYyOCw3LjI1NywzLjUsNy41NjQsMy41LDcuODh2MS4zOTlDMy41LDkuOTQsNC4wMzYsMTAuNDc3LDQuNjk3LDEwLjQ3N3ogTTE5LjI4OSw5LjA3NmgwLjI0MmMwLjY2MSwwLDEuMTk2LTAuNTM2LDEuMTk2LTEuMTk2DQoJCXMtMC41MzUtMS4xOTYtMS4xOTYtMS4xOTZoLTAuMjQyYy0wLjY2MSwwLTEuMTk3LDAuNTM2LTEuMTk3LDEuMTk2UzE4'+
			'LjYyOCw5LjA3NiwxOS4yODksOS4wNzZ6IE0xNi4xMjIsNi42ODRoLTAuMjQzDQoJCWMtMC42NjEsMC0xLjE5NiwwLjUzNi0xLjE5NiwxLjE5NnMwLjUzNiwxLjE5NiwxLjE5NiwxLjE5NmgwLjI0M2MwLjY2MSwwLDEuMTk3LTAuNTM2LDEuMTk3LTEuMTk2UzE2Ljc4Miw2LjY4NCwxNi4xMjIsNi42ODR6DQoJCSBNMjIuNjk4LDkuMDc2aDAuMjQzYzAuNjYsMCwxLjE5Ni0wLjUzNiwxLjE5Ni0xLjE5NnMtMC41MzYtMS4xOTYtMS4xOTYtMS4xOTZoLTAuMjQzYy0wLjY2LDAtMS4xOTYsMC41MzYtMS4xOTYsMS4xOTYNCgkJUzIyLjAzOCw5LjA3NiwyMi42OTgsOS4wNzZ6IE05LjA2LDkuMDc2aDAuMj'+
			'QyYzAuNjYsMCwxLjE5Ni0wLjUzNiwxLjE5Ni0xLjE5NlM5Ljk2Miw2LjY4NCw5LjMwMiw2LjY4NEg5LjA2DQoJCWMtMC42NjEsMC0xLjE5NywwLjUzNi0xLjE5NywxLjE5NlM4LjM5OSw5LjA3Niw5LjA2LDkuMDc2eiBNMTIuNDY5LDkuMDc2aDAuMjQzYzAuNjYxLDAsMS4xOTYtMC41MzYsMS4xOTYtMS4xOTYNCgkJcy0wLjUzNi0xLjE5Ni0xLjE5Ni0xLjE5NmgtMC4yNDNjLTAuNjYxLDAtMS4xOTYsMC41MzYtMS4xOTYsMS4xOTZTMTEuODA4LDkuMDc2LDEyLjQ2OSw5LjA3NnogTTI3LjMwNCwxMS4xMTENCgkJYy0wLjY2MSwwLTEuMTk2LDAuNTM1LTEuMTk2LDEuMTk2djAuMzA4YzAsMC42Niww'+
			'LjUzNSwxLjE5NiwxLjE5NiwxLjE5NmMwLjY2LDAsMS4xOTYtMC41MzYsMS4xOTYtMS4xOTZ2LTAuMzA4DQoJCUMyOC41LDExLjY0NiwyNy45NjQsMTEuMTExLDI3LjMwNCwxMS4xMTF6IE0yNy4zMDQsMTQuNjVjLTAuNjYxLDAtMS4xOTYsMC41MzUtMS4xOTYsMS4xOTZ2MC4zMDhjMCwwLjY2LDAuNTM1LDEuMTk2LDEuMTk2LDEuMTk2DQoJCWMwLjY2LDAsMS4xOTYtMC41MzYsMS4xOTYtMS4xOTZ2LTAuMzA4QzI4LjUsMTUuMTg2LDI3Ljk2NCwxNC42NSwyNy4zMDQsMTQuNjV6IE0yNy4zMDQsMjEuNzI4Yy0wLjY2MSwwLTEuMTk2LDAuNTM1LTEuMTk2LDEuMTk2DQoJCWgtMC4yMzRjLTAuNjYsMC'+
			'0xLjE5NiwwLjUzNi0xLjE5NiwxLjE5NmMwLDAuNjYxLDAuNTM2LDEuMTk2LDEuMTk2LDEuMTk2aDEuNDMxYzAuMzE0LDAsMC42MjMtMC4xMjgsMC44NDYtMC4zNTENCgkJczAuMzUxLTAuNTMsMC4zNTEtMC44NDZ2LTEuMTk2QzI4LjUsMjIuMjY0LDI3Ljk2NCwyMS43MjgsMjcuMzA0LDIxLjcyOHogTTI3LjMwNCwxOC4xODljLTAuNjYxLDAtMS4xOTYsMC41MzYtMS4xOTYsMS4xOTZ2MC4zMDgNCgkJYzAsMC42NiwwLjUzNSwxLjE5NiwxLjE5NiwxLjE5NmMwLjY2LDAsMS4xOTYtMC41MzYsMS4xOTYtMS4xOTZ2LTAuMzA4QzI4LjUsMTguNzI2LDI3Ljk2NCwxOC4xODksMjcuMzA0LDE4LjE4OXog'+
			'TTI4LjE0OSw3LjAzMw0KCQljLTAuMjIzLTAuMjIyLTAuNTMxLTAuMzUtMC44NDYtMC4zNWgtMS4xOTZjLTAuNjYxLDAtMS4xOTYsMC41MzYtMS4xOTYsMS4xOTZjMCwwLjY2MSwwLjUzNSwxLjE5NiwxLjE5NiwxLjE5Ng0KCQljMCwwLjY2MSwwLjUzNSwxLjE5NiwxLjE5NiwxLjE5NmMwLjY2LDAsMS4xOTYtMC41MzUsMS4xOTYtMS4xOTZWNy44OEMyOC41LDcuNTY0LDI4LjM3Miw3LjI1NywyOC4xNDksNy4wMzN6IE0yMS44NjMsMTMuMjYxDQoJCWwwLjIyMS0wLjE0N2MwLjQyOC0wLjI4NSwwLjU0Mi0wLjg2MywwLjI1Ny0xLjI5MWMtMC4yODYtMC40MjgtMC44NjMtMC41NDItMS4yOTEtMC4yNT'+
			'ZsLTAuMjIxLDAuMTQ2DQoJCWMtMC40MjcsMC4yODYtMC41NDIsMC44NjMtMC4yNTcsMS4yOTFjMC4xOCwwLjI2OSwwLjQ3NCwwLjQxNCwwLjc3NCwwLjQxNEMyMS41MjQsMTMuNDE4LDIxLjcwNCwxMy4zNjcsMjEuODYzLDEzLjI2MXoNCgkJIE0xOS4zMjksMjIuOTI0aC0wLjI0MmMtMC42NjEsMC0xLjE5NiwwLjUzNi0xLjE5NiwxLjE5NmMwLDAuNjYxLDAuNTM1LDEuMTk2LDEuMTk2LDEuMTk2aDAuMjQyYzAuNjYxLDAsMS4xOTYtMC41MzUsMS4xOTYtMS4xOTYNCgkJQzIwLjUyNSwyMy40NiwxOS45OSwyMi45MjQsMTkuMzI5LDIyLjkyNHogTTE4LjU4NCwxNS4yNjRjMC4xNzgsMCwwLjM1Ny0w'+
			'LjA1MSwwLjUxNy0wLjE1N2wwLjIyMS0wLjE0Nw0KCQljMC40MjgtMC4yODUsMC41NDItMC44NjMsMC4yNTctMS4yOWMtMC4yODUtMC40MjgtMC44NjMtMC41NDItMS4yOTEtMC4yNTdsLTAuMjIyLDAuMTQ3Yy0wLjQyNywwLjI4Ni0wLjU0MiwwLjg2My0wLjI1NiwxLjI5MQ0KCQlDMTcuOTg5LDE1LjExOSwxOC4yODMsMTUuMjY0LDE4LjU4NCwxNS4yNjR6IE0yMi43MzksMjIuOTI0aC0wLjI0MmMtMC42NjEsMC0xLjE5NiwwLjUzNi0xLjE5NiwxLjE5Ng0KCQljMCwwLjY2MSwwLjUzNSwxLjE5NiwxLjE5NiwxLjE5NmgwLjI0MmMwLjY2LDAsMS4xOTYtMC41MzUsMS4xOTYtMS4xOTZDMjMuOTM2LD'+
			'IzLjQ2LDIzLjM5OSwyMi45MjQsMjIuNzM5LDIyLjkyNHogTTI1LjEwNCw5Ljk3Ng0KCQljLTAuMjg1LTAuNDI3LTAuODYzLTAuNTQyLTEuMjkxLTAuMjU2bC0wLjIyMSwwLjE0N2MtMC40MjgsMC4yODUtMC41NDIsMC44NjMtMC4yNTYsMS4yOWMwLjE3OSwwLjI2OSwwLjQ3NCwwLjQxNCwwLjc3NCwwLjQxNA0KCQljMC4xNzgsMCwwLjM1Ny0wLjA1MSwwLjUxNi0wLjE1NmwwLjIyMi0wLjE0OEMyNS4yNzQsMTAuOTgxLDI1LjM4OSwxMC40MDMsMjUuMTA0LDkuOTc2eiIvPg0KCTwvZz4KCTxnIGZpbGw9IiNGRkZGRkYiIHN0cm9rZT0iIzAwMDAwMCIgc3Ryb2tlLXdpZHRoPSIwLjIiPgoJPHBhdGgg'+
			'ZD0iTTE2LDE0LjgwNEg0LjY5N2MtMC4zMTUsMC0wLjYyNCwwLjEyOC0wLjg0NiwwLjM1MUMzLjYyNywxNS4zNzcsMy41LDE1LjY4NiwzLjUsMTZ2OC4xMg0KCQljMCwwLjMxNSwwLjEyNywwLjYyNCwwLjM1LDAuODQ2YzAuMjIzLDAuMjI0LDAuNTMxLDAuMzUxLDAuODQ2LDAuMzUxSDE2YzAuMzIsMCwwLjYyLTAuMTI0LDAuODQ2LTAuMzUxDQoJCWMwLjIyNi0wLjIyNiwwLjM1LTAuNTI1LDAuMzUtMC44NDZWMTZjMC0wLjMxNC0wLjEyOC0wLjYyMy0wLjM1LTAuODQ2QzE2LjYyMywxNC45MzIsMTYuMzE0LDE0LjgwNCwxNiwxNC44MDR6IE0xNC44MDQsMjIuOTI0DQoJCUg1Ljg5M3YtNS43MjhoOC'+
			'45MTFWMjIuOTI0eiBNNC42OTcsMTMuOTk4YzAuNjYxLDAsMS4xOTYtMC41MzYsMS4xOTYtMS4xOTZ2LTAuMzA4YzAtMC42Ni0wLjUzNi0xLjE5NS0xLjE5Ni0xLjE5NQ0KCQljLTAuNjYxLDAtMS4xOTYsMC41MzUtMS4xOTYsMS4xOTV2MC4zMDhDMy41LDEzLjQ2Miw0LjAzNiwxMy45OTgsNC42OTcsMTMuOTk4eiBNNC42OTcsMTAuNDc3YzAuNjYxLDAsMS4xOTctMC41MzYsMS4xOTctMS4xOTdoMA0KCQlWOS4wNzZjMC42NjEsMCwxLjE5Ni0wLjUzNSwxLjE5Ni0xLjE5NmMwLTAuNjYtMC41MzYtMS4xOTYtMS4xOTYtMS4xOTZINC42OTdjLTAuMzE1LDAtMC42MjMsMC4xMjctMC44NDYsMC4zNQ0K'+
			'CQlDMy42MjgsNy4yNTcsMy41LDcuNTY0LDMuNSw3Ljg4djEuMzk5QzMuNSw5Ljk0LDQuMDM2LDEwLjQ3Nyw0LjY5NywxMC40Nzd6IE0xOS4yODksOS4wNzZoMC4yNDJjMC42NjEsMCwxLjE5Ni0wLjUzNiwxLjE5Ni0xLjE5Ng0KCQlzLTAuNTM1LTEuMTk2LTEuMTk2LTEuMTk2aC0wLjI0MmMtMC42NjEsMC0xLjE5NywwLjUzNi0xLjE5NywxLjE5NlMxOC42MjgsOS4wNzYsMTkuMjg5LDkuMDc2eiBNMTYuMTIyLDYuNjg0aC0wLjI0Mw0KCQljLTAuNjYxLDAtMS4xOTYsMC41MzYtMS4xOTYsMS4xOTZzMC41MzYsMS4xOTYsMS4xOTYsMS4xOTZoMC4yNDNjMC42NjEsMCwxLjE5Ny0wLjUzNiwxLjE5Ny'+
			'0xLjE5NlMxNi43ODIsNi42ODQsMTYuMTIyLDYuNjg0eg0KCQkgTTIyLjY5OCw5LjA3NmgwLjI0M2MwLjY2LDAsMS4xOTYtMC41MzYsMS4xOTYtMS4xOTZzLTAuNTM2LTEuMTk2LTEuMTk2LTEuMTk2aC0wLjI0M2MtMC42NiwwLTEuMTk2LDAuNTM2LTEuMTk2LDEuMTk2DQoJCVMyMi4wMzgsOS4wNzYsMjIuNjk4LDkuMDc2eiBNOS4wNiw5LjA3NmgwLjI0MmMwLjY2LDAsMS4xOTYtMC41MzYsMS4xOTYtMS4xOTZTOS45NjIsNi42ODQsOS4zMDIsNi42ODRIOS4wNg0KCQljLTAuNjYxLDAtMS4xOTcsMC41MzYtMS4xOTcsMS4xOTZTOC4zOTksOS4wNzYsOS4wNiw5LjA3NnogTTEyLjQ2OSw5LjA3Nmgw'+
			'LjI0M2MwLjY2MSwwLDEuMTk2LTAuNTM2LDEuMTk2LTEuMTk2DQoJCXMtMC41MzYtMS4xOTYtMS4xOTYtMS4xOTZoLTAuMjQzYy0wLjY2MSwwLTEuMTk2LDAuNTM2LTEuMTk2LDEuMTk2UzExLjgwOCw5LjA3NiwxMi40NjksOS4wNzZ6IE0yNy4zMDQsMTEuMTExDQoJCWMtMC42NjEsMC0xLjE5NiwwLjUzNS0xLjE5NiwxLjE5NnYwLjMwOGMwLDAuNjYsMC41MzUsMS4xOTYsMS4xOTYsMS4xOTZjMC42NiwwLDEuMTk2LTAuNTM2LDEuMTk2LTEuMTk2di0wLjMwOA0KCQlDMjguNSwxMS42NDYsMjcuOTY0LDExLjExMSwyNy4zMDQsMTEuMTExeiBNMjcuMzA0LDE0LjY1Yy0wLjY2MSwwLTEuMTk2LDAuNT'+
			'M1LTEuMTk2LDEuMTk2djAuMzA4YzAsMC42NiwwLjUzNSwxLjE5NiwxLjE5NiwxLjE5Ng0KCQljMC42NiwwLDEuMTk2LTAuNTM2LDEuMTk2LTEuMTk2di0wLjMwOEMyOC41LDE1LjE4NiwyNy45NjQsMTQuNjUsMjcuMzA0LDE0LjY1eiBNMjcuMzA0LDIxLjcyOGMtMC42NjEsMC0xLjE5NiwwLjUzNS0xLjE5NiwxLjE5Ng0KCQloLTAuMjM0Yy0wLjY2LDAtMS4xOTYsMC41MzYtMS4xOTYsMS4xOTZjMCwwLjY2MSwwLjUzNiwxLjE5NiwxLjE5NiwxLjE5NmgxLjQzMWMwLjMxNCwwLDAuNjIzLTAuMTI4LDAuODQ2LTAuMzUxDQoJCXMwLjM1MS0wLjUzLDAuMzUxLTAuODQ2di0xLjE5NkMyOC41LDIyLjI2'+
			'NCwyNy45NjQsMjEuNzI4LDI3LjMwNCwyMS43Mjh6IE0yNy4zMDQsMTguMTg5Yy0wLjY2MSwwLTEuMTk2LDAuNTM2LTEuMTk2LDEuMTk2djAuMzA4DQoJCWMwLDAuNjYsMC41MzUsMS4xOTYsMS4xOTYsMS4xOTZjMC42NiwwLDEuMTk2LTAuNTM2LDEuMTk2LTEuMTk2di0wLjMwOEMyOC41LDE4LjcyNiwyNy45NjQsMTguMTg5LDI3LjMwNCwxOC4xODl6IE0yOC4xNDksNy4wMzMNCgkJYy0wLjIyMy0wLjIyMi0wLjUzMS0wLjM1LTAuODQ2LTAuMzVoLTEuMTk2Yy0wLjY2MSwwLTEuMTk2LDAuNTM2LTEuMTk2LDEuMTk2YzAsMC42NjEsMC41MzUsMS4xOTYsMS4xOTYsMS4xOTYNCgkJYzAsMC42NjEsMC'+
			'41MzUsMS4xOTYsMS4xOTYsMS4xOTZjMC42NiwwLDEuMTk2LTAuNTM1LDEuMTk2LTEuMTk2VjcuODhDMjguNSw3LjU2NCwyOC4zNzIsNy4yNTcsMjguMTQ5LDcuMDMzeiBNMjEuODYzLDEzLjI2MQ0KCQlsMC4yMjEtMC4xNDdjMC40MjgtMC4yODUsMC41NDItMC44NjMsMC4yNTctMS4yOTFjLTAuMjg2LTAuNDI4LTAuODYzLTAuNTQyLTEuMjkxLTAuMjU2bC0wLjIyMSwwLjE0Ng0KCQljLTAuNDI3LDAuMjg2LTAuNTQyLDAuODYzLTAuMjU3LDEuMjkxYzAuMTgsMC4yNjksMC40NzQsMC40MTQsMC43NzQsMC40MTRDMjEuNTI0LDEzLjQxOCwyMS43MDQsMTMuMzY3LDIxLjg2MywxMy4yNjF6DQoJCSBN'+
			'MTkuMzI5LDIyLjkyNGgtMC4yNDJjLTAuNjYxLDAtMS4xOTYsMC41MzYtMS4xOTYsMS4xOTZjMCwwLjY2MSwwLjUzNSwxLjE5NiwxLjE5NiwxLjE5NmgwLjI0MmMwLjY2MSwwLDEuMTk2LTAuNTM1LDEuMTk2LTEuMTk2DQoJCUMyMC41MjUsMjMuNDYsMTkuOTksMjIuOTI0LDE5LjMyOSwyMi45MjR6IE0xOC41ODQsMTUuMjY0YzAuMTc4LDAsMC4zNTctMC4wNTEsMC41MTctMC4xNTdsMC4yMjEtMC4xNDcNCgkJYzAuNDI4LTAuMjg1LDAuNTQyLTAuODYzLDAuMjU3LTEuMjljLTAuMjg1LTAuNDI4LTAuODYzLTAuNTQyLTEuMjkxLTAuMjU3bC0wLjIyMiwwLjE0N2MtMC40MjcsMC4yODYtMC41NDIsMC'+
			'44NjMtMC4yNTYsMS4yOTENCgkJQzE3Ljk4OSwxNS4xMTksMTguMjgzLDE1LjI2NCwxOC41ODQsMTUuMjY0eiBNMjIuNzM5LDIyLjkyNGgtMC4yNDJjLTAuNjYxLDAtMS4xOTYsMC41MzYtMS4xOTYsMS4xOTYNCgkJYzAsMC42NjEsMC41MzUsMS4xOTYsMS4xOTYsMS4xOTZoMC4yNDJjMC42NiwwLDEuMTk2LTAuNTM1LDEuMTk2LTEuMTk2QzIzLjkzNiwyMy40NiwyMy4zOTksMjIuOTI0LDIyLjczOSwyMi45MjR6IE0yNS4xMDQsOS45NzYNCgkJYy0wLjI4NS0wLjQyNy0wLjg2My0wLjU0Mi0xLjI5MS0wLjI1NmwtMC4yMjEsMC4xNDdjLTAuNDI4LDAuMjg1LTAuNTQyLDAuODYzLTAuMjU2LDEuMjlj'+
			'MC4xNzksMC4yNjksMC40NzQsMC40MTQsMC43NzQsMC40MTQNCgkJYzAuMTc4LDAsMC4zNTctMC4wNTEsMC41MTYtMC4xNTZsMC4yMjItMC4xNDhDMjUuMjc0LDEwLjk4MSwyNS4zODksMTAuNDAzLDI1LjEwNCw5Ljk3NnoiLz4NCgk8L2c+Cjwvc3ZnPg==';
		me._button_image_normalscreen__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;button_image_normalscreen;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._button_image_normalscreen__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHYXJkZW4gR25vbWUgU29mdHdhcmUgLSBTa2luIEJ1dHRvbnMgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xIEJhc2ljLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLWJhc2ljLmR0ZCI+CjxzdmcgdmVyc2lvbj0iMS4xIiBiYXNlUHJvZmlsZT0iYmFzaWMiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIgoJCQl4PSIwcHgiIH'+
			'k9IjBweCIgd2lkdGg9IjMycHgiIGhlaWdodD0iMzJweCIgdmlld0JveD0iMCAwIDMyIDMyIiB4bWw6c3BhY2U9InByZXNlcnZlIj4KCTxnIG9wYWNpdHk9IjAuNCIgc3Ryb2tlPSIjM0MzQzNDIiBzdHJva2Utd2lkdGg9IjEuNSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTYsMTYpIHNjYWxlKDEuMSkgdHJhbnNsYXRlKC0xNiwtMTYpIj4KCTxwYXRoIGQ9Ik0xNiwxNC44MDRINC42OTdjLTAuMzE1LDAtMC42MjQsMC4xMjgtMC44NDYsMC4zNTFDMy42MjcsMTUuMzc3LDMuNSwxNS42ODYsMy41LDE2djguMTINCgkJYzAsMC4zMTUsMC4xMjcsMC42MjQsMC4zNSwwLjg0NmMwLjIyMywwLjIyNCwwLjUz'+
			'MSwwLjM1MSwwLjg0NiwwLjM1MUgxNmMwLjMyLDAsMC42Mi0wLjEyNCwwLjg0Ni0wLjM1MQ0KCQljMC4yMjYtMC4yMjYsMC4zNS0wLjUyNSwwLjM1LTAuODQ2VjE2YzAtMC4zMTQtMC4xMjgtMC42MjMtMC4zNS0wLjg0NkMxNi42MjMsMTQuOTMyLDE2LjMxNCwxNC44MDQsMTYsMTQuODA0eiBNMTQuODA0LDIyLjkyNA0KCQlINS44OTN2LTUuNzI4aDguOTExVjIyLjkyNHogTTQuNjk3LDEzLjk5OGMwLjY2MSwwLDEuMTk2LTAuNTM2LDEuMTk2LTEuMTk2di0wLjMwOGMwLTAuNjYtMC41MzYtMS4xOTUtMS4xOTYtMS4xOTUNCgkJYy0wLjY2MSwwLTEuMTk2LDAuNTM1LTEuMTk2LDEuMTk1djAuMzA4Qz'+
			'MuNSwxMy40NjIsNC4wMzYsMTMuOTk4LDQuNjk3LDEzLjk5OHogTTQuNjk3LDEwLjQ3N2MwLjY2MSwwLDEuMTk3LTAuNTM2LDEuMTk3LTEuMTk3aDANCgkJVjkuMDc2YzAuNjYxLDAsMS4xOTYtMC41MzUsMS4xOTYtMS4xOTZjMC0wLjY2LTAuNTM2LTEuMTk2LTEuMTk2LTEuMTk2SDQuNjk3Yy0wLjMxNSwwLTAuNjIzLDAuMTI3LTAuODQ2LDAuMzUNCgkJQzMuNjI4LDcuMjU3LDMuNSw3LjU2NCwzLjUsNy44OHYxLjM5OUMzLjUsOS45NCw0LjAzNiwxMC40NzcsNC42OTcsMTAuNDc3eiBNMTkuMjg5LDkuMDc2aDAuMjQyYzAuNjYxLDAsMS4xOTYtMC41MzYsMS4xOTYtMS4xOTYNCgkJcy0wLjUzNS0x'+
			'LjE5Ni0xLjE5Ni0xLjE5NmgtMC4yNDJjLTAuNjYxLDAtMS4xOTcsMC41MzYtMS4xOTcsMS4xOTZTMTguNjI4LDkuMDc2LDE5LjI4OSw5LjA3NnogTTE2LjEyMiw2LjY4NGgtMC4yNDMNCgkJYy0wLjY2MSwwLTEuMTk2LDAuNTM2LTEuMTk2LDEuMTk2czAuNTM2LDEuMTk2LDEuMTk2LDEuMTk2aDAuMjQzYzAuNjYxLDAsMS4xOTctMC41MzYsMS4xOTctMS4xOTZTMTYuNzgyLDYuNjg0LDE2LjEyMiw2LjY4NHoNCgkJIE0yMi42OTgsOS4wNzZoMC4yNDNjMC42NiwwLDEuMTk2LTAuNTM2LDEuMTk2LTEuMTk2cy0wLjUzNi0xLjE5Ni0xLjE5Ni0xLjE5NmgtMC4yNDNjLTAuNjYsMC0xLjE5NiwwLjUzNi'+
			'0xLjE5NiwxLjE5Ng0KCQlTMjIuMDM4LDkuMDc2LDIyLjY5OCw5LjA3NnogTTkuMDYsOS4wNzZoMC4yNDJjMC42NiwwLDEuMTk2LTAuNTM2LDEuMTk2LTEuMTk2UzkuOTYyLDYuNjg0LDkuMzAyLDYuNjg0SDkuMDYNCgkJYy0wLjY2MSwwLTEuMTk3LDAuNTM2LTEuMTk3LDEuMTk2UzguMzk5LDkuMDc2LDkuMDYsOS4wNzZ6IE0xMi40NjksOS4wNzZoMC4yNDNjMC42NjEsMCwxLjE5Ni0wLjUzNiwxLjE5Ni0xLjE5Ng0KCQlzLTAuNTM2LTEuMTk2LTEuMTk2LTEuMTk2aC0wLjI0M2MtMC42NjEsMC0xLjE5NiwwLjUzNi0xLjE5NiwxLjE5NlMxMS44MDgsOS4wNzYsMTIuNDY5LDkuMDc2eiBNMjcuMzA0'+
			'LDExLjExMQ0KCQljLTAuNjYxLDAtMS4xOTYsMC41MzUtMS4xOTYsMS4xOTZ2MC4zMDhjMCwwLjY2LDAuNTM1LDEuMTk2LDEuMTk2LDEuMTk2YzAuNjYsMCwxLjE5Ni0wLjUzNiwxLjE5Ni0xLjE5NnYtMC4zMDgNCgkJQzI4LjUsMTEuNjQ2LDI3Ljk2NCwxMS4xMTEsMjcuMzA0LDExLjExMXogTTI3LjMwNCwxNC42NWMtMC42NjEsMC0xLjE5NiwwLjUzNS0xLjE5NiwxLjE5NnYwLjMwOGMwLDAuNjYsMC41MzUsMS4xOTYsMS4xOTYsMS4xOTYNCgkJYzAuNjYsMCwxLjE5Ni0wLjUzNiwxLjE5Ni0xLjE5NnYtMC4zMDhDMjguNSwxNS4xODYsMjcuOTY0LDE0LjY1LDI3LjMwNCwxNC42NXogTTI3LjMwNC'+
			'wyMS43MjhjLTAuNjYxLDAtMS4xOTYsMC41MzUtMS4xOTYsMS4xOTYNCgkJaC0wLjIzNGMtMC42NiwwLTEuMTk2LDAuNTM2LTEuMTk2LDEuMTk2YzAsMC42NjEsMC41MzYsMS4xOTYsMS4xOTYsMS4xOTZoMS40MzFjMC4zMTQsMCwwLjYyMy0wLjEyOCwwLjg0Ni0wLjM1MQ0KCQlzMC4zNTEtMC41MywwLjM1MS0wLjg0NnYtMS4xOTZDMjguNSwyMi4yNjQsMjcuOTY0LDIxLjcyOCwyNy4zMDQsMjEuNzI4eiBNMjcuMzA0LDE4LjE4OWMtMC42NjEsMC0xLjE5NiwwLjUzNi0xLjE5NiwxLjE5NnYwLjMwOA0KCQljMCwwLjY2LDAuNTM1LDEuMTk2LDEuMTk2LDEuMTk2YzAuNjYsMCwxLjE5Ni0wLjUzNiwx'+
			'LjE5Ni0xLjE5NnYtMC4zMDhDMjguNSwxOC43MjYsMjcuOTY0LDE4LjE4OSwyNy4zMDQsMTguMTg5eiBNMjguMTQ5LDcuMDMzDQoJCWMtMC4yMjMtMC4yMjItMC41MzEtMC4zNS0wLjg0Ni0wLjM1aC0xLjE5NmMtMC42NjEsMC0xLjE5NiwwLjUzNi0xLjE5NiwxLjE5NmMwLDAuNjYxLDAuNTM1LDEuMTk2LDEuMTk2LDEuMTk2DQoJCWMwLDAuNjYxLDAuNTM1LDEuMTk2LDEuMTk2LDEuMTk2YzAuNjYsMCwxLjE5Ni0wLjUzNSwxLjE5Ni0xLjE5NlY3Ljg4QzI4LjUsNy41NjQsMjguMzcyLDcuMjU3LDI4LjE0OSw3LjAzM3ogTTIxLjg2MywxMy4yNjENCgkJbDAuMjIxLTAuMTQ3YzAuNDI4LTAuMjg1LD'+
			'AuNTQyLTAuODYzLDAuMjU3LTEuMjkxYy0wLjI4Ni0wLjQyOC0wLjg2My0wLjU0Mi0xLjI5MS0wLjI1NmwtMC4yMjEsMC4xNDYNCgkJYy0wLjQyNywwLjI4Ni0wLjU0MiwwLjg2My0wLjI1NywxLjI5MWMwLjE4LDAuMjY5LDAuNDc0LDAuNDE0LDAuNzc0LDAuNDE0QzIxLjUyNCwxMy40MTgsMjEuNzA0LDEzLjM2NywyMS44NjMsMTMuMjYxeg0KCQkgTTE5LjMyOSwyMi45MjRoLTAuMjQyYy0wLjY2MSwwLTEuMTk2LDAuNTM2LTEuMTk2LDEuMTk2YzAsMC42NjEsMC41MzUsMS4xOTYsMS4xOTYsMS4xOTZoMC4yNDJjMC42NjEsMCwxLjE5Ni0wLjUzNSwxLjE5Ni0xLjE5Ng0KCQlDMjAuNTI1LDIzLjQ2'+
			'LDE5Ljk5LDIyLjkyNCwxOS4zMjksMjIuOTI0eiBNMTguNTg0LDE1LjI2NGMwLjE3OCwwLDAuMzU3LTAuMDUxLDAuNTE3LTAuMTU3bDAuMjIxLTAuMTQ3DQoJCWMwLjQyOC0wLjI4NSwwLjU0Mi0wLjg2MywwLjI1Ny0xLjI5Yy0wLjI4NS0wLjQyOC0wLjg2My0wLjU0Mi0xLjI5MS0wLjI1N2wtMC4yMjIsMC4xNDdjLTAuNDI3LDAuMjg2LTAuNTQyLDAuODYzLTAuMjU2LDEuMjkxDQoJCUMxNy45ODksMTUuMTE5LDE4LjI4MywxNS4yNjQsMTguNTg0LDE1LjI2NHogTTIyLjczOSwyMi45MjRoLTAuMjQyYy0wLjY2MSwwLTEuMTk2LDAuNTM2LTEuMTk2LDEuMTk2DQoJCWMwLDAuNjYxLDAuNTM1LDEuMT'+
			'k2LDEuMTk2LDEuMTk2aDAuMjQyYzAuNjYsMCwxLjE5Ni0wLjUzNSwxLjE5Ni0xLjE5NkMyMy45MzYsMjMuNDYsMjMuMzk5LDIyLjkyNCwyMi43MzksMjIuOTI0eiBNMjUuMTA0LDkuOTc2DQoJCWMtMC4yODUtMC40MjctMC44NjMtMC41NDItMS4yOTEtMC4yNTZsLTAuMjIxLDAuMTQ3Yy0wLjQyOCwwLjI4NS0wLjU0MiwwLjg2My0wLjI1NiwxLjI5YzAuMTc5LDAuMjY5LDAuNDc0LDAuNDE0LDAuNzc0LDAuNDE0DQoJCWMwLjE3OCwwLDAuMzU3LTAuMDUxLDAuNTE2LTAuMTU2bDAuMjIyLTAuMTQ4QzI1LjI3NCwxMC45ODEsMjUuMzg5LDEwLjQwMywyNS4xMDQsOS45NzZ6Ii8+DQoJPC9nPgoJPGcg'+
			'ZmlsbD0iI0ZGRkZGRiIgc3Ryb2tlPSIjMDAwMDAwIiBzdHJva2Utd2lkdGg9IjAuMiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTYsMTYpIHNjYWxlKDEuMSkgdHJhbnNsYXRlKC0xNiwtMTYpIj4KCTxwYXRoIGQ9Ik0xNiwxNC44MDRINC42OTdjLTAuMzE1LDAtMC42MjQsMC4xMjgtMC44NDYsMC4zNTFDMy42MjcsMTUuMzc3LDMuNSwxNS42ODYsMy41LDE2djguMTINCgkJYzAsMC4zMTUsMC4xMjcsMC42MjQsMC4zNSwwLjg0NmMwLjIyMywwLjIyNCwwLjUzMSwwLjM1MSwwLjg0NiwwLjM1MUgxNmMwLjMyLDAsMC42Mi0wLjEyNCwwLjg0Ni0wLjM1MQ0KCQljMC4yMjYtMC4yMjYsMC4zNS0wLjUyNS'+
			'wwLjM1LTAuODQ2VjE2YzAtMC4zMTQtMC4xMjgtMC42MjMtMC4zNS0wLjg0NkMxNi42MjMsMTQuOTMyLDE2LjMxNCwxNC44MDQsMTYsMTQuODA0eiBNMTQuODA0LDIyLjkyNA0KCQlINS44OTN2LTUuNzI4aDguOTExVjIyLjkyNHogTTQuNjk3LDEzLjk5OGMwLjY2MSwwLDEuMTk2LTAuNTM2LDEuMTk2LTEuMTk2di0wLjMwOGMwLTAuNjYtMC41MzYtMS4xOTUtMS4xOTYtMS4xOTUNCgkJYy0wLjY2MSwwLTEuMTk2LDAuNTM1LTEuMTk2LDEuMTk1djAuMzA4QzMuNSwxMy40NjIsNC4wMzYsMTMuOTk4LDQuNjk3LDEzLjk5OHogTTQuNjk3LDEwLjQ3N2MwLjY2MSwwLDEuMTk3LTAuNTM2LDEuMTk3LTEu'+
			'MTk3aDANCgkJVjkuMDc2YzAuNjYxLDAsMS4xOTYtMC41MzUsMS4xOTYtMS4xOTZjMC0wLjY2LTAuNTM2LTEuMTk2LTEuMTk2LTEuMTk2SDQuNjk3Yy0wLjMxNSwwLTAuNjIzLDAuMTI3LTAuODQ2LDAuMzUNCgkJQzMuNjI4LDcuMjU3LDMuNSw3LjU2NCwzLjUsNy44OHYxLjM5OUMzLjUsOS45NCw0LjAzNiwxMC40NzcsNC42OTcsMTAuNDc3eiBNMTkuMjg5LDkuMDc2aDAuMjQyYzAuNjYxLDAsMS4xOTYtMC41MzYsMS4xOTYtMS4xOTYNCgkJcy0wLjUzNS0xLjE5Ni0xLjE5Ni0xLjE5NmgtMC4yNDJjLTAuNjYxLDAtMS4xOTcsMC41MzYtMS4xOTcsMS4xOTZTMTguNjI4LDkuMDc2LDE5LjI4OSw5Lj'+
			'A3NnogTTE2LjEyMiw2LjY4NGgtMC4yNDMNCgkJYy0wLjY2MSwwLTEuMTk2LDAuNTM2LTEuMTk2LDEuMTk2czAuNTM2LDEuMTk2LDEuMTk2LDEuMTk2aDAuMjQzYzAuNjYxLDAsMS4xOTctMC41MzYsMS4xOTctMS4xOTZTMTYuNzgyLDYuNjg0LDE2LjEyMiw2LjY4NHoNCgkJIE0yMi42OTgsOS4wNzZoMC4yNDNjMC42NiwwLDEuMTk2LTAuNTM2LDEuMTk2LTEuMTk2cy0wLjUzNi0xLjE5Ni0xLjE5Ni0xLjE5NmgtMC4yNDNjLTAuNjYsMC0xLjE5NiwwLjUzNi0xLjE5NiwxLjE5Ng0KCQlTMjIuMDM4LDkuMDc2LDIyLjY5OCw5LjA3NnogTTkuMDYsOS4wNzZoMC4yNDJjMC42NiwwLDEuMTk2LTAuNTM2'+
			'LDEuMTk2LTEuMTk2UzkuOTYyLDYuNjg0LDkuMzAyLDYuNjg0SDkuMDYNCgkJYy0wLjY2MSwwLTEuMTk3LDAuNTM2LTEuMTk3LDEuMTk2UzguMzk5LDkuMDc2LDkuMDYsOS4wNzZ6IE0xMi40NjksOS4wNzZoMC4yNDNjMC42NjEsMCwxLjE5Ni0wLjUzNiwxLjE5Ni0xLjE5Ng0KCQlzLTAuNTM2LTEuMTk2LTEuMTk2LTEuMTk2aC0wLjI0M2MtMC42NjEsMC0xLjE5NiwwLjUzNi0xLjE5NiwxLjE5NlMxMS44MDgsOS4wNzYsMTIuNDY5LDkuMDc2eiBNMjcuMzA0LDExLjExMQ0KCQljLTAuNjYxLDAtMS4xOTYsMC41MzUtMS4xOTYsMS4xOTZ2MC4zMDhjMCwwLjY2LDAuNTM1LDEuMTk2LDEuMTk2LDEuMT'+
			'k2YzAuNjYsMCwxLjE5Ni0wLjUzNiwxLjE5Ni0xLjE5NnYtMC4zMDgNCgkJQzI4LjUsMTEuNjQ2LDI3Ljk2NCwxMS4xMTEsMjcuMzA0LDExLjExMXogTTI3LjMwNCwxNC42NWMtMC42NjEsMC0xLjE5NiwwLjUzNS0xLjE5NiwxLjE5NnYwLjMwOGMwLDAuNjYsMC41MzUsMS4xOTYsMS4xOTYsMS4xOTYNCgkJYzAuNjYsMCwxLjE5Ni0wLjUzNiwxLjE5Ni0xLjE5NnYtMC4zMDhDMjguNSwxNS4xODYsMjcuOTY0LDE0LjY1LDI3LjMwNCwxNC42NXogTTI3LjMwNCwyMS43MjhjLTAuNjYxLDAtMS4xOTYsMC41MzUtMS4xOTYsMS4xOTYNCgkJaC0wLjIzNGMtMC42NiwwLTEuMTk2LDAuNTM2LTEuMTk2LDEu'+
			'MTk2YzAsMC42NjEsMC41MzYsMS4xOTYsMS4xOTYsMS4xOTZoMS40MzFjMC4zMTQsMCwwLjYyMy0wLjEyOCwwLjg0Ni0wLjM1MQ0KCQlzMC4zNTEtMC41MywwLjM1MS0wLjg0NnYtMS4xOTZDMjguNSwyMi4yNjQsMjcuOTY0LDIxLjcyOCwyNy4zMDQsMjEuNzI4eiBNMjcuMzA0LDE4LjE4OWMtMC42NjEsMC0xLjE5NiwwLjUzNi0xLjE5NiwxLjE5NnYwLjMwOA0KCQljMCwwLjY2LDAuNTM1LDEuMTk2LDEuMTk2LDEuMTk2YzAuNjYsMCwxLjE5Ni0wLjUzNiwxLjE5Ni0xLjE5NnYtMC4zMDhDMjguNSwxOC43MjYsMjcuOTY0LDE4LjE4OSwyNy4zMDQsMTguMTg5eiBNMjguMTQ5LDcuMDMzDQoJCWMtMC'+
			'4yMjMtMC4yMjItMC41MzEtMC4zNS0wLjg0Ni0wLjM1aC0xLjE5NmMtMC42NjEsMC0xLjE5NiwwLjUzNi0xLjE5NiwxLjE5NmMwLDAuNjYxLDAuNTM1LDEuMTk2LDEuMTk2LDEuMTk2DQoJCWMwLDAuNjYxLDAuNTM1LDEuMTk2LDEuMTk2LDEuMTk2YzAuNjYsMCwxLjE5Ni0wLjUzNSwxLjE5Ni0xLjE5NlY3Ljg4QzI4LjUsNy41NjQsMjguMzcyLDcuMjU3LDI4LjE0OSw3LjAzM3ogTTIxLjg2MywxMy4yNjENCgkJbDAuMjIxLTAuMTQ3YzAuNDI4LTAuMjg1LDAuNTQyLTAuODYzLDAuMjU3LTEuMjkxYy0wLjI4Ni0wLjQyOC0wLjg2My0wLjU0Mi0xLjI5MS0wLjI1NmwtMC4yMjEsMC4xNDYNCgkJYy0w'+
			'LjQyNywwLjI4Ni0wLjU0MiwwLjg2My0wLjI1NywxLjI5MWMwLjE4LDAuMjY5LDAuNDc0LDAuNDE0LDAuNzc0LDAuNDE0QzIxLjUyNCwxMy40MTgsMjEuNzA0LDEzLjM2NywyMS44NjMsMTMuMjYxeg0KCQkgTTE5LjMyOSwyMi45MjRoLTAuMjQyYy0wLjY2MSwwLTEuMTk2LDAuNTM2LTEuMTk2LDEuMTk2YzAsMC42NjEsMC41MzUsMS4xOTYsMS4xOTYsMS4xOTZoMC4yNDJjMC42NjEsMCwxLjE5Ni0wLjUzNSwxLjE5Ni0xLjE5Ng0KCQlDMjAuNTI1LDIzLjQ2LDE5Ljk5LDIyLjkyNCwxOS4zMjksMjIuOTI0eiBNMTguNTg0LDE1LjI2NGMwLjE3OCwwLDAuMzU3LTAuMDUxLDAuNTE3LTAuMTU3bDAuMj'+
			'IxLTAuMTQ3DQoJCWMwLjQyOC0wLjI4NSwwLjU0Mi0wLjg2MywwLjI1Ny0xLjI5Yy0wLjI4NS0wLjQyOC0wLjg2My0wLjU0Mi0xLjI5MS0wLjI1N2wtMC4yMjIsMC4xNDdjLTAuNDI3LDAuMjg2LTAuNTQyLDAuODYzLTAuMjU2LDEuMjkxDQoJCUMxNy45ODksMTUuMTE5LDE4LjI4MywxNS4yNjQsMTguNTg0LDE1LjI2NHogTTIyLjczOSwyMi45MjRoLTAuMjQyYy0wLjY2MSwwLTEuMTk2LDAuNTM2LTEuMTk2LDEuMTk2DQoJCWMwLDAuNjYxLDAuNTM1LDEuMTk2LDEuMTk2LDEuMTk2aDAuMjQyYzAuNjYsMCwxLjE5Ni0wLjUzNSwxLjE5Ni0xLjE5NkMyMy45MzYsMjMuNDYsMjMuMzk5LDIyLjkyNCwy'+
			'Mi43MzksMjIuOTI0eiBNMjUuMTA0LDkuOTc2DQoJCWMtMC4yODUtMC40MjctMC44NjMtMC41NDItMS4yOTEtMC4yNTZsLTAuMjIxLDAuMTQ3Yy0wLjQyOCwwLjI4NS0wLjU0MiwwLjg2My0wLjI1NiwxLjI5YzAuMTc5LDAuMjY5LDAuNDc0LDAuNDE0LDAuNzc0LDAuNDE0DQoJCWMwLjE3OCwwLDAuMzU3LTAuMDUxLDAuNTE2LTAuMTU2bDAuMjIyLTAuMTQ4QzI1LjI3NCwxMC45ODEsMjUuMzg5LDEwLjQwMywyNS4xMDQsOS45NzZ6Ii8+DQoJPC9nPgo8L3N2Zz4=';
		me._button_image_normalscreen__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;button_image_normalscreen;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="button_image_normalscreen";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : -69px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._button_image_normalscreen.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._button_image_normalscreen.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				(player.getIsFullscreen() == true)
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._button_image_normalscreen.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._button_image_normalscreen.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._button_image_normalscreen.style[domTransition]='';
				if (me._button_image_normalscreen.ggCurrentLogicStateVisible == 0) {
					me._button_image_normalscreen.style.visibility=(Number(me._button_image_normalscreen.style.opacity)>0||!me._button_image_normalscreen.style.opacity)?'inherit':'hidden';
					me._button_image_normalscreen.ggVisible=true;
				}
				else {
					me._button_image_normalscreen.style.visibility="hidden";
					me._button_image_normalscreen.ggVisible=false;
				}
			}
		}
		me._button_image_normalscreen.onmouseover=function (e) {
			me._button_image_normalscreen__img.style.visibility='hidden';
			me._button_image_normalscreen__imgo.style.visibility='inherit';
		}
		me._button_image_normalscreen.onmouseout=function (e) {
			me._button_image_normalscreen__img.style.visibility='inherit';
			me._button_image_normalscreen__imgo.style.visibility='hidden';
		}
		me._button_image_normalscreen.ggUpdatePosition=function (useTransition) {
		}
		me._button_fullscreen.appendChild(me._button_image_normalscreen);
		el=me._button_image_fullscreen=document.createElement('div');
		els=me._button_image_fullscreen__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHYXJkZW4gR25vbWUgU29mdHdhcmUgLSBTa2luIEJ1dHRvbnMgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xIEJhc2ljLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLWJhc2ljLmR0ZCI+CjxzdmcgdmVyc2lvbj0iMS4xIiBiYXNlUHJvZmlsZT0iYmFzaWMiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIgoJCQl4PSIwcHgiIH'+
			'k9IjBweCIgd2lkdGg9IjMycHgiIGhlaWdodD0iMzJweCIgdmlld0JveD0iMCAwIDMyIDMyIiB4bWw6c3BhY2U9InByZXNlcnZlIj4KCTxnIG9wYWNpdHk9IjAuNCIgc3Ryb2tlPSIjM0MzQzNDIiBzdHJva2Utd2lkdGg9IjEuNSI+Cgk8cGF0aCBkPSJNMjguMTQ5LDcuMDM0Yy0wLjIyMy0wLjIyMy0wLjUzMS0wLjM1MS0wLjg0Ni0wLjM1MUg0LjY5N2MtMC4zMTUsMC0wLjYyNCwwLjEyOC0wLjg0NiwwLjM1MQ0KCQlTMy41LDcuNTY1LDMuNSw3Ljg4djE2LjI0YzAsMC4zMTUsMC4xMjgsMC42MjMsMC4zNTEsMC44NDZjMC4yMjMsMC4yMjQsMC41MzEsMC4zNTEsMC44NDYsMC4zNTFoMjIuNjA3DQoJ'+
			'CWMwLjMxOSwwLDAuNjItMC4xMjQsMC44NDYtMC4zNTFjMC4yMjctMC4yMjYsMC4zNTEtMC41MjYsMC4zNTEtMC44NDZWNy44OEMyOC41LDcuNTY1LDI4LjM3Miw3LjI1NywyOC4xNDksNy4wMzR6IE01Ljg5MywyMi45MjQNCgkJVjkuMDc2aDIwLjIxNXYxMy44NDhINS44OTN6IE0xNiwxOS4yNGMtMC42NjEsMC0xLjE5NywwLjUzNS0xLjE5NywxLjE5NnYwLjQ0OGMwLDAuNjYxLDAuNTM2LDEuMTk2LDEuMTk3LDEuMTk2DQoJCWMwLjY2LDAsMS4xOTYtMC41MzUsMS4xOTYtMS4xOTZ2LTAuNDQ4QzE3LjE5NiwxOS43NzUsMTYuNjYxLDE5LjI0LDE2LDE5LjI0eiBNMTEuNjcsMTQuODA0aC0wLjM0Mg'+
			'0KCQljLTAuNjYxLDAtMS4xOTcsMC41MzUtMS4xOTcsMS4xOTZjMCwwLjY2MSwwLjUzNiwxLjE5NiwxLjE5NywxLjE5NmgwLjM0MmMwLjY2MSwwLDEuMTk2LTAuNTM1LDEuMTk2LTEuMTk2DQoJCUMxMi44NjYsMTUuMzM5LDEyLjMzMSwxNC44MDQsMTEuNjcsMTQuODA0eiBNOC4xOTUsMTQuODA0SDcuODU0Yy0wLjY2MSwwLTEuMTk3LDAuNTM1LTEuMTk3LDEuMTk2DQoJCWMwLDAuNjYxLDAuNTM2LDEuMTk2LDEuMTk3LDEuMTk2aDAuMzQxYzAuNjYsMCwxLjE5Ni0wLjUzNSwxLjE5Ni0xLjE5NkM5LjM5MiwxNS4zMzksOC44NTUsMTQuODA0LDguMTk1LDE0LjgwNHogTTE4LjI4NywxMy40MTINCgkJ'+
			'bC0wLjIyMiwwLjE0OGMtMC40MjcsMC4yODUtMC41NDEsMC44NjMtMC4yNTYsMS4yOWMwLjE4LDAuMjY5LDAuNDc0LDAuNDE0LDAuNzc0LDAuNDE0YzAuMTc4LDAsMC4zNTctMC4wNSwwLjUxNy0wLjE1Nw0KCQlsMC4yMjEtMC4xNDhjMC40MjgtMC4yODUsMC41NDItMC44NjMsMC4yNTctMS4yOUMxOS4yOTMsMTMuMjQyLDE4LjcxNSwxMy4xMjYsMTguMjg3LDEzLjQxMnogTTIzLjgxMyw5LjcybC0wLjIyMiwwLjE0Nw0KCQljLTAuNDI3LDAuMjg2LTAuNTQyLDAuODY0LTAuMjU2LDEuMjkxYzAuMTc5LDAuMjY5LDAuNDc0LDAuNDE0LDAuNzc0LDAuNDE0YzAuMTc4LDAsMC4zNTctMC4wNSwwLjUxNy'+
			'0wLjE1N2wwLjIyMS0wLjE0OA0KCQljMC40MjctMC4yODUsMC41NDItMC44NjMsMC4yNTYtMS4yOTFDMjQuODE4LDkuNTQ5LDI0LjI0MSw5LjQzNCwyMy44MTMsOS43MnogTTE2LDE0LjgwNGgtMS4xOTZjLTAuNjYxLDAtMS4xOTYsMC41MzYtMS4xOTYsMS4xOTYNCgkJYzAsMC42NiwwLjUzNSwxLjE5NiwxLjE5NiwxLjE5NmMwLDAuNjYxLDAuNTM1LDEuMTk2LDEuMTk2LDEuMTk2YzAuNjYsMCwxLjE5Ni0wLjUzNSwxLjE5Ni0xLjE5NlYxNg0KCQljMC0wLjMxNS0wLjEyOC0wLjYyMy0wLjM1LTAuODQ2QzE2LjYyMywxNC45MzEsMTYuMzE0LDE0LjgwNCwxNiwxNC44MDR6IE0yMS4wNSwxMS41NjVs'+
			'LTAuMjIxLDAuMTQ4DQoJCWMtMC40MjcsMC4yODYtMC41NDIsMC44NjMtMC4yNTcsMS4yOTFjMC4xOCwwLjI2OCwwLjQ3NSwwLjQxMywwLjc3NCwwLjQxM2MwLjE3OCwwLDAuMzU3LTAuMDUxLDAuNTE3LTAuMTU3bDAuMjIxLTAuMTQ4DQoJCWMwLjQyOC0wLjI4NiwwLjU0Mi0wLjg2MywwLjI1Ny0xLjI5MVMyMS40NzgsMTEuMjgsMjEuMDUsMTEuNTY1eiIvPg0KCTwvZz4KCTxnIGZpbGw9IiNGRkZGRkYiIHN0cm9rZT0iIzAwMDAwMCIgc3Ryb2tlLXdpZHRoPSIwLjIiPgoJPHBhdGggZD0iTTI4LjE0OSw3LjAzNGMtMC4yMjMtMC4yMjMtMC41MzEtMC4zNTEtMC44NDYtMC4zNTFINC42OTdjLTAuMz'+
			'E1LDAtMC42MjQsMC4xMjgtMC44NDYsMC4zNTENCgkJUzMuNSw3LjU2NSwzLjUsNy44OHYxNi4yNGMwLDAuMzE1LDAuMTI4LDAuNjIzLDAuMzUxLDAuODQ2YzAuMjIzLDAuMjI0LDAuNTMxLDAuMzUxLDAuODQ2LDAuMzUxaDIyLjYwNw0KCQljMC4zMTksMCwwLjYyLTAuMTI0LDAuODQ2LTAuMzUxYzAuMjI3LTAuMjI2LDAuMzUxLTAuNTI2LDAuMzUxLTAuODQ2VjcuODhDMjguNSw3LjU2NSwyOC4zNzIsNy4yNTcsMjguMTQ5LDcuMDM0eiBNNS44OTMsMjIuOTI0DQoJCVY5LjA3NmgyMC4yMTV2MTMuODQ4SDUuODkzeiBNMTYsMTkuMjRjLTAuNjYxLDAtMS4xOTcsMC41MzUtMS4xOTcsMS4xOTZ2MC40'+
			'NDhjMCwwLjY2MSwwLjUzNiwxLjE5NiwxLjE5NywxLjE5Ng0KCQljMC42NiwwLDEuMTk2LTAuNTM1LDEuMTk2LTEuMTk2di0wLjQ0OEMxNy4xOTYsMTkuNzc1LDE2LjY2MSwxOS4yNCwxNiwxOS4yNHogTTExLjY3LDE0LjgwNGgtMC4zNDINCgkJYy0wLjY2MSwwLTEuMTk3LDAuNTM1LTEuMTk3LDEuMTk2YzAsMC42NjEsMC41MzYsMS4xOTYsMS4xOTcsMS4xOTZoMC4zNDJjMC42NjEsMCwxLjE5Ni0wLjUzNSwxLjE5Ni0xLjE5Ng0KCQlDMTIuODY2LDE1LjMzOSwxMi4zMzEsMTQuODA0LDExLjY3LDE0LjgwNHogTTguMTk1LDE0LjgwNEg3Ljg1NGMtMC42NjEsMC0xLjE5NywwLjUzNS0xLjE5NywxLj'+
			'E5Ng0KCQljMCwwLjY2MSwwLjUzNiwxLjE5NiwxLjE5NywxLjE5NmgwLjM0MWMwLjY2LDAsMS4xOTYtMC41MzUsMS4xOTYtMS4xOTZDOS4zOTIsMTUuMzM5LDguODU1LDE0LjgwNCw4LjE5NSwxNC44MDR6IE0xOC4yODcsMTMuNDEyDQoJCWwtMC4yMjIsMC4xNDhjLTAuNDI3LDAuMjg1LTAuNTQxLDAuODYzLTAuMjU2LDEuMjljMC4xOCwwLjI2OSwwLjQ3NCwwLjQxNCwwLjc3NCwwLjQxNGMwLjE3OCwwLDAuMzU3LTAuMDUsMC41MTctMC4xNTcNCgkJbDAuMjIxLTAuMTQ4YzAuNDI4LTAuMjg1LDAuNTQyLTAuODYzLDAuMjU3LTEuMjlDMTkuMjkzLDEzLjI0MiwxOC43MTUsMTMuMTI2LDE4LjI4Nywx'+
			'My40MTJ6IE0yMy44MTMsOS43MmwtMC4yMjIsMC4xNDcNCgkJYy0wLjQyNywwLjI4Ni0wLjU0MiwwLjg2NC0wLjI1NiwxLjI5MWMwLjE3OSwwLjI2OSwwLjQ3NCwwLjQxNCwwLjc3NCwwLjQxNGMwLjE3OCwwLDAuMzU3LTAuMDUsMC41MTctMC4xNTdsMC4yMjEtMC4xNDgNCgkJYzAuNDI3LTAuMjg1LDAuNTQyLTAuODYzLDAuMjU2LTEuMjkxQzI0LjgxOCw5LjU0OSwyNC4yNDEsOS40MzQsMjMuODEzLDkuNzJ6IE0xNiwxNC44MDRoLTEuMTk2Yy0wLjY2MSwwLTEuMTk2LDAuNTM2LTEuMTk2LDEuMTk2DQoJCWMwLDAuNjYsMC41MzUsMS4xOTYsMS4xOTYsMS4xOTZjMCwwLjY2MSwwLjUzNSwxLjE5Ni'+
			'wxLjE5NiwxLjE5NmMwLjY2LDAsMS4xOTYtMC41MzUsMS4xOTYtMS4xOTZWMTYNCgkJYzAtMC4zMTUtMC4xMjgtMC42MjMtMC4zNS0wLjg0NkMxNi42MjMsMTQuOTMxLDE2LjMxNCwxNC44MDQsMTYsMTQuODA0eiBNMjEuMDUsMTEuNTY1bC0wLjIyMSwwLjE0OA0KCQljLTAuNDI3LDAuMjg2LTAuNTQyLDAuODYzLTAuMjU3LDEuMjkxYzAuMTgsMC4yNjgsMC40NzUsMC40MTMsMC43NzQsMC40MTNjMC4xNzgsMCwwLjM1Ny0wLjA1MSwwLjUxNy0wLjE1N2wwLjIyMS0wLjE0OA0KCQljMC40MjgtMC4yODYsMC41NDItMC44NjMsMC4yNTctMS4yOTFTMjEuNDc4LDExLjI4LDIxLjA1LDExLjU2NXoiLz4N'+
			'Cgk8L2c+Cjwvc3ZnPg==';
		me._button_image_fullscreen__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;button_image_fullscreen;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._button_image_fullscreen__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHYXJkZW4gR25vbWUgU29mdHdhcmUgLSBTa2luIEJ1dHRvbnMgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xIEJhc2ljLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLWJhc2ljLmR0ZCI+CjxzdmcgdmVyc2lvbj0iMS4xIiBiYXNlUHJvZmlsZT0iYmFzaWMiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIgoJCQl4PSIwcHgiIH'+
			'k9IjBweCIgd2lkdGg9IjMycHgiIGhlaWdodD0iMzJweCIgdmlld0JveD0iMCAwIDMyIDMyIiB4bWw6c3BhY2U9InByZXNlcnZlIj4KCTxnIG9wYWNpdHk9IjAuNCIgc3Ryb2tlPSIjM0MzQzNDIiBzdHJva2Utd2lkdGg9IjEuNSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTYsMTYpIHNjYWxlKDEuMSkgdHJhbnNsYXRlKC0xNiwtMTYpIj4KCTxwYXRoIGQ9Ik0yOC4xNDksNy4wMzRjLTAuMjIzLTAuMjIzLTAuNTMxLTAuMzUxLTAuODQ2LTAuMzUxSDQuNjk3Yy0wLjMxNSwwLTAuNjI0LDAuMTI4LTAuODQ2LDAuMzUxDQoJCVMzLjUsNy41NjUsMy41LDcuODh2MTYuMjRjMCwwLjMxNSwwLjEyOCwwLjYy'+
			'MywwLjM1MSwwLjg0NmMwLjIyMywwLjIyNCwwLjUzMSwwLjM1MSwwLjg0NiwwLjM1MWgyMi42MDcNCgkJYzAuMzE5LDAsMC42Mi0wLjEyNCwwLjg0Ni0wLjM1MWMwLjIyNy0wLjIyNiwwLjM1MS0wLjUyNiwwLjM1MS0wLjg0NlY3Ljg4QzI4LjUsNy41NjUsMjguMzcyLDcuMjU3LDI4LjE0OSw3LjAzNHogTTUuODkzLDIyLjkyNA0KCQlWOS4wNzZoMjAuMjE1djEzLjg0OEg1Ljg5M3ogTTE2LDE5LjI0Yy0wLjY2MSwwLTEuMTk3LDAuNTM1LTEuMTk3LDEuMTk2djAuNDQ4YzAsMC42NjEsMC41MzYsMS4xOTYsMS4xOTcsMS4xOTYNCgkJYzAuNjYsMCwxLjE5Ni0wLjUzNSwxLjE5Ni0xLjE5NnYtMC40ND'+
			'hDMTcuMTk2LDE5Ljc3NSwxNi42NjEsMTkuMjQsMTYsMTkuMjR6IE0xMS42NywxNC44MDRoLTAuMzQyDQoJCWMtMC42NjEsMC0xLjE5NywwLjUzNS0xLjE5NywxLjE5NmMwLDAuNjYxLDAuNTM2LDEuMTk2LDEuMTk3LDEuMTk2aDAuMzQyYzAuNjYxLDAsMS4xOTYtMC41MzUsMS4xOTYtMS4xOTYNCgkJQzEyLjg2NiwxNS4zMzksMTIuMzMxLDE0LjgwNCwxMS42NywxNC44MDR6IE04LjE5NSwxNC44MDRINy44NTRjLTAuNjYxLDAtMS4xOTcsMC41MzUtMS4xOTcsMS4xOTYNCgkJYzAsMC42NjEsMC41MzYsMS4xOTYsMS4xOTcsMS4xOTZoMC4zNDFjMC42NiwwLDEuMTk2LTAuNTM1LDEuMTk2LTEuMTk2'+
			'QzkuMzkyLDE1LjMzOSw4Ljg1NSwxNC44MDQsOC4xOTUsMTQuODA0eiBNMTguMjg3LDEzLjQxMg0KCQlsLTAuMjIyLDAuMTQ4Yy0wLjQyNywwLjI4NS0wLjU0MSwwLjg2My0wLjI1NiwxLjI5YzAuMTgsMC4yNjksMC40NzQsMC40MTQsMC43NzQsMC40MTRjMC4xNzgsMCwwLjM1Ny0wLjA1LDAuNTE3LTAuMTU3DQoJCWwwLjIyMS0wLjE0OGMwLjQyOC0wLjI4NSwwLjU0Mi0wLjg2MywwLjI1Ny0xLjI5QzE5LjI5MywxMy4yNDIsMTguNzE1LDEzLjEyNiwxOC4yODcsMTMuNDEyeiBNMjMuODEzLDkuNzJsLTAuMjIyLDAuMTQ3DQoJCWMtMC40MjcsMC4yODYtMC41NDIsMC44NjQtMC4yNTYsMS4yOTFjMC'+
			'4xNzksMC4yNjksMC40NzQsMC40MTQsMC43NzQsMC40MTRjMC4xNzgsMCwwLjM1Ny0wLjA1LDAuNTE3LTAuMTU3bDAuMjIxLTAuMTQ4DQoJCWMwLjQyNy0wLjI4NSwwLjU0Mi0wLjg2MywwLjI1Ni0xLjI5MUMyNC44MTgsOS41NDksMjQuMjQxLDkuNDM0LDIzLjgxMyw5LjcyeiBNMTYsMTQuODA0aC0xLjE5NmMtMC42NjEsMC0xLjE5NiwwLjUzNi0xLjE5NiwxLjE5Ng0KCQljMCwwLjY2LDAuNTM1LDEuMTk2LDEuMTk2LDEuMTk2YzAsMC42NjEsMC41MzUsMS4xOTYsMS4xOTYsMS4xOTZjMC42NiwwLDEuMTk2LTAuNTM1LDEuMTk2LTEuMTk2VjE2DQoJCWMwLTAuMzE1LTAuMTI4LTAuNjIzLTAuMzUt'+
			'MC44NDZDMTYuNjIzLDE0LjkzMSwxNi4zMTQsMTQuODA0LDE2LDE0LjgwNHogTTIxLjA1LDExLjU2NWwtMC4yMjEsMC4xNDgNCgkJYy0wLjQyNywwLjI4Ni0wLjU0MiwwLjg2My0wLjI1NywxLjI5MWMwLjE4LDAuMjY4LDAuNDc1LDAuNDEzLDAuNzc0LDAuNDEzYzAuMTc4LDAsMC4zNTctMC4wNTEsMC41MTctMC4xNTdsMC4yMjEtMC4xNDgNCgkJYzAuNDI4LTAuMjg2LDAuNTQyLTAuODYzLDAuMjU3LTEuMjkxUzIxLjQ3OCwxMS4yOCwyMS4wNSwxMS41NjV6Ii8+DQoJPC9nPgoJPGcgZmlsbD0iI0ZGRkZGRiIgc3Ryb2tlPSIjMDAwMDAwIiBzdHJva2Utd2lkdGg9IjAuMiIgdHJhbnNmb3JtPSJ0cm'+
			'Fuc2xhdGUoMTYsMTYpIHNjYWxlKDEuMSkgdHJhbnNsYXRlKC0xNiwtMTYpIj4KCTxwYXRoIGQ9Ik0yOC4xNDksNy4wMzRjLTAuMjIzLTAuMjIzLTAuNTMxLTAuMzUxLTAuODQ2LTAuMzUxSDQuNjk3Yy0wLjMxNSwwLTAuNjI0LDAuMTI4LTAuODQ2LDAuMzUxDQoJCVMzLjUsNy41NjUsMy41LDcuODh2MTYuMjRjMCwwLjMxNSwwLjEyOCwwLjYyMywwLjM1MSwwLjg0NmMwLjIyMywwLjIyNCwwLjUzMSwwLjM1MSwwLjg0NiwwLjM1MWgyMi42MDcNCgkJYzAuMzE5LDAsMC42Mi0wLjEyNCwwLjg0Ni0wLjM1MWMwLjIyNy0wLjIyNiwwLjM1MS0wLjUyNiwwLjM1MS0wLjg0NlY3Ljg4QzI4LjUsNy41NjUs'+
			'MjguMzcyLDcuMjU3LDI4LjE0OSw3LjAzNHogTTUuODkzLDIyLjkyNA0KCQlWOS4wNzZoMjAuMjE1djEzLjg0OEg1Ljg5M3ogTTE2LDE5LjI0Yy0wLjY2MSwwLTEuMTk3LDAuNTM1LTEuMTk3LDEuMTk2djAuNDQ4YzAsMC42NjEsMC41MzYsMS4xOTYsMS4xOTcsMS4xOTYNCgkJYzAuNjYsMCwxLjE5Ni0wLjUzNSwxLjE5Ni0xLjE5NnYtMC40NDhDMTcuMTk2LDE5Ljc3NSwxNi42NjEsMTkuMjQsMTYsMTkuMjR6IE0xMS42NywxNC44MDRoLTAuMzQyDQoJCWMtMC42NjEsMC0xLjE5NywwLjUzNS0xLjE5NywxLjE5NmMwLDAuNjYxLDAuNTM2LDEuMTk2LDEuMTk3LDEuMTk2aDAuMzQyYzAuNjYxLDAsMS'+
			'4xOTYtMC41MzUsMS4xOTYtMS4xOTYNCgkJQzEyLjg2NiwxNS4zMzksMTIuMzMxLDE0LjgwNCwxMS42NywxNC44MDR6IE04LjE5NSwxNC44MDRINy44NTRjLTAuNjYxLDAtMS4xOTcsMC41MzUtMS4xOTcsMS4xOTYNCgkJYzAsMC42NjEsMC41MzYsMS4xOTYsMS4xOTcsMS4xOTZoMC4zNDFjMC42NiwwLDEuMTk2LTAuNTM1LDEuMTk2LTEuMTk2QzkuMzkyLDE1LjMzOSw4Ljg1NSwxNC44MDQsOC4xOTUsMTQuODA0eiBNMTguMjg3LDEzLjQxMg0KCQlsLTAuMjIyLDAuMTQ4Yy0wLjQyNywwLjI4NS0wLjU0MSwwLjg2My0wLjI1NiwxLjI5YzAuMTgsMC4yNjksMC40NzQsMC40MTQsMC43NzQsMC40MTRj'+
			'MC4xNzgsMCwwLjM1Ny0wLjA1LDAuNTE3LTAuMTU3DQoJCWwwLjIyMS0wLjE0OGMwLjQyOC0wLjI4NSwwLjU0Mi0wLjg2MywwLjI1Ny0xLjI5QzE5LjI5MywxMy4yNDIsMTguNzE1LDEzLjEyNiwxOC4yODcsMTMuNDEyeiBNMjMuODEzLDkuNzJsLTAuMjIyLDAuMTQ3DQoJCWMtMC40MjcsMC4yODYtMC41NDIsMC44NjQtMC4yNTYsMS4yOTFjMC4xNzksMC4yNjksMC40NzQsMC40MTQsMC43NzQsMC40MTRjMC4xNzgsMCwwLjM1Ny0wLjA1LDAuNTE3LTAuMTU3bDAuMjIxLTAuMTQ4DQoJCWMwLjQyNy0wLjI4NSwwLjU0Mi0wLjg2MywwLjI1Ni0xLjI5MUMyNC44MTgsOS41NDksMjQuMjQxLDkuNDM0LD'+
			'IzLjgxMyw5LjcyeiBNMTYsMTQuODA0aC0xLjE5NmMtMC42NjEsMC0xLjE5NiwwLjUzNi0xLjE5NiwxLjE5Ng0KCQljMCwwLjY2LDAuNTM1LDEuMTk2LDEuMTk2LDEuMTk2YzAsMC42NjEsMC41MzUsMS4xOTYsMS4xOTYsMS4xOTZjMC42NiwwLDEuMTk2LTAuNTM1LDEuMTk2LTEuMTk2VjE2DQoJCWMwLTAuMzE1LTAuMTI4LTAuNjIzLTAuMzUtMC44NDZDMTYuNjIzLDE0LjkzMSwxNi4zMTQsMTQuODA0LDE2LDE0LjgwNHogTTIxLjA1LDExLjU2NWwtMC4yMjEsMC4xNDgNCgkJYy0wLjQyNywwLjI4Ni0wLjU0MiwwLjg2My0wLjI1NywxLjI5MWMwLjE4LDAuMjY4LDAuNDc1LDAuNDEzLDAuNzc0LDAu'+
			'NDEzYzAuMTc4LDAsMC4zNTctMC4wNTEsMC41MTctMC4xNTdsMC4yMjEtMC4xNDgNCgkJYzAuNDI4LTAuMjg2LDAuNTQyLTAuODYzLDAuMjU3LTEuMjkxUzIxLjQ3OCwxMS4yOCwyMS4wNSwxMS41NjV6Ii8+DQoJPC9nPgo8L3N2Zz4=';
		me._button_image_fullscreen__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;button_image_fullscreen;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="button_image_fullscreen";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : -69px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._button_image_fullscreen.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._button_image_fullscreen.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				(player.getIsFullscreen() == true)
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._button_image_fullscreen.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._button_image_fullscreen.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._button_image_fullscreen.style[domTransition]='';
				if (me._button_image_fullscreen.ggCurrentLogicStateVisible == 0) {
					me._button_image_fullscreen.style.visibility="hidden";
					me._button_image_fullscreen.ggVisible=false;
				}
				else {
					me._button_image_fullscreen.style.visibility=(Number(me._button_image_fullscreen.style.opacity)>0||!me._button_image_fullscreen.style.opacity)?'inherit':'hidden';
					me._button_image_fullscreen.ggVisible=true;
				}
			}
		}
		me._button_image_fullscreen.onmouseover=function (e) {
			me._button_image_fullscreen__img.style.visibility='hidden';
			me._button_image_fullscreen__imgo.style.visibility='inherit';
		}
		me._button_image_fullscreen.onmouseout=function (e) {
			me._button_image_fullscreen__img.style.visibility='inherit';
			me._button_image_fullscreen__imgo.style.visibility='hidden';
		}
		me._button_image_fullscreen.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._button_fullscreen.appendChild(me._button_image_fullscreen);
		el=me._tt_fullscreen=document.createElement('div');
		els=me._tt_fullscreen__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tt_fullscreen";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 20px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : 32px;';
		hs+='visibility : hidden;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		hs+='text-shadow: 1px 1px 4px #000000;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="";
		el.appendChild(els);
		me._tt_fullscreen.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._tt_fullscreen.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				(player.getIsMobile() == true)
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._tt_fullscreen.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._tt_fullscreen.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._tt_fullscreen.style[domTransition]='left 0s, top 0s';
				if (me._tt_fullscreen.ggCurrentLogicStatePosition == 0) {
					this.ggDx = 0;
					me._tt_fullscreen.style.top='-25px';
					me._tt_fullscreen.ggUpdatePosition(true);
				}
				else {
					me._tt_fullscreen.ggDx=0;
					me._tt_fullscreen.style.top='32px';
					me._tt_fullscreen.ggUpdatePosition(true);
				}
			}
		}
		me._tt_fullscreen.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				(me.elementMouseOver['button_fullscreen'] == true)
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._tt_fullscreen.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._tt_fullscreen.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._tt_fullscreen.style[domTransition]='left 0s, top 0s';
				if (me._tt_fullscreen.ggCurrentLogicStateVisible == 0) {
					me._tt_fullscreen.style.visibility=(Number(me._tt_fullscreen.style.opacity)>0||!me._tt_fullscreen.style.opacity)?'inherit':'hidden';
					me._tt_fullscreen.ggVisible=true;
				}
				else {
					me._tt_fullscreen.style.visibility="hidden";
					me._tt_fullscreen.ggVisible=false;
				}
			}
		}
		me._tt_fullscreen.logicBlock_text = function() {
			var newLogicStateText;
			if (
				(player.getIsFullscreen() == false)
			)
			{
				newLogicStateText = 0;
			}
			else if (
				(player.getIsFullscreen() == true)
			)
			{
				newLogicStateText = 1;
			}
			else {
				newLogicStateText = -1;
			}
			if (me._tt_fullscreen.ggCurrentLogicStateText != newLogicStateText) {
				me._tt_fullscreen.ggCurrentLogicStateText = newLogicStateText;
				me._tt_fullscreen.style[domTransition]='left 0s, top 0s';
				if (me._tt_fullscreen.ggCurrentLogicStateText == 0) {
					me._tt_fullscreen.ggText="Enter Fullscreen";
					me._tt_fullscreen__text.innerHTML=me._tt_fullscreen.ggText;
					if (me._tt_fullscreen.ggUpdateText) {
					me._tt_fullscreen.ggUpdateText=function() {
						var hs="Enter Fullscreen";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._tt_fullscreen.ggUpdatePosition) me._tt_fullscreen.ggUpdatePosition();
					}
				}
				else if (me._tt_fullscreen.ggCurrentLogicStateText == 1) {
					me._tt_fullscreen.ggText="Exit Fullscreen";
					me._tt_fullscreen__text.innerHTML=me._tt_fullscreen.ggText;
					if (me._tt_fullscreen.ggUpdateText) {
					me._tt_fullscreen.ggUpdateText=function() {
						var hs="Exit Fullscreen";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._tt_fullscreen.ggUpdatePosition) me._tt_fullscreen.ggUpdatePosition();
					}
				}
				else {
					me._tt_fullscreen.ggText="";
					me._tt_fullscreen__text.innerHTML=me._tt_fullscreen.ggText;
					if (me._tt_fullscreen.ggUpdateText) {
					me._tt_fullscreen.ggUpdateText=function() {
						var hs="";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._tt_fullscreen.ggUpdatePosition) me._tt_fullscreen.ggUpdatePosition();
					}
				}
			}
		}
		me._tt_fullscreen.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((98-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me._button_fullscreen.appendChild(me._tt_fullscreen);
		me.divSkin.appendChild(me._button_fullscreen);
		el=me._menu_open=document.createElement('div');
		els=me._menu_open__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJz8+CjwhRE9DVFlQRSBzdmcgUFVCTElDICctLy9XM0MvL0RURCBTVkcgMS4xLy9FTicgJ2h0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCc+CjxzdmcgZmlsbC1vcGFjaXR5PSIxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGlkPSJMYXllcl8xIiB2aWV3Qm94PSIwIDAgMzIgMzIiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBoZWlnaHQ9IjMycHgiIHZlcnNpb249IjEuMSIgd2lkdGg9IjMycHgiIGZpbGw9IiNmZmZmZmYiIHN0eWxlPS'+
			'JlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDMyIDMyOyI+CiA8cGF0aCBkPSJNNCwxMGgyNGMxLjEwNCwwLDItMC44OTYsMi0ycy0wLjg5Ni0yLTItMkg0QzIuODk2LDYsMiw2Ljg5NiwyLDhTMi44OTYsMTAsNCwxMHogTTI4LDE0SDRjLTEuMTA0LDAtMiwwLjg5Ni0yLDIgIHMwLjg5NiwyLDIsMmgyNGMxLjEwNCwwLDItMC44OTYsMi0yUzI5LjEwNCwxNCwyOCwxNHogTTI4LDIySDRjLTEuMTA0LDAtMiwwLjg5Ni0yLDJzMC44OTYsMiwyLDJoMjRjMS4xMDQsMCwyLTAuODk2LDItMiAgUzI5LjEwNCwyMiwyOCwyMnoiLz4KPC9zdmc+Cg==';
		me._menu_open__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;menu_open;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="menu_open";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 5px;';
		hs+='position : absolute;';
		hs+='top : 5px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._menu_open.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._menu_open.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				(player.getVariableValue('category_visible') == true)
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._menu_open.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._menu_open.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._menu_open.style[domTransition]='left 500ms ease 0ms, top 500ms ease 0ms, opacity 500ms ease 0ms, visibility 500ms ease 0ms';
				if (me._menu_open.ggCurrentLogicStatePosition == 0) {
					me._menu_open.style.left='130px';
					me._menu_open.style.top='5px';
				}
				else {
					me._menu_open.style.left='5px';
					me._menu_open.style.top='5px';
				}
			}
		}
		me._menu_open.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				(me.elementMouseOver['menu_open'] == true)
			)
			{
				newLogicStateAlpha = 0;
			}
			else if (
				(player.getVariableValue('category_visible') == false)
			)
			{
				newLogicStateAlpha = 1;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._menu_open.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._menu_open.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._menu_open.style[domTransition]='left 500ms ease 0ms, top 500ms ease 0ms, opacity 500ms ease 0ms, visibility 500ms ease 0ms';
				if (me._menu_open.ggCurrentLogicStateAlpha == 0) {
					me._menu_open.style.visibility=me._menu_open.ggVisible?'inherit':'hidden';
					me._menu_open.style.opacity=1;
				}
				else if (me._menu_open.ggCurrentLogicStateAlpha == 1) {
					me._menu_open.style.visibility=me._menu_open.ggVisible?'inherit':'hidden';
					me._menu_open.style.opacity=0.6;
				}
				else {
					me._menu_open.style.visibility=me._menu_open.ggVisible?'inherit':'hidden';
					me._menu_open.style.opacity=1;
				}
			}
		}
		me._menu_open.onclick=function (e) {
			if (
				(
					(player.getVariableValue('node_visible') == false)
				)
			) {
				player.setVariableValue('category_visible', !player.getVariableValue('category_visible'));
			}
			player.setVariableValue('node_visible', false);
		}
		me._menu_open.onmouseover=function (e) {
			me.elementMouseOver['menu_open']=true;
			me._menu_open.logicBlock_alpha();
		}
		me._menu_open.onmouseout=function (e) {
			me.elementMouseOver['menu_open']=false;
			me._menu_open.logicBlock_alpha();
		}
		me._menu_open.ontouchend=function (e) {
			me.elementMouseOver['menu_open']=false;
			me._menu_open.logicBlock_alpha();
		}
		me._menu_open.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._menu_open);
		el=me._dropdown_menu=document.createElement('div');
		el.ggId="Dropdown Menu";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 142px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 190px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._dropdown_menu.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._dropdown_menu.ggUpdatePosition=function (useTransition) {
		}
		el=me._dropdown_background=document.createElement('div');
		el.ggId="Dropdown Background";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(68,68,68,0.784314);';
		hs+='border : 0px solid #ffffff;';
		hs+='cursor : default;';
		hs+='height : 119px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 23px;';
		hs+='visibility : hidden;';
		hs+='width : 190px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._dropdown_background.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._dropdown_background.ggUpdatePosition=function (useTransition) {
		}
		el=me._dropdown_scrollarea=document.createElement('div');
		els=me._dropdown_scrollarea__content=document.createElement('div');
		el.ggContent=els;
		el.appendChild(els);
		el.ggHorScrollVisible = false;
		el.ggVertScrollVisible = false;
		el.ggContentLeftOffset = 0;
		el.ggContentTopOffset = 0;
		hs ='';
		hs+='height : 23px;';
		hs+='left : 0px;';
		hs+='overflow : visible;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='width : 170px;';
		hs+="";
		els.setAttribute('style',hs);
		me._dropdown_scrollarea.ggScrollByX = function(diffX) {
			if(!me._dropdown_scrollarea.ggHorScrollVisible || diffX == 0) return;
			me._dropdown_scrollarea.ggScrollPosX = (me._dropdown_scrollarea__horScrollFg.offsetLeft + diffX);
			me._dropdown_scrollarea.ggScrollPosX = Math.max(me._dropdown_scrollarea.ggScrollPosX, 0);
			me._dropdown_scrollarea.ggScrollPosX = Math.min(me._dropdown_scrollarea.ggScrollPosX, me._dropdown_scrollarea__horScrollBg.clientWidth - me._dropdown_scrollarea__horScrollFg.clientWidth);
			me._dropdown_scrollarea__horScrollFg.style.left = me._dropdown_scrollarea.ggScrollPosX + 'px';
			me._dropdown_scrollarea__content.style.left = -(Math.round(me._dropdown_scrollarea.ggScrollPosX / me._dropdown_scrollarea.ggHPercentVisible)) + me._dropdown_scrollarea.ggContentLeftOffset + 'px';
			me._dropdown_scrollarea.ggScrollPosXPercent = (me._dropdown_scrollarea__horScrollFg.offsetLeft / me._dropdown_scrollarea__horScrollBg.clientWidth);
		}
		me._dropdown_scrollarea.ggScrollByXSmooth = function(diffX) {
			if(!me._dropdown_scrollarea.ggHorScrollVisible || diffX == 0) return;
			var scrollPerInterval = diffX / 25;
			var scrollCurrX = 0;
			var id = setInterval(function() {
				scrollCurrX += scrollPerInterval;
				me._dropdown_scrollarea.ggScrollPosX += scrollPerInterval;
				if (diffX > 0 && (scrollCurrX >= diffX || me._dropdown_scrollarea.ggScrollPosX >= me._dropdown_scrollarea__horScrollBg.clientWidth - me._dropdown_scrollarea__horScrollFg.clientWidth)) {
					me._dropdown_scrollarea.ggScrollPosX = Math.min(me._dropdown_scrollarea.ggScrollPosX, me._dropdown_scrollarea__horScrollBg.clientWidth - me._dropdown_scrollarea__horScrollFg.clientWidth);
					clearInterval(id);
				}
				if (diffX < 0 && (scrollCurrX <= diffX || me._dropdown_scrollarea.ggScrollPosX <= 0)) {
					me._dropdown_scrollarea.ggScrollPosX = Math.max(me._dropdown_scrollarea.ggScrollPosX, 0);
					clearInterval(id);
				}
			me._dropdown_scrollarea__horScrollFg.style.left = me._dropdown_scrollarea.ggScrollPosX + 'px';
			me._dropdown_scrollarea__content.style.left = -(Math.round(me._dropdown_scrollarea.ggScrollPosX / me._dropdown_scrollarea.ggHPercentVisible)) + me._dropdown_scrollarea.ggContentLeftOffset + 'px';
			me._dropdown_scrollarea.ggScrollPosXPercent = (me._dropdown_scrollarea__horScrollFg.offsetLeft / me._dropdown_scrollarea__horScrollBg.clientWidth);
			}, 10);
		}
		me._dropdown_scrollarea.ggScrollByY = function(diffY) {
			if(!me._dropdown_scrollarea.ggVertScrollVisible || diffY == 0) return;
			me._dropdown_scrollarea.ggScrollPosY = (me._dropdown_scrollarea__vertScrollFg.offsetTop + diffY);
			me._dropdown_scrollarea.ggScrollPosY = Math.max(me._dropdown_scrollarea.ggScrollPosY, 0);
			me._dropdown_scrollarea.ggScrollPosY = Math.min(me._dropdown_scrollarea.ggScrollPosY, me._dropdown_scrollarea__vertScrollBg.clientHeight - me._dropdown_scrollarea__vertScrollFg.clientHeight);
			me._dropdown_scrollarea__vertScrollFg.style.top = me._dropdown_scrollarea.ggScrollPosY + 'px';
			me._dropdown_scrollarea__content.style.top = -(Math.round(me._dropdown_scrollarea.ggScrollPosY / me._dropdown_scrollarea.ggVPercentVisible)) + me._dropdown_scrollarea.ggContentTopOffset + 'px';
			me._dropdown_scrollarea.ggScrollPosYPercent = (me._dropdown_scrollarea__vertScrollFg.offsetTop / me._dropdown_scrollarea__vertScrollBg.clientHeight);
		}
		me._dropdown_scrollarea.ggScrollByYSmooth = function(diffY) {
			if(!me._dropdown_scrollarea.ggVertScrollVisible || diffY == 0) return;
			var scrollPerInterval = diffY / 25;
			var scrollCurrY = 0;
			var id = setInterval(function() {
				scrollCurrY += scrollPerInterval;
				me._dropdown_scrollarea.ggScrollPosY += scrollPerInterval;
				if (diffY > 0 && (scrollCurrY >= diffY || me._dropdown_scrollarea.ggScrollPosY >= me._dropdown_scrollarea__vertScrollBg.clientHeight - me._dropdown_scrollarea__vertScrollFg.clientHeight)) {
					me._dropdown_scrollarea.ggScrollPosY = Math.min(me._dropdown_scrollarea.ggScrollPosY, me._dropdown_scrollarea__vertScrollBg.clientHeight - me._dropdown_scrollarea__vertScrollFg.clientHeight);
					clearInterval(id);
				}
				if (diffY < 0 && (scrollCurrY <= diffY || me._dropdown_scrollarea.ggScrollPosY <= 0)) {
					me._dropdown_scrollarea.ggScrollPosY = Math.max(me._dropdown_scrollarea.ggScrollPosY, 0);
					clearInterval(id);
				}
			me._dropdown_scrollarea__vertScrollFg.style.top = me._dropdown_scrollarea.ggScrollPosY + 'px';
			me._dropdown_scrollarea__content.style.top = -(Math.round(me._dropdown_scrollarea.ggScrollPosY / me._dropdown_scrollarea.ggVPercentVisible)) + me._dropdown_scrollarea.ggContentTopOffset + 'px';
			me._dropdown_scrollarea.ggScrollPosYPercent = (me._dropdown_scrollarea__vertScrollFg.offsetTop / me._dropdown_scrollarea__vertScrollBg.clientHeight);
			}, 10);
		}
		me._dropdown_scrollarea.ggScrollIntoView = function(posX, posY, width, height) {
			if (me._dropdown_scrollarea.ggHorScrollVisible) {
				if (posX < 0) {
					var diffX = Math.floor(posX * me._dropdown_scrollarea.ggHPercentVisible);
					me._dropdown_scrollarea.ggScrollByXSmooth(diffX);
				} else if (posX + width > me._dropdown_scrollarea.clientWidth - (me._dropdown_scrollarea.ggVertScrollVisible ? 15 : 0)) {
					var diffX = Math.ceil(((posX + width) - (me._dropdown_scrollarea.clientWidth - (me._dropdown_scrollarea.ggVertScrollVisible ? 15 : 0))) * me._dropdown_scrollarea.ggHPercentVisible);
					me._dropdown_scrollarea.ggScrollByXSmooth(diffX);
				}
			}
			if (me._dropdown_scrollarea.ggVertScrollVisible) {
				if (posY < 0) {
					var diffY = Math.floor(posY * me._dropdown_scrollarea.ggVPercentVisible);
					me._dropdown_scrollarea.ggScrollByYSmooth(diffY);
				} else if (posY + height > me._dropdown_scrollarea.clientHeight - (me._dropdown_scrollarea.ggHorScrollVisible ? 15 : 0)) {
					var diffY = Math.ceil(((posY + height) - (me._dropdown_scrollarea.clientHeight - (me._dropdown_scrollarea.ggHorScrollVisible ? 15 : 0))) * me._dropdown_scrollarea.ggVPercentVisible);
					me._dropdown_scrollarea.ggScrollByYSmooth(diffY);
				}
			}
		}
		els.ontouchstart = function(e) {
			e = e || window.event;
			var t = e.touches;
			me._dropdown_scrollarea.ggDragLastX = t[0].clientX;
			me._dropdown_scrollarea.ggDragLastY = t[0].clientY;
			me._dropdown_scrollarea__content.ontouchend = function() {
				me._dropdown_scrollarea__content.ontouchend = null;
				me._dropdown_scrollarea__content.ontouchmove = null;
			}
			me._dropdown_scrollarea__content.ontouchmove = function(e) {
				e = e || window.event;
				e.preventDefault();
			var t = e.touches;
				var diffX = t[0].clientX - me._dropdown_scrollarea.ggDragLastX;
				var diffY = t[0].clientY - me._dropdown_scrollarea.ggDragLastY;
				me._dropdown_scrollarea.ggDragLastX = t[0].clientX;
				me._dropdown_scrollarea.ggDragLastY = t[0].clientY;
				me._dropdown_scrollarea.ggScrollByX(-diffX);
				me._dropdown_scrollarea.ggScrollByY(-diffY);
			}
		}
		elVertScrollBg = me._dropdown_scrollarea__vertScrollBg = document.createElement('div');
		el.appendChild(elVertScrollBg);
		elVertScrollBg.setAttribute('style', 'position: absolute; right: 0px; top: 0px; visibility: hidden; width: 15px; height: 115px; background-color: rgba(128,128,128,0); pointer-events: auto;');
		elVertScrollBg.className='ggskin ggskin_scrollarea_vscrollbg';
		elVertScrollFg = me._dropdown_scrollarea__vertScrollFg = document.createElement('div');
		elVertScrollBg.appendChild(elVertScrollFg);
		elVertScrollFg.setAttribute('style', 'position: absolute; left: 0px; top: 0px; visibility: hidden; width: 15px; height: 115px; background-color: rgba(0,0,0,1); pointer-events: auto;');
		elVertScrollFg.className='ggskin ggskin_scrollarea_vscrollfg';
		me._dropdown_scrollarea.ggScrollPosY = 0;
		me._dropdown_scrollarea.ggScrollPosYPercent = 0.0;
		elVertScrollFg.onmousedown = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			me._dropdown_scrollarea.ggDragLastY = e.clientY;
			document.onmouseup = function() {
				document.onmouseup = null;
				document.onmousemove = null;
			}
			document.onmousemove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var diffY = e.clientY - me._dropdown_scrollarea.ggDragLastY;
				me._dropdown_scrollarea.ggDragLastY = e.clientY;
				me._dropdown_scrollarea.ggScrollByY(diffY);
			}
		}
		elVertScrollFg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			me._dropdown_scrollarea.ggDragLastY = t[0].clientY;
			document.ontouchend = function() {
				document.ontouchend = null;
				document.ontouchmove = null;
			}
			document.ontouchmove = function(e) {
				e = e || window.event;
				e.preventDefault();
			var t = e.touches;
				var diffY = t[0].clientY - me._dropdown_scrollarea.ggDragLastY;
				me._dropdown_scrollarea.ggDragLastY = t[0].clientY;
				me._dropdown_scrollarea.ggScrollByY(diffY);
			}
		}
		elVertScrollBg.onmousedown = function(e) {
			e = e || window.event;
			e.preventDefault();
			var diffY = me._dropdown_scrollarea.ggScrollHeight;
			if (e.offsetY < me._dropdown_scrollarea.ggScrollPosY) {
				diffY = diffY * -1;
			}
			me._dropdown_scrollarea.ggScrollByYSmooth(diffY);
		}
		elVertScrollBg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			var rect = me._dropdown_scrollarea__vertScrollBg.getBoundingClientRect();
			var diffY = me._dropdown_scrollarea.ggScrollHeight;
			if ((t[0].clientY - rect.top) < me._dropdown_scrollarea.ggScrollPosY) {
				diffY = diffY * -1;
			}
			me._dropdown_scrollarea.ggScrollByYSmooth(diffY);
		}
		el.addEventListener('wheel', function(e) {
			var wheelDelta = Math.sign(e.deltaY);
			me._dropdown_scrollarea.ggScrollByYSmooth(20 * wheelDelta);
		});
		elCornerBg = me._dropdown_scrollarea__cornerBg = document.createElement('div');
		el.appendChild(elCornerBg);
		elCornerBg.setAttribute('style', 'position: absolute; right: 0px; bottom: 0px; visibility: hidden; width: 15px; height: 15px; background-color: rgba(255,255,255,1);');
		elCornerBg.className='ggskin ggskin_scrollarea_scrollcorner';
		el.ggId="Dropdown Scrollarea";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_scrollarea ";
		el.ggType='scrollarea';
		hs ='';
		hs+='border : 1px solid rgba(0, 0, 0, 0);';
		hs+='cursor : pointer;';
		hs+='height : 115px;';
		hs+='left : 0px;';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 187px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._dropdown_scrollarea.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._dropdown_scrollarea.ggUpdatePosition=function (useTransition) {
			{
				this.ggContent.style.left = '0px';
				this.ggContent.style.top = '0px';
				this.ggContentLeftOffset = 0;
				this.ggContentTopOffset = 0;
				var clientWidthWithScale = this.getBoundingClientRect().width;
				var clientHeightWithScale = this.getBoundingClientRect().height;
				var domRectContent = this.ggContent.getBoundingClientRect();
				var minX = 0;
				var minY = 0;
				var maxX = 0;
				var maxY = 0;
				var stack=[];
				stack.push(this.ggContent);
				while(stack.length>0) {
					var e=stack.pop();
					if (e.getBoundingClientRect) {
						var domRectChild = e.getBoundingClientRect();
						var diffX = domRectChild.left - domRectContent.left;
						minX = Math.min(minX, diffX);
						maxX = Math.max(maxX, diffX + domRectChild.width);
						var diffY = domRectChild.top - domRectContent.top;
						minY = Math.min(minY, diffY);
						maxY = Math.max(maxY, diffY + domRectChild.height);
					}
					if (e.hasChildNodes()) {
						for(var i=0;i<e.childNodes.length;i++) {
							stack.push(e.childNodes[i]);
						}
					}
				}
				if (minX < 0) this.ggContentLeftOffset = -minX;
				if (minY < 0) this.ggContentTopOffset = -minY;
				var contentWidth = maxX - minX;
				var contentHeight = maxY - minY;
				this.ggContent.style.left = this.ggContentLeftOffset + 'px';
				this.ggContent.style.top = this.ggContentTopOffset + 'px';
				this.ggContent.style.left = this.ggContentLeftOffset + 'px';
				this.ggContent.style.marginLeft = '0px';
				this.ggContent.style.top = -(Math.round(me._dropdown_scrollarea.ggScrollPosY / me._dropdown_scrollarea.ggVPercentVisible)) + this.ggContentTopOffset + 'px';
				this.ggContent.style.marginTop = '0px';
				if ((me._dropdown_scrollarea.ggHorScrollVisible && contentHeight > this.clientHeight - 15) || (!me._dropdown_scrollarea.ggHorScrollVisible && contentHeight > this.clientHeight)) {
					me._dropdown_scrollarea__vertScrollBg.style.visibility = 'inherit';
					me._dropdown_scrollarea__vertScrollFg.style.visibility = 'inherit';
					me._dropdown_scrollarea.ggVertScrollVisible = true;
				} else {
					me._dropdown_scrollarea__vertScrollBg.style.visibility = 'hidden';
					me._dropdown_scrollarea__vertScrollFg.style.visibility = 'hidden';
					me._dropdown_scrollarea.ggVertScrollVisible = false;
				}
				if(me._dropdown_scrollarea.ggVertScrollVisible) {
					if (me._dropdown_scrollarea.ggHorScrollVisible) {
						me._dropdown_scrollarea.ggAvailableHeight = me._dropdown_scrollarea.clientHeight - 15;
						me._dropdown_scrollarea.ggAvailableHeightWithScale = me._dropdown_scrollarea.getBoundingClientRect().height - me._dropdown_scrollarea__vertScrollBg.getBoundingClientRect().width;
						me._dropdown_scrollarea__cornerBg.style.visibility = 'inherit';
					} else {
						me._dropdown_scrollarea.ggAvailableHeight = me._dropdown_scrollarea.clientHeight;
						me._dropdown_scrollarea.ggAvailableHeightWithScale = me._dropdown_scrollarea.getBoundingClientRect().height;
						me._dropdown_scrollarea__cornerBg.style.visibility = 'hidden';
					}
					me._dropdown_scrollarea__vertScrollBg.style.height = me._dropdown_scrollarea.ggAvailableHeight + 'px';
					me._dropdown_scrollarea.ggVPercentVisible = me._dropdown_scrollarea.ggAvailableHeightWithScale / contentHeight;
					if (me._dropdown_scrollarea.ggVPercentVisible > 1.0) me._dropdown_scrollarea.ggVPercentVisible = 1.0;
					me._dropdown_scrollarea.ggScrollHeight =  Math.round(me._dropdown_scrollarea__vertScrollBg.clientHeight * me._dropdown_scrollarea.ggVPercentVisible);
					me._dropdown_scrollarea__vertScrollFg.style.height = me._dropdown_scrollarea.ggScrollHeight + 'px';
					me._dropdown_scrollarea.ggScrollPosY = me._dropdown_scrollarea.ggScrollPosYPercent * me._dropdown_scrollarea.ggAvailableHeight;
					me._dropdown_scrollarea.ggScrollPosY = Math.min(me._dropdown_scrollarea.ggScrollPosY, me._dropdown_scrollarea__vertScrollBg.clientHeight - me._dropdown_scrollarea__vertScrollFg.clientHeight);
					me._dropdown_scrollarea__vertScrollFg.style.top = me._dropdown_scrollarea.ggScrollPosY + 'px';
					me._dropdown_scrollarea__content.style.top = -(Math.round(me._dropdown_scrollarea.ggScrollPosY / me._dropdown_scrollarea.ggVPercentVisible)) + this.ggContentTopOffset + 'px';
				} else {
					me._dropdown_scrollarea.ggScrollPosY = 0;
					me._dropdown_scrollarea.ggScrollPosYPercent = 0.0;
					me._dropdown_scrollarea__content.style.top = this.ggContentTopOffset + 'px';
					me._dropdown_scrollarea__cornerBg.style.visibility = 'hidden';
				}
			}
		}
		el=me._dropdown_cloner=document.createElement('div');
		el.ggNumRepeat = 1;
		el.ggWidth = 169;
		el.ggHeight = 24;
		el.ggUpdating = false;
		el.ggFilter = [];
		el.ggInstances = [];
		me._dropdown_cloner.callChildLogicBlocks_changenode = function(){
			if(me._dropdown_cloner.ggInstances) {
				var i;
				for(i = 0; i < me._dropdown_cloner.ggInstances.length; i++) {
					if (me._dropdown_cloner.ggInstances[i]._dropdown_checkmark && me._dropdown_cloner.ggInstances[i]._dropdown_checkmark.logicBlock_alpha) {
						me._dropdown_cloner.ggInstances[i]._dropdown_checkmark.logicBlock_alpha();
					}
				}
			}
		}
		me._dropdown_cloner.callChildLogicBlocks_mouseover = function(){
			if(me._dropdown_cloner.ggInstances) {
				var i;
				for(i = 0; i < me._dropdown_cloner.ggInstances.length; i++) {
					if (me._dropdown_cloner.ggInstances[i]._dropdown_menu_text && me._dropdown_cloner.ggInstances[i]._dropdown_menu_text.logicBlock_backgroundcolor) {
						me._dropdown_cloner.ggInstances[i]._dropdown_menu_text.logicBlock_backgroundcolor();
					}
				}
			}
		}
		me._dropdown_cloner.callChildLogicBlocks_active = function(){
			if(me._dropdown_cloner.ggInstances) {
				var i;
				for(i = 0; i < me._dropdown_cloner.ggInstances.length; i++) {
					if (me._dropdown_cloner.ggInstances[i]._dropdown_menu_text && me._dropdown_cloner.ggInstances[i]._dropdown_menu_text.logicBlock_backgroundcolor) {
						me._dropdown_cloner.ggInstances[i]._dropdown_menu_text.logicBlock_backgroundcolor();
					}
					if (me._dropdown_cloner.ggInstances[i]._dropdown_checkmark && me._dropdown_cloner.ggInstances[i]._dropdown_checkmark.logicBlock_alpha) {
						me._dropdown_cloner.ggInstances[i]._dropdown_checkmark.logicBlock_alpha();
					}
				}
			}
		}
		el.ggUpdate = function(filter) {
			if(me._dropdown_cloner.ggUpdating == true) return;
			me._dropdown_cloner.ggUpdating = true;
			var el=me._dropdown_cloner;
			el.ggInstances = [];
			if (typeof filter=='object') {
				el.ggFilter = filter;
			} else {
				filter = el.ggFilter;
			};
			if (me.ggTag) filter.push(me.ggTag);
			el.ggCurrentFilter = filter;
			if (el.hasChildNodes() == true) {
				while (el.firstChild) {
					el.removeChild(el.firstChild);
				}
			}
			var tourNodes = player.getNodeIds();
			var row = 0;
			var column = 0;
			var numCols = me._dropdown_cloner.ggNumRepeat;
			if (numCols < 1) numCols = 1;
			for (var i=0; i < tourNodes.length; i++) {
				var nodeId = tourNodes[i];
				var passed = true;
				if (filter.length > 0) {
					var nodeData = player.getNodeUserdata(nodeId);
					for (var j=0; j < filter.length; j++) {
						if (nodeData['tags'].indexOf(filter[j]) == -1) passed = false;
					}
				}
				if (passed) {
				var parameter={};
				parameter.top=(row * me._dropdown_cloner.ggHeight) + 'px';
				parameter.left=(column * me._dropdown_cloner.ggWidth) + 'px';
				var inst = new SkinCloner_dropdown_cloner_Class(nodeId, me, el, parameter);
				el.ggInstances.push(inst);
				el.appendChild(inst.__div);
				inst.__div.ggObj=inst;
				skin.updateSize(inst.__div);
				column++;
				if (column >= numCols) {
					column = 0;
					row++;
				}
				}
			}
			me._dropdown_cloner.callChildLogicBlocks_changenode();
			me._dropdown_cloner.callChildLogicBlocks_mouseover();
			me._dropdown_cloner.callChildLogicBlocks_active();
			me._dropdown_cloner.ggUpdating = false;
			player.triggerEvent('clonerchanged');
		}
		el.ggFilter = [];
		el.ggId="Dropdown Cloner";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_cloner ";
		el.ggType='cloner';
		hs ='';
		hs+='height : 24px;';
		hs+='left : 0px;';
		hs+='overflow : visible;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 169px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._dropdown_cloner.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._dropdown_cloner.ggUpdateConditionNodeChange=function () {
			var cnode=player.getCurrentNode();
			for(var i=0; i<me._dropdown_cloner.childNodes.length; i++) {
				var child=me._dropdown_cloner.childNodes[i];
				if (child.ggObj && child.ggObj.ggNodeId==cnode) {
			        var childOffX = child.offsetLeft;
			        var childOffY = child.offsetTop;
					var p = child.parentElement;
			        while (p != null && p!==this.divSkin) {
						if (p.ggType && p.ggType == 'scrollarea') {
							p.ggScrollIntoView(childOffX, childOffY, child.clientWidth, child.clientHeight);
						}
						childOffX += p.offsetLeft;
						childOffY += p.offsetTop;
						p = p.parentElement;
					}
				}
			}
		}
		me._dropdown_cloner.ggUpdatePosition=function (useTransition) {
			var w=player.getViewerSize().width;
			var h=player.getViewerSize().height
			if ((!me._dropdown_cloner.ggLastSize) || (me._dropdown_cloner.ggLastSize.w!=w) || (me._dropdown_cloner.ggLastSize.h!=h)) {
				me._dropdown_cloner.ggLastSize={ w:w, h:h };
				me._dropdown_cloner.ggUpdate();
			}
		}
		me._dropdown_cloner.ggNodeChange=function () {
			me._dropdown_cloner.ggUpdateConditionNodeChange();
		}
		me._dropdown_scrollarea__content.appendChild(me._dropdown_cloner);
		me._dropdown_background.appendChild(me._dropdown_scrollarea);
		me._dropdown_menu.appendChild(me._dropdown_background);
		el=me._dropdown_menu_title_background=document.createElement('div');
		el.ggId="Dropdown Menu Title Background";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #000000;';
		hs+='border : 0px solid #ffffff;';
		hs+='cursor : pointer;';
		hs+='height : 20px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 190px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._dropdown_menu_title_background.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._dropdown_menu_title_background.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				(me.elementMouseOver['dropdown_menu_title_background'] == true)
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._dropdown_menu_title_background.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._dropdown_menu_title_background.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._dropdown_menu_title_background.style[domTransition]='background-color 0s';
				if (me._dropdown_menu_title_background.ggCurrentLogicStateBackgroundColor == 0) {
					me._dropdown_menu_title_background.style.backgroundColor="rgba(68,68,68,1)";
				}
				else {
					me._dropdown_menu_title_background.style.backgroundColor="rgba(0,0,0,1)";
				}
			}
		}
		me._dropdown_menu_title_background.onclick=function (e) {
			me._dropdown_background.ggVisible = !me._dropdown_background.ggVisible;
			var flag=me._dropdown_background.ggVisible;
			me._dropdown_background.style[domTransition]='none';
			me._dropdown_background.style.visibility=((flag)&&(Number(me._dropdown_background.style.opacity)>0||!me._dropdown_background.style.opacity))?'inherit':'hidden';
			me._dropdown_open.ggVisible = !me._dropdown_open.ggVisible;
			var flag=me._dropdown_open.ggVisible;
			me._dropdown_open.style[domTransition]='none';
			me._dropdown_open.style.visibility=((flag)&&(Number(me._dropdown_open.style.opacity)>0||!me._dropdown_open.style.opacity))?'inherit':'hidden';
			me._dropdown_close.ggVisible = !me._dropdown_close.ggVisible;
			var flag=me._dropdown_close.ggVisible;
			me._dropdown_close.style[domTransition]='none';
			me._dropdown_close.style.visibility=((flag)&&(Number(me._dropdown_close.style.opacity)>0||!me._dropdown_close.style.opacity))?'inherit':'hidden';
		}
		me._dropdown_menu_title_background.onmouseover=function (e) {
			me.elementMouseOver['dropdown_menu_title_background']=true;
			me._dropdown_menu_title_background.logicBlock_backgroundcolor();
		}
		me._dropdown_menu_title_background.onmouseout=function (e) {
			me.elementMouseOver['dropdown_menu_title_background']=false;
			me._dropdown_menu_title_background.logicBlock_backgroundcolor();
		}
		me._dropdown_menu_title_background.ontouchend=function (e) {
			me.elementMouseOver['dropdown_menu_title_background']=false;
			me._dropdown_menu_title_background.logicBlock_backgroundcolor();
		}
		me._dropdown_menu_title_background.ggUpdatePosition=function (useTransition) {
		}
		el=me._dropdown_menu_title=document.createElement('div');
		els=me._dropdown_menu_title__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Dropdown Menu Title";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 20px;';
		hs+='left : 2px;';
		hs+='position : absolute;';
		hs+='top : 1px;';
		hs+='visibility : inherit;';
		hs+='width : 166px;';
		hs+='pointer-events:none;';
		hs+='font-weight: bold;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 166px;';
		hs+='height: 20px;';
		hs+='pointer-events: none;';
		hs+='border: 0px solid #000000;';
		hs+='border-radius: 5px;';
		hs+=cssPrefix + 'border-radius: 5px;';
		hs+='color: rgba(255,255,255,1);';
		hs+='font-size: 12px;';
		hs+='font-weight: bold;';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 1px 4px 1px 4px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._dropdown_menu_title.ggUpdateText=function() {
			var hs=me.ggUserdata.title;
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._dropdown_menu_title.ggUpdateText();
		el.appendChild(els);
		me._dropdown_menu_title.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._dropdown_menu_title.ggUpdatePosition=function (useTransition) {
		}
		me._dropdown_menu_title_background.appendChild(me._dropdown_menu_title);
		el=me._dropdown_open=document.createElement('div');
		els=me._dropdown_open__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE1LjAuMiwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAyMCAyMCIgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZX'+
			'JfMSIgd2lkdGg9IjIwcHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeD0iMHB4IiB2aWV3Qm94PSIwIDAgMjAgMjAiIHk9IjBweCIgaGVpZ2h0PSIyMHB4Ij4KIDxwb2x5Z29uIGZpbGwtb3BhY2l0eT0iMSIgZmlsbD0iI2ZmZmZmZiIgcG9pbnRzPSIwLDAgMTAsMjAgMjAsMCAiLz4KPC9zdmc+Cg==';
		me._dropdown_open__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;dropdown_open;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Dropdown Open";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 10px;';
		hs+='left : 175px;';
		hs+='position : absolute;';
		hs+='top : 5px;';
		hs+='visibility : inherit;';
		hs+='width : 10px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._dropdown_open.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._dropdown_open.ggUpdatePosition=function (useTransition) {
		}
		me._dropdown_menu_title_background.appendChild(me._dropdown_open);
		el=me._dropdown_close=document.createElement('div');
		els=me._dropdown_close__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE1LjAuMiwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAyMCAyMCIgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZX'+
			'JfMSIgd2lkdGg9IjIwcHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeD0iMHB4IiB2aWV3Qm94PSIwIDAgMjAgMjAiIHk9IjBweCIgaGVpZ2h0PSIyMHB4Ij4KIDxwb2x5Z29uIGZpbGwtb3BhY2l0eT0iMSIgZmlsbD0iI2ZmZmZmZiIgcG9pbnRzPSIyMCwyMCAxMCwwIDAsMjAgIi8+Cjwvc3ZnPgo=';
		me._dropdown_close__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;dropdown_close;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Dropdown Close";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 10px;';
		hs+='left : 175px;';
		hs+='position : absolute;';
		hs+='top : 5px;';
		hs+='visibility : hidden;';
		hs+='width : 10px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._dropdown_close.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._dropdown_close.ggUpdatePosition=function (useTransition) {
		}
		me._dropdown_menu_title_background.appendChild(me._dropdown_close);
		me._dropdown_menu.appendChild(me._dropdown_menu_title_background);
		me.divSkin.appendChild(me._dropdown_menu);
		el=me._image_17=document.createElement('div');
		els=me._image_17__img=document.createElement('img');
		els.className='ggskin ggskin_image_17';
		hs=basePath + 'images/image_17.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='bottom : 405px;';
		hs+='height : 75px;';
		hs+='position : absolute;';
		hs+='right : 535px;';
		hs+='visibility : inherit;';
		hs+='width : 105px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._image_17.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._image_17.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._image_17);
		el=me._image_16=document.createElement('div');
		els=me._image_16__img=document.createElement('img');
		els.className='ggskin ggskin_image_16';
		hs=basePath + 'images/image_16.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 1";
		el.ggDx=7;
		el.ggDy=-10;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 61px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 66px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._image_16.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._image_16.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me.divSkin.appendChild(me._image_16);
		el=me._image_15=document.createElement('div');
		els=me._image_15__img=document.createElement('img');
		els.className='ggskin ggskin_image_15';
		hs=basePath + 'images/image_15.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 1";
		el.ggDy=-168;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 124px;';
		hs+='position : absolute;';
		hs+='right : 474px;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 146px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._image_15.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._image_15.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me.divSkin.appendChild(me._image_15);
		el=me._image_14=document.createElement('div');
		els=me._image_14__img=document.createElement('img');
		els.className='ggskin ggskin_image_14';
		hs=basePath + 'images/image_14.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 1";
		el.ggDy=58;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 75px;';
		hs+='left : 130px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 105px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._image_14.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._image_14.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me.divSkin.appendChild(me._image_14);
		el=me._image_13=document.createElement('div');
		els=me._image_13__img=document.createElement('img');
		els.className='ggskin ggskin_image_13';
		hs=basePath + 'images/image_13.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 1";
		el.ggDx=197;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 92px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : 23px;';
		hs+='visibility : inherit;';
		hs+='width : 114px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._image_13.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._image_13.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me.divSkin.appendChild(me._image_13);
		el=me._image_12=document.createElement('div');
		els=me._image_12__img=document.createElement('img');
		els.className='ggskin ggskin_image_12';
		hs=basePath + 'images/image_12.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 92px;';
		hs+='position : absolute;';
		hs+='right : 66px;';
		hs+='top : 23px;';
		hs+='visibility : inherit;';
		hs+='width : 114px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._image_12.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._image_12.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._image_12);
		el=me._image_11=document.createElement('div');
		els=me._image_11__img=document.createElement('img');
		els.className='ggskin ggskin_image_11';
		hs=basePath + 'images/image_11.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 1";
		el.ggDx=197;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 92px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : 23px;';
		hs+='visibility : inherit;';
		hs+='width : 114px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._image_11.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._image_11.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me.divSkin.appendChild(me._image_11);
		el=me._image_10=document.createElement('div');
		els=me._image_10__img=document.createElement('img');
		els.className='ggskin ggskin_image_10';
		hs=basePath + 'images/image_10.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='bottom : -174px;';
		hs+='height : 92px;';
		hs+='left : 481px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 114px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._image_10.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._image_10.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._image_10);
		el=me._image_1=document.createElement('div');
		els=me._image_1__img=document.createElement('img');
		els.className='ggskin ggskin_image_1';
		hs=basePath + 'images/image_1.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 1";
		el.ggDx=-299;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='bottom : -283px;';
		hs+='height : 92px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 114px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._image_1.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._image_1.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me.divSkin.appendChild(me._image_1);
		el=me._thumbnail_show_button_show=document.createElement('div');
		els=me._thumbnail_show_button_show__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxNi4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8c3ZnIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMH'+
			'B4IiB5PSIwcHgiIHdpZHRoPSIzMnB4Ig0KCSBoZWlnaHQ9IjMycHgiIHZpZXdCb3g9IjAgMCAzMiAzMiIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgMzIgMzIiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPGcgaWQ9IkxheWVyXzEiPg0KCTxnIGlkPSJMYXllcl8xXzFfIj4NCgk8L2c+DQo8L2c+DQo8ZyBpZD0iRWJlbmVfMV8xXyI+DQoJPGc+DQoJCTxnIG9wYWNpdHk9IjAuNCI+DQoJCQk8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiMzQzNDM0MiIHN0cm9rZS13aWR0aD0iMS41IiBkPSJNMTYsMy41MDFDOS4xMDcsMy41MDEsMy41LDkuMTA4LDMuNSwxNlM5LjEwNywyOC40OTksMTYsMjgu'+
			'NDk5DQoJCQkJYzYuODkzLDAsMTIuNDk5LTUuNjA3LDEyLjQ5OS0xMi40OTlTMjIuODkzLDMuNTAxLDE2LDMuNTAxeiBNMTYsMjYuMDc5Yy01LjU1OCwwLTEwLjA4LTQuNTIxLTEwLjA4LTEwLjA3OVMxMC40NDIsNS45MiwxNiw1LjkyDQoJCQkJYzUuNTU3LDAsMTAuMDgxLDQuNTIyLDEwLjA4MSwxMC4wOFMyMS41NTcsMjYuMDc5LDE2LDI2LjA3OXoiLz4NCgkJCTxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzNDM0MzQyIgc3Ryb2tlLXdpZHRoPSIxLjUiIGQ9Ik0xMS4yNzEsMTMuNTIxSDguODc1Yy0wLjcwNywwLTEuMjgsMC41NzMtMS4yOCwxLjI4djIuMzk2DQoJCQkJYzAsMC43MDcsMC41Nz'+
			'MsMS4yOCwxLjI4LDEuMjhoMi4zOTZjMC43MDcsMCwxLjI4LTAuNTczLDEuMjgtMS4yOHYtMi4zOTZDMTIuNTUxLDE0LjA5NSwxMS45NzgsMTMuNTIxLDExLjI3MSwxMy41MjF6Ii8+DQoJCQk8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiMzQzNDM0MiIHN0cm9rZS13aWR0aD0iMS41IiBkPSJNMTcuMTUyLDEzLjUyMWgtMi4zOTZjLTAuNzA3LDAtMS4yOCwwLjU3My0xLjI4LDEuMjh2Mi4zOTYNCgkJCQljMCwwLjcwNywwLjU3MywxLjI3OSwxLjI4LDEuMjc5aDIuMzk2YzAuNzA3LDAsMS4yNzktMC41NzIsMS4yNzktMS4yNzl2LTIuMzk2QzE4LjQzMiwxNC4wOTUsMTcuODU5LDEzLjUyMSwxNy4x'+
			'NTIsMTMuNTIxeiIvPg0KCQkJPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjM0MzQzNDIiBzdHJva2Utd2lkdGg9IjEuNSIgZD0iTTIzLjAzNSwxMy41MjFoLTIuMzk2Yy0wLjcwNywwLTEuMjgxLDAuNTczLTEuMjgxLDEuMjh2Mi4zOTYNCgkJCQljMCwwLjcwNywwLjU3NCwxLjI3OSwxLjI4MSwxLjI3OWgyLjM5NmMwLjcwNywwLDEuMjgxLTAuNTcyLDEuMjgxLTEuMjc5di0yLjM5NkMyNC4zMTYsMTQuMDk1LDIzLjc0MiwxMy41MjEsMjMuMDM1LDEzLjUyMXoiLz4NCgkJPC9nPg0KCQk8Zz4NCgkJCTxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik0xNiwzLjUwMUM5LjEwNywzLjUwMSwzLjUsOS4xMD'+
			'gsMy41LDE2UzkuMTA3LDI4LjQ5OSwxNiwyOC40OTljNi44OTMsMCwxMi40OTktNS42MDcsMTIuNDk5LTEyLjQ5OQ0KCQkJCVMyMi44OTMsMy41MDEsMTYsMy41MDF6IE0xNiwyNi4wNzljLTUuNTU4LDAtMTAuMDgtNC41MjEtMTAuMDgtMTAuMDc5UzEwLjQ0Miw1LjkyLDE2LDUuOTJjNS41NTcsMCwxMC4wODEsNC41MjIsMTAuMDgxLDEwLjA4DQoJCQkJUzIxLjU1NywyNi4wNzksMTYsMjYuMDc5eiIvPg0KCQkJPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTTExLjI3MSwxMy41MjFIOC44NzVjLTAuNzA3LDAtMS4yOCwwLjU3My0xLjI4LDEuMjh2Mi4zOTZjMCwwLjcwNywwLjU3MywxLjI4LDEuMjgs'+
			'MS4yOGgyLjM5Ng0KCQkJCWMwLjcwNywwLDEuMjgtMC41NzMsMS4yOC0xLjI4di0yLjM5NkMxMi41NTEsMTQuMDk1LDExLjk3OCwxMy41MjEsMTEuMjcxLDEzLjUyMXoiLz4NCgkJCTxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik0xNy4xNTIsMTMuNTIxaC0yLjM5NmMtMC43MDcsMC0xLjI4LDAuNTczLTEuMjgsMS4yOHYyLjM5NmMwLDAuNzA3LDAuNTczLDEuMjc5LDEuMjgsMS4yNzloMi4zOTYNCgkJCQljMC43MDcsMCwxLjI3OS0wLjU3MiwxLjI3OS0xLjI3OXYtMi4zOTZDMTguNDMyLDE0LjA5NSwxNy44NTksMTMuNTIxLDE3LjE1MiwxMy41MjF6Ii8+DQoJCQk8cGF0aCBmaWxsPSIjRkZGRkZGIi'+
			'BkPSJNMjMuMDM1LDEzLjUyMWgtMi4zOTZjLTAuNzA3LDAtMS4yODEsMC41NzMtMS4yODEsMS4yOHYyLjM5NmMwLDAuNzA3LDAuNTc0LDEuMjc5LDEuMjgxLDEuMjc5aDIuMzk2DQoJCQkJYzAuNzA3LDAsMS4yODEtMC41NzIsMS4yODEtMS4yNzl2LTIuMzk2QzI0LjMxNiwxNC4wOTUsMjMuNzQyLDEzLjUyMSwyMy4wMzUsMTMuNTIxeiIvPg0KCQk8L2c+DQoJCTxnPg0KCQkJPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDAwMDAwIiBzdHJva2Utd2lkdGg9IjAuMiIgZD0iTTE2LDMuNTAxQzkuMTA3LDMuNTAxLDMuNSw5LjEwOCwzLjUsMTZTOS4xMDcsMjguNDk5LDE2LDI4LjQ5OQ0KCQkJCWM2'+
			'Ljg5MywwLDEyLjQ5OS01LjYwNywxMi40OTktMTIuNDk5UzIyLjg5MywzLjUwMSwxNiwzLjUwMXogTTE2LDI2LjA3OWMtNS41NTgsMC0xMC4wOC00LjUyMS0xMC4wOC0xMC4wNzlTMTAuNDQyLDUuOTIsMTYsNS45Mg0KCQkJCWM1LjU1NywwLDEwLjA4MSw0LjUyMiwxMC4wODEsMTAuMDhTMjEuNTU3LDI2LjA3OSwxNiwyNi4wNzl6Ii8+DQoJCQk8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiMwMDAwMDAiIHN0cm9rZS13aWR0aD0iMC4yIiBkPSJNMTEuMjcxLDEzLjUyMUg4Ljg3NWMtMC43MDcsMC0xLjI4LDAuNTczLTEuMjgsMS4yOHYyLjM5Ng0KCQkJCWMwLDAuNzA3LDAuNTczLDEuMjgsMS4yOC'+
			'wxLjI4aDIuMzk2YzAuNzA3LDAsMS4yOC0wLjU3MywxLjI4LTEuMjh2LTIuMzk2QzEyLjU1MSwxNC4wOTUsMTEuOTc4LDEzLjUyMSwxMS4yNzEsMTMuNTIxeiIvPg0KCQkJPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDAwMDAwIiBzdHJva2Utd2lkdGg9IjAuMiIgZD0iTTE3LjE1MiwxMy41MjFoLTIuMzk2Yy0wLjcwNywwLTEuMjgsMC41NzMtMS4yOCwxLjI4djIuMzk2DQoJCQkJYzAsMC43MDcsMC41NzMsMS4yNzksMS4yOCwxLjI3OWgyLjM5NmMwLjcwNywwLDEuMjc5LTAuNTcyLDEuMjc5LTEuMjc5di0yLjM5NkMxOC40MzIsMTQuMDk1LDE3Ljg1OSwxMy41MjEsMTcuMTUyLDEzLjUyMXoi'+
			'Lz4NCgkJCTxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwMDAwMCIgc3Ryb2tlLXdpZHRoPSIwLjIiIGQ9Ik0yMy4wMzUsMTMuNTIxaC0yLjM5NmMtMC43MDcsMC0xLjI4MSwwLjU3My0xLjI4MSwxLjI4djIuMzk2DQoJCQkJYzAsMC43MDcsMC41NzQsMS4yNzksMS4yODEsMS4yNzloMi4zOTZjMC43MDcsMCwxLjI4MS0wLjU3MiwxLjI4MS0xLjI3OXYtMi4zOTZDMjQuMzE2LDE0LjA5NSwyMy43NDIsMTMuNTIxLDIzLjAzNSwxMy41MjF6Ii8+DQoJCTwvZz4NCgk8L2c+DQo8L2c+DQo8L3N2Zz4NCg==';
		me._thumbnail_show_button_show__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;thumbnail_show_button_show;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._thumbnail_show_button_show__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxNi4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8c3ZnIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMH'+
			'B4IiB5PSIwcHgiIHdpZHRoPSIzMnB4Ig0KCSBoZWlnaHQ9IjMycHgiIHZpZXdCb3g9IjAgMCAzMiAzMiIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgMzIgMzIiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPGcgaWQ9IkxheWVyXzEiPg0KCTxnIGlkPSJMYXllcl8xXzFfIj4NCgk8L2c+DQo8L2c+DQo8ZyBpZD0iRWJlbmVfMV8xXyI+DQoJPGc+DQoJCTxnIG9wYWNpdHk9IjAuNCI+DQoJCQk8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiMzQzNDM0MiIHN0cm9rZS13aWR0aD0iMS41IiBkPSJNMTUuOTk5LDIuMjUxQzguNDE3LDIuMjUxLDIuMjUsOC40MTksMi4yNSwxNg0KCQkJCXM2LjE2Nywx'+
			'My43NDksMTMuNzQ5LDEzLjc0OWM3LjU4MywwLDEzLjc0OS02LjE2OCwxMy43NDktMTMuNzQ5UzIzLjU4MiwyLjI1MSwxNS45OTksMi4yNTF6IE0xNS45OTksMjcuMDg3DQoJCQkJQzkuODg2LDI3LjA4Nyw0LjkxMSwyMi4xMTMsNC45MTEsMTZTOS44ODYsNC45MTIsMTUuOTk5LDQuOTEyUzI3LjA4OCw5Ljg4NywyNy4wODgsMTZTMjIuMTEyLDI3LjA4NywxNS45OTksMjcuMDg3eiIvPg0KCQkJPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjM0MzQzNDIiBzdHJva2Utd2lkdGg9IjEuNSIgZD0iTTEwLjc5OCwxMy4yNzNIOC4xNjJjLTAuNzc4LDAtMS40MDgsMC42MzEtMS40MDgsMS40MDh2Mi42Mz'+
			'cNCgkJCQljMCwwLjc3NywwLjYzLDEuNDA4LDEuNDA4LDEuNDA4aDIuNjM2YzAuNzc3LDAsMS40MDgtMC42MzEsMS40MDgtMS40MDh2LTIuNjM3QzEyLjIwNiwxMy45MDQsMTEuNTc1LDEzLjI3MywxMC43OTgsMTMuMjczeiIvPg0KCQkJPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjM0MzQzNDIiBzdHJva2Utd2lkdGg9IjEuNSIgZD0iTTE3LjI2OCwxMy4yNzNoLTIuNjM2Yy0wLjc3NywwLTEuNDA4LDAuNjMxLTEuNDA4LDEuNDA4djIuNjM3DQoJCQkJYzAsMC43NzcsMC42MzEsMS40MDcsMS40MDgsMS40MDdoMi42MzZjMC43NzcsMCwxLjQwNy0wLjYzLDEuNDA3LTEuNDA3di0yLjYzN0MxOC42'+
			'NzUsMTMuOTA0LDE4LjA0NSwxMy4yNzMsMTcuMjY4LDEzLjI3M3oiLz4NCgkJCTxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzNDM0MzQyIgc3Ryb2tlLXdpZHRoPSIxLjUiIGQ9Ik0yMy43MzgsMTMuMjczaC0yLjYzNmMtMC43NzgsMC0xLjQwOSwwLjYzMS0xLjQwOSwxLjQwOHYyLjYzNw0KCQkJCWMwLDAuNzc3LDAuNjMxLDEuNDA3LDEuNDA5LDEuNDA3aDIuNjM2YzAuNzc4LDAsMS40MDktMC42MywxLjQwOS0xLjQwN3YtMi42MzdDMjUuMTQ3LDEzLjkwNCwyNC41MTcsMTMuMjczLDIzLjczOCwxMy4yNzN6Ii8+DQoJCTwvZz4NCgkJPGc+DQoJCQk8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNMT'+
			'UuOTk5LDIuMjUxQzguNDE3LDIuMjUxLDIuMjUsOC40MTksMi4yNSwxNnM2LjE2NywxMy43NDksMTMuNzQ5LDEzLjc0OQ0KCQkJCWM3LjU4MywwLDEzLjc0OS02LjE2OCwxMy43NDktMTMuNzQ5UzIzLjU4MiwyLjI1MSwxNS45OTksMi4yNTF6IE0xNS45OTksMjcuMDg3QzkuODg2LDI3LjA4Nyw0LjkxMSwyMi4xMTMsNC45MTEsMTYNCgkJCQlTOS44ODYsNC45MTIsMTUuOTk5LDQuOTEyUzI3LjA4OCw5Ljg4NywyNy4wODgsMTZTMjIuMTEyLDI3LjA4NywxNS45OTksMjcuMDg3eiIvPg0KCQkJPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTTEwLjc5OCwxMy4yNzNIOC4xNjJjLTAuNzc4LDAtMS40MDgs'+
			'MC42MzEtMS40MDgsMS40MDh2Mi42MzdjMCwwLjc3NywwLjYzLDEuNDA4LDEuNDA4LDEuNDA4aDIuNjM2DQoJCQkJYzAuNzc3LDAsMS40MDgtMC42MzEsMS40MDgtMS40MDh2LTIuNjM3QzEyLjIwNiwxMy45MDQsMTEuNTc1LDEzLjI3MywxMC43OTgsMTMuMjczeiIvPg0KCQkJPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTTE3LjI2OCwxMy4yNzNoLTIuNjM2Yy0wLjc3NywwLTEuNDA4LDAuNjMxLTEuNDA4LDEuNDA4djIuNjM3YzAsMC43NzcsMC42MzEsMS40MDcsMS40MDgsMS40MDdoMi42MzYNCgkJCQljMC43NzcsMCwxLjQwNy0wLjYzLDEuNDA3LTEuNDA3di0yLjYzN0MxOC42NzUsMTMuOTA0LD'+
			'E4LjA0NSwxMy4yNzMsMTcuMjY4LDEzLjI3M3oiLz4NCgkJCTxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik0yMy43MzgsMTMuMjczaC0yLjYzNmMtMC43NzgsMC0xLjQwOSwwLjYzMS0xLjQwOSwxLjQwOHYyLjYzN2MwLDAuNzc3LDAuNjMxLDEuNDA3LDEuNDA5LDEuNDA3aDIuNjM2DQoJCQkJYzAuNzc4LDAsMS40MDktMC42MywxLjQwOS0xLjQwN3YtMi42MzdDMjUuMTQ3LDEzLjkwNCwyNC41MTcsMTMuMjczLDIzLjczOCwxMy4yNzN6Ii8+DQoJCTwvZz4NCgkJPGc+DQoJCQk8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiMwMDAwMDAiIHN0cm9rZS13aWR0aD0iMC4yIiBkPSJNMTUuOTk5LDIuMjUx'+
			'QzguNDE3LDIuMjUxLDIuMjUsOC40MTksMi4yNSwxNg0KCQkJCXM2LjE2NywxMy43NDksMTMuNzQ5LDEzLjc0OWM3LjU4MywwLDEzLjc0OS02LjE2OCwxMy43NDktMTMuNzQ5UzIzLjU4MiwyLjI1MSwxNS45OTksMi4yNTF6IE0xNS45OTksMjcuMDg3DQoJCQkJQzkuODg2LDI3LjA4Nyw0LjkxMSwyMi4xMTMsNC45MTEsMTZTOS44ODYsNC45MTIsMTUuOTk5LDQuOTEyUzI3LjA4OCw5Ljg4NywyNy4wODgsMTZTMjIuMTEyLDI3LjA4NywxNS45OTksMjcuMDg3eiIvPg0KCQkJPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDAwMDAwIiBzdHJva2Utd2lkdGg9IjAuMiIgZD0iTTEwLjc5OCwxMy4yNz'+
			'NIOC4xNjJjLTAuNzc4LDAtMS40MDgsMC42MzEtMS40MDgsMS40MDh2Mi42MzcNCgkJCQljMCwwLjc3NywwLjYzLDEuNDA4LDEuNDA4LDEuNDA4aDIuNjM2YzAuNzc3LDAsMS40MDgtMC42MzEsMS40MDgtMS40MDh2LTIuNjM3QzEyLjIwNiwxMy45MDQsMTEuNTc1LDEzLjI3MywxMC43OTgsMTMuMjczeiIvPg0KCQkJPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDAwMDAwIiBzdHJva2Utd2lkdGg9IjAuMiIgZD0iTTE3LjI2OCwxMy4yNzNoLTIuNjM2Yy0wLjc3NywwLTEuNDA4LDAuNjMxLTEuNDA4LDEuNDA4djIuNjM3DQoJCQkJYzAsMC43NzcsMC42MzEsMS40MDcsMS40MDgsMS40MDdoMi42'+
			'MzZjMC43NzcsMCwxLjQwNy0wLjYzLDEuNDA3LTEuNDA3di0yLjYzN0MxOC42NzUsMTMuOTA0LDE4LjA0NSwxMy4yNzMsMTcuMjY4LDEzLjI3M3oiLz4NCgkJCTxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwMDAwMCIgc3Ryb2tlLXdpZHRoPSIwLjIiIGQ9Ik0yMy43MzgsMTMuMjczaC0yLjYzNmMtMC43NzgsMC0xLjQwOSwwLjYzMS0xLjQwOSwxLjQwOHYyLjYzNw0KCQkJCWMwLDAuNzc3LDAuNjMxLDEuNDA3LDEuNDA5LDEuNDA3aDIuNjM2YzAuNzc4LDAsMS40MDktMC42MywxLjQwOS0xLjQwN3YtMi42MzdDMjUuMTQ3LDEzLjkwNCwyNC41MTcsMTMuMjczLDIzLjczOCwxMy4yNzN6Ii8+DQ'+
			'oJCTwvZz4NCgk8L2c+DQo8L2c+DQo8L3N2Zz4NCg==';
		me._thumbnail_show_button_show__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;thumbnail_show_button_show;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="thumbnail_show_button_show";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='bottom : 23px;';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._thumbnail_show_button_show.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._thumbnail_show_button_show.onclick=function (e) {
			player.setVariableValue('vis_thumbnail_menu', !player.getVariableValue('vis_thumbnail_menu'));
		}
		me._thumbnail_show_button_show.onmouseover=function (e) {
			me._thumbnail_show_button_show__img.style.visibility='hidden';
			me._thumbnail_show_button_show__imgo.style.visibility='inherit';
			me.elementMouseOver['thumbnail_show_button_show']=true;
			me._tt_thumbnail_open.logicBlock_visible();
		}
		me._thumbnail_show_button_show.onmouseout=function (e) {
			me._thumbnail_show_button_show__img.style.visibility='inherit';
			me._thumbnail_show_button_show__imgo.style.visibility='hidden';
			me.elementMouseOver['thumbnail_show_button_show']=false;
			me._tt_thumbnail_open.logicBlock_visible();
		}
		me._thumbnail_show_button_show.ontouchend=function (e) {
			me.elementMouseOver['thumbnail_show_button_show']=false;
			me._tt_thumbnail_open.logicBlock_visible();
		}
		me._thumbnail_show_button_show.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		el=me._tt_thumbnail_open=document.createElement('div');
		els=me._tt_thumbnail_open__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tt_thumbnail_open";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='z-index: 100;';
		hs+='height : 20px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : 32px;';
		hs+='visibility : hidden;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		hs+='text-shadow: 1px 1px 4px #000000;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="";
		el.appendChild(els);
		me._tt_thumbnail_open.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._tt_thumbnail_open.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				(player.getIsMobile() == true)
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._tt_thumbnail_open.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._tt_thumbnail_open.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._tt_thumbnail_open.style[domTransition]='left 0s, top 0s';
				if (me._tt_thumbnail_open.ggCurrentLogicStatePosition == 0) {
					this.ggDx = 0;
					me._tt_thumbnail_open.style.top='-25px';
					me._tt_thumbnail_open.ggUpdatePosition(true);
				}
				else {
					me._tt_thumbnail_open.ggDx=0;
					me._tt_thumbnail_open.style.top='32px';
					me._tt_thumbnail_open.ggUpdatePosition(true);
				}
			}
		}
		me._tt_thumbnail_open.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				(me.elementMouseOver['thumbnail_show_button_show'] == true)
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._tt_thumbnail_open.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._tt_thumbnail_open.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._tt_thumbnail_open.style[domTransition]='left 0s, top 0s';
				if (me._tt_thumbnail_open.ggCurrentLogicStateVisible == 0) {
					me._tt_thumbnail_open.style.visibility=(Number(me._tt_thumbnail_open.style.opacity)>0||!me._tt_thumbnail_open.style.opacity)?'inherit':'hidden';
					me._tt_thumbnail_open.ggVisible=true;
				}
				else {
					me._tt_thumbnail_open.style.visibility="hidden";
					me._tt_thumbnail_open.ggVisible=false;
				}
			}
		}
		me._tt_thumbnail_open.logicBlock_text = function() {
			var newLogicStateText;
			if (
				(player.getVariableValue('vis_thumbnail_menu') == false)
			)
			{
				newLogicStateText = 0;
			}
			else if (
				(player.getVariableValue('vis_thumbnail_menu') == true)
			)
			{
				newLogicStateText = 1;
			}
			else {
				newLogicStateText = -1;
			}
			if (me._tt_thumbnail_open.ggCurrentLogicStateText != newLogicStateText) {
				me._tt_thumbnail_open.ggCurrentLogicStateText = newLogicStateText;
				me._tt_thumbnail_open.style[domTransition]='left 0s, top 0s';
				if (me._tt_thumbnail_open.ggCurrentLogicStateText == 0) {
					me._tt_thumbnail_open.ggText="Show Thumbnail Menu";
					me._tt_thumbnail_open__text.innerHTML=me._tt_thumbnail_open.ggText;
					if (me._tt_thumbnail_open.ggUpdateText) {
					me._tt_thumbnail_open.ggUpdateText=function() {
						var hs="Show Thumbnail Menu";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._tt_thumbnail_open.ggUpdatePosition) me._tt_thumbnail_open.ggUpdatePosition();
					}
				}
				else if (me._tt_thumbnail_open.ggCurrentLogicStateText == 1) {
					me._tt_thumbnail_open.ggText="Hide Thumbnail Menu";
					me._tt_thumbnail_open__text.innerHTML=me._tt_thumbnail_open.ggText;
					if (me._tt_thumbnail_open.ggUpdateText) {
					me._tt_thumbnail_open.ggUpdateText=function() {
						var hs="Hide Thumbnail Menu";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._tt_thumbnail_open.ggUpdatePosition) me._tt_thumbnail_open.ggUpdatePosition();
					}
				}
				else {
					me._tt_thumbnail_open.ggText="";
					me._tt_thumbnail_open__text.innerHTML=me._tt_thumbnail_open.ggText;
					if (me._tt_thumbnail_open.ggUpdateText) {
					me._tt_thumbnail_open.ggUpdateText=function() {
						var hs="";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._tt_thumbnail_open.ggUpdatePosition) me._tt_thumbnail_open.ggUpdatePosition();
					}
				}
			}
		}
		me._tt_thumbnail_open.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((98-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me._thumbnail_show_button_show.appendChild(me._tt_thumbnail_open);
		me.divSkin.appendChild(me._thumbnail_show_button_show);
		el=me._thumbnail_menu=document.createElement('div');
		els=me._thumbnail_menu__content=document.createElement('div');
		el.ggContent=els;
		el.appendChild(els);
		el.ggHorScrollVisible = false;
		el.ggVertScrollVisible = false;
		el.ggContentLeftOffset = 0;
		el.ggContentTopOffset = 0;
		hs ='';
		hs+='height : 73px;';
		hs+='left : 50%;';
		hs+='margin-left : -57.5px;';
		hs+='margin-top : -36.5px;';
		hs+='overflow : visible;';
		hs+='position : absolute;';
		hs+='top : 50%;';
		hs+='width : 115px;';
		hs+="";
		els.setAttribute('style',hs);
		me._thumbnail_menu.ggScrollByX = function(diffX) {
			if(!me._thumbnail_menu.ggHorScrollVisible || diffX == 0) return;
			me._thumbnail_menu.ggScrollPosX = (me._thumbnail_menu__horScrollFg.offsetLeft + diffX);
			me._thumbnail_menu.ggScrollPosX = Math.max(me._thumbnail_menu.ggScrollPosX, 0);
			me._thumbnail_menu.ggScrollPosX = Math.min(me._thumbnail_menu.ggScrollPosX, me._thumbnail_menu__horScrollBg.clientWidth - me._thumbnail_menu__horScrollFg.clientWidth);
			me._thumbnail_menu__horScrollFg.style.left = me._thumbnail_menu.ggScrollPosX + 'px';
			me._thumbnail_menu__content.style.left = -(Math.round(me._thumbnail_menu.ggScrollPosX / me._thumbnail_menu.ggHPercentVisible)) + me._thumbnail_menu.ggContentLeftOffset + 'px';
			me._thumbnail_menu.ggScrollPosXPercent = (me._thumbnail_menu__horScrollFg.offsetLeft / me._thumbnail_menu__horScrollBg.clientWidth);
		}
		me._thumbnail_menu.ggScrollByXSmooth = function(diffX) {
			if(!me._thumbnail_menu.ggHorScrollVisible || diffX == 0) return;
			var scrollPerInterval = diffX / 25;
			var scrollCurrX = 0;
			var id = setInterval(function() {
				scrollCurrX += scrollPerInterval;
				me._thumbnail_menu.ggScrollPosX += scrollPerInterval;
				if (diffX > 0 && (scrollCurrX >= diffX || me._thumbnail_menu.ggScrollPosX >= me._thumbnail_menu__horScrollBg.clientWidth - me._thumbnail_menu__horScrollFg.clientWidth)) {
					me._thumbnail_menu.ggScrollPosX = Math.min(me._thumbnail_menu.ggScrollPosX, me._thumbnail_menu__horScrollBg.clientWidth - me._thumbnail_menu__horScrollFg.clientWidth);
					clearInterval(id);
				}
				if (diffX < 0 && (scrollCurrX <= diffX || me._thumbnail_menu.ggScrollPosX <= 0)) {
					me._thumbnail_menu.ggScrollPosX = Math.max(me._thumbnail_menu.ggScrollPosX, 0);
					clearInterval(id);
				}
			me._thumbnail_menu__horScrollFg.style.left = me._thumbnail_menu.ggScrollPosX + 'px';
			me._thumbnail_menu__content.style.left = -(Math.round(me._thumbnail_menu.ggScrollPosX / me._thumbnail_menu.ggHPercentVisible)) + me._thumbnail_menu.ggContentLeftOffset + 'px';
			me._thumbnail_menu.ggScrollPosXPercent = (me._thumbnail_menu__horScrollFg.offsetLeft / me._thumbnail_menu__horScrollBg.clientWidth);
			}, 10);
		}
		me._thumbnail_menu.ggScrollByY = function(diffY) {
			if(!me._thumbnail_menu.ggVertScrollVisible || diffY == 0) return;
			me._thumbnail_menu.ggScrollPosY = (me._thumbnail_menu__vertScrollFg.offsetTop + diffY);
			me._thumbnail_menu.ggScrollPosY = Math.max(me._thumbnail_menu.ggScrollPosY, 0);
			me._thumbnail_menu.ggScrollPosY = Math.min(me._thumbnail_menu.ggScrollPosY, me._thumbnail_menu__vertScrollBg.clientHeight - me._thumbnail_menu__vertScrollFg.clientHeight);
			me._thumbnail_menu__vertScrollFg.style.top = me._thumbnail_menu.ggScrollPosY + 'px';
			me._thumbnail_menu__content.style.top = -(Math.round(me._thumbnail_menu.ggScrollPosY / me._thumbnail_menu.ggVPercentVisible)) + me._thumbnail_menu.ggContentTopOffset + 'px';
			me._thumbnail_menu.ggScrollPosYPercent = (me._thumbnail_menu__vertScrollFg.offsetTop / me._thumbnail_menu__vertScrollBg.clientHeight);
		}
		me._thumbnail_menu.ggScrollByYSmooth = function(diffY) {
			if(!me._thumbnail_menu.ggVertScrollVisible || diffY == 0) return;
			var scrollPerInterval = diffY / 25;
			var scrollCurrY = 0;
			var id = setInterval(function() {
				scrollCurrY += scrollPerInterval;
				me._thumbnail_menu.ggScrollPosY += scrollPerInterval;
				if (diffY > 0 && (scrollCurrY >= diffY || me._thumbnail_menu.ggScrollPosY >= me._thumbnail_menu__vertScrollBg.clientHeight - me._thumbnail_menu__vertScrollFg.clientHeight)) {
					me._thumbnail_menu.ggScrollPosY = Math.min(me._thumbnail_menu.ggScrollPosY, me._thumbnail_menu__vertScrollBg.clientHeight - me._thumbnail_menu__vertScrollFg.clientHeight);
					clearInterval(id);
				}
				if (diffY < 0 && (scrollCurrY <= diffY || me._thumbnail_menu.ggScrollPosY <= 0)) {
					me._thumbnail_menu.ggScrollPosY = Math.max(me._thumbnail_menu.ggScrollPosY, 0);
					clearInterval(id);
				}
			me._thumbnail_menu__vertScrollFg.style.top = me._thumbnail_menu.ggScrollPosY + 'px';
			me._thumbnail_menu__content.style.top = -(Math.round(me._thumbnail_menu.ggScrollPosY / me._thumbnail_menu.ggVPercentVisible)) + me._thumbnail_menu.ggContentTopOffset + 'px';
			me._thumbnail_menu.ggScrollPosYPercent = (me._thumbnail_menu__vertScrollFg.offsetTop / me._thumbnail_menu__vertScrollBg.clientHeight);
			}, 10);
		}
		me._thumbnail_menu.ggScrollIntoView = function(posX, posY, width, height) {
			if (me._thumbnail_menu.ggHorScrollVisible) {
				if (posX < 0) {
					var diffX = Math.floor(posX * me._thumbnail_menu.ggHPercentVisible);
					me._thumbnail_menu.ggScrollByXSmooth(diffX);
				} else if (posX + width > me._thumbnail_menu.clientWidth - (me._thumbnail_menu.ggVertScrollVisible ? 15 : 0)) {
					var diffX = Math.ceil(((posX + width) - (me._thumbnail_menu.clientWidth - (me._thumbnail_menu.ggVertScrollVisible ? 15 : 0))) * me._thumbnail_menu.ggHPercentVisible);
					me._thumbnail_menu.ggScrollByXSmooth(diffX);
				}
			}
			if (me._thumbnail_menu.ggVertScrollVisible) {
				if (posY < 0) {
					var diffY = Math.floor(posY * me._thumbnail_menu.ggVPercentVisible);
					me._thumbnail_menu.ggScrollByYSmooth(diffY);
				} else if (posY + height > me._thumbnail_menu.clientHeight - (me._thumbnail_menu.ggHorScrollVisible ? 15 : 0)) {
					var diffY = Math.ceil(((posY + height) - (me._thumbnail_menu.clientHeight - (me._thumbnail_menu.ggHorScrollVisible ? 15 : 0))) * me._thumbnail_menu.ggVPercentVisible);
					me._thumbnail_menu.ggScrollByYSmooth(diffY);
				}
			}
		}
		els.ontouchstart = function(e) {
			e = e || window.event;
			var t = e.touches;
			me._thumbnail_menu.ggDragLastX = t[0].clientX;
			me._thumbnail_menu.ggDragLastY = t[0].clientY;
			me._thumbnail_menu__content.ontouchend = function() {
				me._thumbnail_menu__content.ontouchend = null;
				me._thumbnail_menu__content.ontouchmove = null;
			}
			me._thumbnail_menu__content.ontouchmove = function(e) {
				e = e || window.event;
				e.preventDefault();
			var t = e.touches;
				var diffX = t[0].clientX - me._thumbnail_menu.ggDragLastX;
				var diffY = t[0].clientY - me._thumbnail_menu.ggDragLastY;
				me._thumbnail_menu.ggDragLastX = t[0].clientX;
				me._thumbnail_menu.ggDragLastY = t[0].clientY;
				me._thumbnail_menu.ggScrollByX(-diffX);
				me._thumbnail_menu.ggScrollByY(-diffY);
			}
		}
		elHorScrollBg = me._thumbnail_menu__horScrollBg = document.createElement('div');
		el.appendChild(elHorScrollBg);
		elHorScrollBg.setAttribute('style', 'position: absolute; left: 0px; bottom: 0px; visibility: hidden; width: 512px; height: 15px; background-color: rgba(128,128,128,1); pointer-events: auto;');
		elHorScrollBg.className='ggskin ggskin_scrollarea_hscrollbg';
		elHorScrollFg = me._thumbnail_menu__horScrollFg = document.createElement('div');
		elHorScrollBg.appendChild(elHorScrollFg);
		elHorScrollFg.className='ggskin ggskin_scrollarea_hscrollfg';
		elHorScrollFg.setAttribute('style', 'position: absolute; left: 0px; top: 0px; visibility: hidden; width: 512px; height: 15px; background-color: rgba(192,192,192,1); pointer-events: auto;');
		me._thumbnail_menu.ggScrollPosX = 0;
		me._thumbnail_menu.ggScrollPosXPercent = 0.0;
		elHorScrollFg.onmousedown = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			me._thumbnail_menu.ggDragLastX = e.clientX;
			document.onmouseup = function() {
				document.onmouseup = null;
				document.onmousemove = null;
			}
			document.onmousemove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var diffX = e.clientX - me._thumbnail_menu.ggDragLastX;
				me._thumbnail_menu.ggDragLastX = e.clientX;
				me._thumbnail_menu.ggScrollByX(diffX);
			}
		}
		elHorScrollFg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			me._thumbnail_menu.ggDragLastX = t[0].clientX;
			document.ontouchend = function() {
				document.ontouchend = null;
				document.ontouchmove = null;
			}
			document.ontouchmove = function(e) {
				e = e || window.event;
				e.preventDefault();
			var t = e.touches;
				var diffX = t[0].clientX - me._thumbnail_menu.ggDragLastX;
				me._thumbnail_menu.ggDragLastX = t[0].clientX;
				me._thumbnail_menu.ggScrollByX(diffX);
			}
		}
		elHorScrollBg.onmousedown = function(e) {
			e = e || window.event;
			e.preventDefault();
			var diffX = me._thumbnail_menu.ggScrollWidth;
			if (e.offsetX < me._thumbnail_menu.ggScrollPosX) {
				diffX = diffX * -1;
			}
			me._thumbnail_menu.ggScrollByXSmooth(diffX);
		}
		elHorScrollBg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			var rect = me._thumbnail_menu__horScrollBg.getBoundingClientRect();
			var diffX = me._thumbnail_menu.ggScrollWidth;
			if ((t[0].clientX - rect.left) < me._thumbnail_menu.ggScrollPosX) {
				diffX = diffX * -1;
			}
			me._thumbnail_menu.ggScrollByXSmooth(diffX);
		}
		el.addEventListener('wheel', function(e) {
			var wheelDelta = Math.sign(e.deltaX);
			me._thumbnail_menu.ggScrollByXSmooth(20 * wheelDelta);
		});
		elCornerBg = me._thumbnail_menu__cornerBg = document.createElement('div');
		el.appendChild(elCornerBg);
		elCornerBg.setAttribute('style', 'position: absolute; right: 0px; bottom: 0px; visibility: hidden; width: 15px; height: 15px; background-color: rgba(255,255,255,1);');
		elCornerBg.className='ggskin ggskin_scrollarea_scrollcorner';
		el.ggId="thumbnail_menu";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_scrollarea ";
		el.ggType='scrollarea';
		hs ='';
		hs+='border : 1px solid rgba(0, 0, 0, 0);';
		hs+='bottom : 65px;';
		hs+='height : 84px;';
		hs+='left : -10000px;';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 80%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._thumbnail_menu.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._thumbnail_menu.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				(player.getIsMobile() == true)
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._thumbnail_menu.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._thumbnail_menu.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._thumbnail_menu.style[domTransition]='left 0s, bottom 0s, opacity 500ms ease 0ms, visibility 500ms ease 0ms';
				if (me._thumbnail_menu.ggCurrentLogicStatePosition == 0) {
					this.ggDx = 0;
					me._thumbnail_menu.style.bottom='80px';
					me._thumbnail_menu.ggUpdatePosition(true);
				}
				else {
					me._thumbnail_menu.ggDx=0;
					me._thumbnail_menu.style.bottom='65px';
					me._thumbnail_menu.ggUpdatePosition(true);
				}
			}
		}
		me._thumbnail_menu.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				(player.getVariableValue('vis_thumbnail_menu') == false)
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._thumbnail_menu.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._thumbnail_menu.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._thumbnail_menu.style[domTransition]='left 0s, bottom 0s, opacity 500ms ease 0ms, visibility 500ms ease 0ms';
				if (me._thumbnail_menu.ggCurrentLogicStateAlpha == 0) {
					me._thumbnail_menu.style.visibility="hidden";
					me._thumbnail_menu.style.opacity=0;
				}
				else {
					me._thumbnail_menu.style.visibility=me._thumbnail_menu.ggVisible?'inherit':'hidden';
					me._thumbnail_menu.style.opacity=1;
				}
			}
		}
		me._thumbnail_menu.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=((this.ggDx * pw)/100.0 + pw/2 - w/2) + 'px';
			}
			{
				this.ggContent.style.left = '0px';
				this.ggContent.style.top = '0px';
				this.ggContentLeftOffset = 0;
				this.ggContentTopOffset = 0;
				var clientWidthWithScale = this.getBoundingClientRect().width;
				var clientHeightWithScale = this.getBoundingClientRect().height;
				var domRectContent = this.ggContent.getBoundingClientRect();
				var minX = 0;
				var minY = 0;
				var maxX = 0;
				var maxY = 0;
				var stack=[];
				stack.push(this.ggContent);
				while(stack.length>0) {
					var e=stack.pop();
					if (e.getBoundingClientRect) {
						var domRectChild = e.getBoundingClientRect();
						var diffX = domRectChild.left - domRectContent.left;
						minX = Math.min(minX, diffX);
						maxX = Math.max(maxX, diffX + domRectChild.width);
						var diffY = domRectChild.top - domRectContent.top;
						minY = Math.min(minY, diffY);
						maxY = Math.max(maxY, diffY + domRectChild.height);
					}
					if (e.hasChildNodes()) {
						for(var i=0;i<e.childNodes.length;i++) {
							stack.push(e.childNodes[i]);
						}
					}
				}
				if (minX < 0) this.ggContentLeftOffset = -minX;
				if (minY < 0) this.ggContentTopOffset = -minY;
				var contentWidth = maxX - minX;
				var contentHeight = maxY - minY;
				this.ggContent.style.left = this.ggContentLeftOffset + 'px';
				this.ggContent.style.top = this.ggContentTopOffset + 'px';
				var containerWidth = clientWidthWithScale;
				if (contentWidth < containerWidth) {
					this.ggContent.style.left = '50%';
					this.ggContent.style.marginLeft = (contentWidth/-2) + 'px';
				}
				else {
					this.ggContent.style.left = this.ggContentLeftOffset + 'px';
					this.ggContent.style.marginLeft = '0px';
				}
				var containerHeight = this.clientHeight;
				if (contentHeight < containerHeight) {
					this.ggContent.style.top = '50%';
					this.ggContent.style.marginTop = (contentHeight/-2) + 'px';
				}
				else {
					this.ggContent.style.top = this.ggContentTopOffset + 'px';
					this.ggContent.style.marginTop = '0px';
				}
				if (contentWidth > clientWidthWithScale) {
					me._thumbnail_menu__horScrollBg.style.visibility = 'inherit';
					me._thumbnail_menu__horScrollFg.style.visibility = 'inherit';
					me._thumbnail_menu.ggHorScrollVisible = true;
				} else {
					me._thumbnail_menu__horScrollBg.style.visibility = 'hidden';
					me._thumbnail_menu__horScrollFg.style.visibility = 'hidden';
					me._thumbnail_menu.ggHorScrollVisible = false;
				}
				if(me._thumbnail_menu.ggHorScrollVisible) {
					if (me._thumbnail_menu.ggVertScrollVisible) {
						me._thumbnail_menu.ggAvailableWidth = me._thumbnail_menu.clientWidth - 15;
						me._thumbnail_menu.ggAvailableWidthWithScale = me._thumbnail_menu.getBoundingClientRect().width - me._thumbnail_menu__horScrollBg.getBoundingClientRect().height;
					} else {
						me._thumbnail_menu.ggAvailableWidth = me._thumbnail_menu.clientWidth;
						me._thumbnail_menu.ggAvailableWidthWithScale = me._thumbnail_menu.getBoundingClientRect().width;
					}
					me._thumbnail_menu__horScrollBg.style.width = me._thumbnail_menu.ggAvailableWidth + 'px';
					me._thumbnail_menu.ggHPercentVisible = me._thumbnail_menu.ggAvailableWidthWithScale / contentWidth;
					if (me._thumbnail_menu.ggHPercentVisible > 1.0) me._thumbnail_menu.ggHPercentVisible = 1.0;
					me._thumbnail_menu.ggScrollWidth = Math.round(me._thumbnail_menu__horScrollBg.clientWidth * me._thumbnail_menu.ggHPercentVisible);
					me._thumbnail_menu__horScrollFg.style.width = me._thumbnail_menu.ggScrollWidth + 'px';
					me._thumbnail_menu.ggScrollPosX = me._thumbnail_menu.ggScrollPosXPercent * me._thumbnail_menu.ggAvailableWidth;
					me._thumbnail_menu.ggScrollPosX = Math.min(me._thumbnail_menu.ggScrollPosX, me._thumbnail_menu__horScrollBg.clientWidth - me._thumbnail_menu__horScrollFg.clientWidth);
					me._thumbnail_menu__horScrollFg.style.left = me._thumbnail_menu.ggScrollPosX + 'px';
					me._thumbnail_menu__content.style.left = -(Math.round(me._thumbnail_menu.ggScrollPosX / me._thumbnail_menu.ggHPercentVisible)) + this.ggContentLeftOffset + 'px';
				} else {
					me._thumbnail_menu.ggScrollPosX = 0;
					me._thumbnail_menu.ggScrollPosXPercent = 0.0;
				}
			}
		}
		el=me._thumbnail_cloner=document.createElement('div');
		el.ggNumRepeat = 1;
		el.ggWidth = 96;
		el.ggHeight = 62;
		el.ggUpdating = false;
		el.ggFilter = [];
		el.ggInstances = [];
		me._thumbnail_cloner.callChildLogicBlocks_changenode = function(){
			if(me._thumbnail_cloner.ggInstances) {
				var i;
				for(i = 0; i < me._thumbnail_cloner.ggInstances.length; i++) {
					if (me._thumbnail_cloner.ggInstances[i]._checkmark_tick && me._thumbnail_cloner.ggInstances[i]._checkmark_tick.logicBlock_visible) {
						me._thumbnail_cloner.ggInstances[i]._checkmark_tick.logicBlock_visible();
					}
					if (me._thumbnail_cloner.ggInstances[i]._thumbnail_title && me._thumbnail_cloner.ggInstances[i]._thumbnail_title.logicBlock_alpha) {
						me._thumbnail_cloner.ggInstances[i]._thumbnail_title.logicBlock_alpha();
					}
				}
			}
		}
		me._thumbnail_cloner.callChildLogicBlocks_mouseover = function(){
			if(me._thumbnail_cloner.ggInstances) {
				var i;
				for(i = 0; i < me._thumbnail_cloner.ggInstances.length; i++) {
					if (me._thumbnail_cloner.ggInstances[i]._thumbnail_active && me._thumbnail_cloner.ggInstances[i]._thumbnail_active.logicBlock_bordercolor) {
						me._thumbnail_cloner.ggInstances[i]._thumbnail_active.logicBlock_bordercolor();
					}
				}
			}
		}
		me._thumbnail_cloner.callChildLogicBlocks_mouseover = function(){
			if(me._thumbnail_cloner.ggInstances) {
				var i;
				for(i = 0; i < me._thumbnail_cloner.ggInstances.length; i++) {
					if (me._thumbnail_cloner.ggInstances[i]._thumbnail_title && me._thumbnail_cloner.ggInstances[i]._thumbnail_title.logicBlock_alpha) {
						me._thumbnail_cloner.ggInstances[i]._thumbnail_title.logicBlock_alpha();
					}
				}
			}
		}
		me._thumbnail_cloner.callChildLogicBlocks_active = function(){
			if(me._thumbnail_cloner.ggInstances) {
				var i;
				for(i = 0; i < me._thumbnail_cloner.ggInstances.length; i++) {
					if (me._thumbnail_cloner.ggInstances[i]._checkmark_tick && me._thumbnail_cloner.ggInstances[i]._checkmark_tick.logicBlock_visible) {
						me._thumbnail_cloner.ggInstances[i]._checkmark_tick.logicBlock_visible();
					}
					if (me._thumbnail_cloner.ggInstances[i]._thumbnail_active && me._thumbnail_cloner.ggInstances[i]._thumbnail_active.logicBlock_bordercolor) {
						me._thumbnail_cloner.ggInstances[i]._thumbnail_active.logicBlock_bordercolor();
					}
				}
			}
		}
		me._thumbnail_cloner.callChildLogicBlocks_varchanged_opt_thumbnail_menu_tooltip = function(){
			if(me._thumbnail_cloner.ggInstances) {
				var i;
				for(i = 0; i < me._thumbnail_cloner.ggInstances.length; i++) {
					if (me._thumbnail_cloner.ggInstances[i]._thumbnail_title && me._thumbnail_cloner.ggInstances[i]._thumbnail_title.logicBlock_alpha) {
						me._thumbnail_cloner.ggInstances[i]._thumbnail_title.logicBlock_alpha();
					}
				}
			}
		}
		el.ggUpdate = function(filter) {
			if(me._thumbnail_cloner.ggUpdating == true) return;
			me._thumbnail_cloner.ggUpdating = true;
			var el=me._thumbnail_cloner;
			el.ggInstances = [];
			if (typeof filter=='object') {
				el.ggFilter = filter;
			} else {
				filter = el.ggFilter;
			};
			if (me.ggTag) filter.push(me.ggTag);
			el.ggCurrentFilter = filter;
			if (el.hasChildNodes() == true) {
				while (el.firstChild) {
					el.removeChild(el.firstChild);
				}
			}
			var tourNodes = player.getNodeIds();
			var row = 0;
			var column = 0;
			var numRows = el.ggNumRepeat;
			if (numRows < 1) numRows = 1;
			for (var i=0; i < tourNodes.length; i++) {
				var nodeId = tourNodes[i];
				var passed = true;
				if (filter.length > 0) {
					var nodeData = player.getNodeUserdata(nodeId);
					for (var j=0; j < filter.length; j++) {
						if (nodeData['tags'].indexOf(filter[j]) == -1) passed = false;
					}
				}
				if (passed) {
				var parameter={};
				parameter.top=(row * me._thumbnail_cloner.ggHeight) + 'px';
				parameter.left=(column * me._thumbnail_cloner.ggWidth) + 'px';
				var inst = new SkinCloner_thumbnail_cloner_Class(nodeId, me, el, parameter);
				el.ggInstances.push(inst);
				el.appendChild(inst.__div);
				inst.__div.ggObj=inst;
				skin.updateSize(inst.__div);
				row++;
				if (row >= numRows) {
					row = 0;
					column++;
				}
				}
			}
			me._thumbnail_cloner.callChildLogicBlocks_changenode();
			me._thumbnail_cloner.callChildLogicBlocks_mouseover();
			me._thumbnail_cloner.callChildLogicBlocks_mouseover();
			me._thumbnail_cloner.callChildLogicBlocks_active();
			me._thumbnail_cloner.callChildLogicBlocks_varchanged_opt_thumbnail_menu_tooltip();
			me._thumbnail_cloner.ggUpdating = false;
			player.triggerEvent('clonerchanged');
		}
		el.ggFilter = [];
		el.ggId="thumbnail_cloner";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_cloner ";
		el.ggType='cloner';
		hs ='';
		hs+='height : 62px;';
		hs+='left : 0px;';
		hs+='overflow : visible;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 96px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._thumbnail_cloner.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._thumbnail_cloner.ggUpdateConditionNodeChange=function () {
			var cnode=player.getCurrentNode();
			for(var i=0; i<me._thumbnail_cloner.childNodes.length; i++) {
				var child=me._thumbnail_cloner.childNodes[i];
				if (child.ggObj && child.ggObj.ggNodeId==cnode) {
			        var childOffX = child.offsetLeft;
			        var childOffY = child.offsetTop;
					var p = child.parentElement;
			        while (p != null && p!==this.divSkin) {
						if (p.ggType && p.ggType == 'scrollarea') {
							p.ggScrollIntoView(childOffX, childOffY, child.clientWidth, child.clientHeight);
						}
						childOffX += p.offsetLeft;
						childOffY += p.offsetTop;
						p = p.parentElement;
					}
				}
			}
		}
		me._thumbnail_cloner.ggUpdatePosition=function (useTransition) {
			var w=player.getViewerSize().width;
			var h=player.getViewerSize().height
			if ((!me._thumbnail_cloner.ggLastSize) || (me._thumbnail_cloner.ggLastSize.w!=w) || (me._thumbnail_cloner.ggLastSize.h!=h)) {
				me._thumbnail_cloner.ggLastSize={ w:w, h:h };
				me._thumbnail_cloner.ggUpdate();
			}
		}
		me._thumbnail_cloner.ggNodeChange=function () {
			me._thumbnail_cloner.ggUpdateConditionNodeChange();
		}
		me._thumbnail_menu__content.appendChild(me._thumbnail_cloner);
		me.divSkin.appendChild(me._thumbnail_menu);
		el=me._screen_tint_url=document.createElement('div');
		el.ggId="screen_tint_url";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(0,0,0,0.392157);';
		hs+='border : 1px solid #000000;';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : 1px;';
		hs+='position : absolute;';
		hs+='top : -3px;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._screen_tint_url.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._screen_tint_url.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				(player.getVariableValue('vis_website') == true)
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._screen_tint_url.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._screen_tint_url.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._screen_tint_url.style[domTransition]='';
				if (me._screen_tint_url.ggCurrentLogicStateVisible == 0) {
					me._screen_tint_url.style.visibility=(Number(me._screen_tint_url.style.opacity)>0||!me._screen_tint_url.style.opacity)?'inherit':'hidden';
					me._screen_tint_url.ggVisible=true;
				}
				else {
					me._screen_tint_url.style.visibility="hidden";
					me._screen_tint_url.ggVisible=false;
				}
			}
		}
		me._screen_tint_url.onclick=function (e) {
			player.setVariableValue('vis_website', false);
		}
		me._screen_tint_url.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._screen_tint_url);
		el=me._web_page=document.createElement('div');
		els=me._web_page__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="web_page";
		el.ggDx=-31.48;
		el.ggDy=36.77;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 23.9583%;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 30.7813%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='0% 0%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='border: 0px solid #000000;';
		hs+='color: #000000;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._web_page.ggUpdateText=function() {
			var hs=player.getNodeUserdata('_master').title+""+player.hotspot.url;
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._web_page.ggUpdateText();
		el.appendChild(els);
		me._web_page.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._web_page.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				(player.getVariableValue('vis_website') == true)
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._web_page.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._web_page.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._web_page.style[domTransition]='';
				if (me._web_page.ggCurrentLogicStateVisible == 0) {
					me._web_page.style.visibility=(Number(me._web_page.style.opacity)>0||!me._web_page.style.opacity)?'inherit':'hidden';
					me._web_page.ggVisible=true;
				}
				else {
					me._web_page.style.visibility="hidden";
					me._web_page.ggVisible=false;
				}
			}
		}
		me._web_page.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=((this.ggDx * pw)/100.0 + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=((this.ggDy * ph)/100.0 + ph/2 - h/2) + 'px';
			}
		}
		me.divSkin.appendChild(me._web_page);
		el=me._close_url=document.createElement('div');
		els=me._close_url__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxOS4xLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBiYXNlUHJvZmlsZT0idGlueSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiDQoJIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSItMjQwIDMzMiAxMzAgMTMwIiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxnIG'+
			'lkPSJMYXllcl8xXzFfIj4NCgk8cGF0aCBmaWxsPSIjMDAwMDAwIiBkPSJNLTEzNS4zLDM1Ny4zYy0yMS45LTIxLjktNTcuNS0yMS45LTc5LjQsMGMtMjEuOSwyMS45LTIxLjksNTcuNSwwLDc5LjRjMjEuOSwyMS45LDU3LjUsMjEuOSw3OS40LDANCgkJUy0xMTMuNCwzNzkuMi0xMzUuMywzNTcuM3ogTS0xNDUuOCw0MTIuN2MwLjgsMC44LDAuOCwxLjUtMC4xLDIuNGwtMTAuOSwxMC45Yy0wLjQsMC40LTAuOCwwLjUtMS4zLDAuNWMtMC41LDAtMC45LTAuMS0xLjEtMC40DQoJCWwtMTUuOC0xNS44bC0xNS43LDE1LjdjLTAuNCwwLjQtMC44LDAuNS0xLjMsMC41cy0wLjktMC4xLTEuMS0wLjRsLTEx'+
			'LjEtMTEuMWMtMC4zLTAuMy0wLjQtMC42LTAuNC0xLjFjMC0wLjUsMC4xLTAuOSwwLjUtMS4zDQoJCWwxNS43LTE1LjdsLTE1LjgtMTUuOGMtMC4zLTAuMy0wLjQtMC42LTAuNC0xLjFjMC0wLjUsMC4xLTAuOSwwLjUtMS4zbDEwLjktMTAuOWMwLjktMC45LDEuNy0wLjksMi40LTAuMWwxNS44LDE1LjhsMTUuNy0xNS43DQoJCWMwLjktMC45LDEuNy0wLjksMi40LTAuMWwxMS4xLDExLjFjMC44LDAuOCwwLjgsMS41LTAuMSwyLjRsLTE1LjcsMTUuN0wtMTQ1LjgsNDEyLjd6Ii8+DQo8L2c+DQo8ZyBpZD0iTGF5ZXJfMiI+DQoJPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTS0xNjEuNiwzOTYuOWwxNS'+
			'44LDE1LjhjMC44LDAuOCwwLjgsMS41LTAuMSwyLjRsLTEwLjksMTAuOWMtMC40LDAuNC0wLjgsMC41LTEuMywwLjUNCgkJYy0wLjUsMC0wLjktMC4xLTEuMS0wLjRsLTE1LjgtMTUuOGwtMTUuNywxNS43Yy0wLjQsMC40LTAuOCwwLjUtMS4zLDAuNXMtMC45LTAuMS0xLjEtMC40bC0xMS4xLTExLjFjLTAuMy0wLjMtMC40LTAuNi0wLjQtMS4xDQoJCWMwLTAuNSwwLjEtMC45LDAuNS0xLjNsMTUuNy0xNS43bC0xNS44LTE1LjhjLTAuMy0wLjMtMC40LTAuNi0wLjQtMS4xYzAtMC41LDAuMS0wLjksMC41LTEuM2wxMC45LTEwLjljMC45LTAuOSwxLjctMC45LDIuNC0wLjENCgkJbDE1LjgsMTUuOGwx'+
			'NS43LTE1LjdjMC45LTAuOSwxLjctMC45LDIuNC0wLjFsMTEuMSwxMS4xYzAuOCwwLjgsMC44LDEuNS0wLjEsMi40TC0xNjEuNiwzOTYuOXoiLz4NCjwvZz4NCjwvc3ZnPg0K';
		me._close_url__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;close_url;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._close_url__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxOS4xLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBiYXNlUHJvZmlsZT0idGlueSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiDQoJIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSItMjQwIDMzMiAxMzAgMTMwIiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxnIG'+
			'lkPSJMYXllcl8xXzFfIj4NCgk8cGF0aCBmaWxsPSIjMDAwMDAwIiBkPSJNLTEzMC45LDM1Mi45Yy0yNC40LTI0LjQtNjMuOC0yNC40LTg4LjIsMGMtMjQuNCwyNC40LTI0LjQsNjMuOCwwLDg4LjJjMjQuNCwyNC40LDYzLjgsMjQuNCw4OC4yLDANCgkJUy0xMDYuNSwzNzcuMy0xMzAuOSwzNTIuOXogTS0xNDIuNSw0MTQuNWMwLjgsMC44LDAuOCwxLjctMC4xLDIuN2wtMTIuMiwxMi4yYy0wLjQsMC40LTAuOCwwLjYtMS40LDAuNmMtMC42LDAtMS0wLjEtMS4zLTAuNA0KCQlsLTE3LjUtMTcuNWwtMTcuNCwxNy40Yy0wLjQsMC40LTAuOCwwLjYtMS40LDAuNmMtMC42LDAtMS0wLjEtMS4zLTAuNGwt'+
			'MTIuMy0xMi4zYy0wLjMtMC4zLTAuNC0wLjctMC40LTEuM2MwLTAuNiwwLjEtMSwwLjYtMS40DQoJCWwxNy40LTE3LjRsLTE3LjUtMTcuNWMtMC4zLTAuMy0wLjQtMC43LTAuNC0xLjNjMC0wLjYsMC4xLTEsMC42LTEuNGwxMi4yLTEyLjJjMS0xLDEuOC0xLDIuNy0wLjFsMTcuNSwxNy41bDE3LjQtMTcuNA0KCQljMS0xLDEuOC0xLDIuNy0wLjFsMTIuMywxMi4zYzAuOCwwLjgsMC44LDEuNy0wLjEsMi43bC0xNy40LDE3LjRMLTE0Mi41LDQxNC41eiIvPg0KPC9nPg0KPGcgaWQ9IkxheWVyXzIiPg0KCTxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik0tMTYwLjEsMzk2LjlsMTcuNSwxNy41YzAuOCwwLj'+
			'gsMC44LDEuNy0wLjEsMi43bC0xMi4yLDEyLjJjLTAuNCwwLjQtMC44LDAuNi0xLjQsMC42DQoJCWMtMC42LDAtMS0wLjEtMS4zLTAuNGwtMTcuNS0xNy41bC0xNy40LDE3LjRjLTAuNCwwLjQtMC44LDAuNi0xLjQsMC42Yy0wLjYsMC0xLTAuMS0xLjMtMC40bC0xMi4zLTEyLjNjLTAuMy0wLjMtMC40LTAuNy0wLjQtMS4zDQoJCWMwLTAuNiwwLjEtMSwwLjYtMS40bDE3LjQtMTcuNGwtMTcuNS0xNy41Yy0wLjMtMC4zLTAuNC0wLjctMC40LTEuM2MwLTAuNiwwLjEtMSwwLjYtMS40bDEyLjItMTIuMmMxLTEsMS44LTEsMi43LTAuMWwxNy41LDE3LjUNCgkJbDE3LjQtMTcuNGMxLTEsMS44LTEsMi43'+
			'LTAuMWwxMi4zLDEyLjNjMC44LDAuOCwwLjgsMS43LTAuMSwyLjdMLTE2MC4xLDM5Ni45eiIvPg0KPC9nPg0KPC9zdmc+DQo=';
		me._close_url__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;close_url;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="close_url";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='position : absolute;';
		hs+='right : 4px;';
		hs+='top : 2px;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._close_url.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._close_url.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				(player.getVariableValue('vis_image_popup') == true) || 
				(player.getVariableValue('vis_video_popup_file') == true) || 
				(player.getVariableValue('vis_video_popup_url') == true) || 
				(player.getVariableValue('vis_video_popup_vimeo') == true) || 
				(player.getVariableValue('vis_video_popup_youtube') == true) || 
				(player.getVariableValue('vis_website') == true)
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._close_url.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._close_url.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._close_url.style[domTransition]='';
				if (me._close_url.ggCurrentLogicStateVisible == 0) {
					me._close_url.style.visibility=(Number(me._close_url.style.opacity)>0||!me._close_url.style.opacity)?'inherit':'hidden';
					me._close_url.ggVisible=true;
				}
				else {
					me._close_url.style.visibility="hidden";
					me._close_url.ggVisible=false;
				}
			}
		}
		me._close_url.onclick=function (e) {
			player.setVariableValue('vis_website', false);
		}
		me._close_url.onmouseover=function (e) {
			me._close_url__img.style.visibility='hidden';
			me._close_url__imgo.style.visibility='inherit';
		}
		me._close_url.onmouseout=function (e) {
			me._close_url__img.style.visibility='inherit';
			me._close_url__imgo.style.visibility='hidden';
		}
		me._close_url.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._close_url);
		el=me._map_1=document.createElement('div');
		el.ggFilter = '';
		el.ggFilteredIds = [];
		el.ggId="Map 1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_map ";
		el.ggType='map';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 1px solid #000000;';
		hs+='bottom : 1px;';
		hs+='cursor : default;';
		hs+='height : 118px;';
		hs+='left : 21px;';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 197px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._map_1.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._map_1.ggUpdateConditionResize=function () {
			var mapDetails = player.getMapDetails(me._map_1.ggMapId);
			if (!(mapDetails.hasOwnProperty('title'))) return;
			me._map_1.ggCalculateFloorplanSize(mapDetails);
			me._map_1.ggShowSimpleFloorplan(mapDetails);
			me._map_1.ggPlaceMarkersOnSimpleFloorplan();
			me._map_1.ggRadar.update();
		}
		me._map_1.ggUpdateConditionTimer=function () {
			me._map_1.ggRadar.update();
		}
		me._map_1.ggUpdatePosition=function (useTransition) {
			me._map_1.ggUpdateConditionResize();
		}
		me._map_1.ggNodeChange=function () {
			var mapDetails = player.getMapDetails(me._map_1.ggMapId);
			if (!(mapDetails.hasOwnProperty('title'))) return;
			me._map_1.ggCalculateFloorplanSize(mapDetails);
			me._map_1.ggShowSimpleFloorplan(mapDetails);
			me._map_1.ggPlaceMarkersOnSimpleFloorplan();
			me._map_1.ggRadar.update();
			if (me._map_1.ggLastNodeId) {
				var lastActiveMarker = me._map_1.ggSimpleFloorplanMarkerArray[me._map_1.ggLastNodeId];
				if (lastActiveMarker && lastActiveMarker.ggDeactivate) lastActiveMarker.ggDeactivate();
			}
			var id = player.getCurrentNode();
			var marker = me._map_1.ggSimpleFloorplanMarkerArray[id];
			if (marker) {
				if (marker.ggActivate) marker.ggActivate();
			}
			if (player.getMapType(me._map_1.ggMapId) == 'file') {
				var coords = player.getNodeMapCoords(id, me._map_1.ggMapId);
				if (coords.length < 2) {
					var mapId = player.getMapContainingNode(id);
					if (mapId != '') {
							me._map_1.ggChangeMap(mapId);
					}
				}
			}
			me._map_1.ggLastNodeId = id;
		}
		me.divSkin.appendChild(me._map_1);
		me._map_1.ggMarkerInstances=[];
		me._map_1.ggMapId = 'FloorPlan01';
		me._map_1.ggLastNodeId=null;
		me._map_1.ggSimpleFloorplanMarkerArray=[];
		me._map_1.ggFloorplanWidth=0;
		me._map_1.ggFloorplanHeight=0;
		me._map_1__mapdiv=document.createElement('div');
		me._map_1__mapdiv.className='ggskin ggskin_map';
		me._map_1.appendChild(me._map_1__mapdiv);
		me._map_1__img=document.createElement('img');
		me._map_1__img.className='ggskin ggskin_map';
		me._map_1__mapdiv.appendChild(me._map_1__img);
		me._map_1.ggRadar={ lastFov : -1, lastPan : -1, xPos : -1, yPos : -1, radarElement : null }
		me._map_1.ggRadar.update=function() {
			var radar=me._map_1.ggRadar;
			var d2r = Math.PI/180 ;
			var fov = player.getFov();
			var pan = player.getPanNorth();
			pan -= me._map_1.ggFloorplanNorth;
			var filterpassed = true;
			var currentId = player.getCurrentNode();
			if (me._map_1.ggFilteredIds.length > 0 && me._map_1.ggFilteredIds.indexOf(currentId) == -1) filterpassed = false;
			if ((me._map_1.ggSimpleFloorplanMarkerArray.hasOwnProperty(currentId)) && filterpassed) {
				var activeMarker = me._map_1.ggSimpleFloorplanMarkerArray[currentId];
				if ((radar.radarElement) && (fov==radar.lastFov) && (pan==radar.lastPan) && (activeMarker.radarXPos==radar.xPos) && (activeMarker.radarYPos==radar.yPos)) return; 
				radar.lastPan=pan; radar.lastFov=fov;
				radar.xPos=activeMarker.radarXPos; radar.yPos=activeMarker.radarYPos;
				if (radar.radarElement) me._map_1__mapdiv.removeChild(radar.radarElement);
				radar.radarElement = document.createElementNS('http://www.w3.org/2000/svg','svg');
				radar.radarElement.setAttributeNS(null,'width',360);
				radar.radarElement.setAttributeNS(null,'height',360);
				radar.radarElement.setAttributeNS(null,'viewBox','0 0 360 360');
				var radarPath = document.createElementNS('http://www.w3.org/2000/svg','path');
				radarPath.setAttributeNS(null,'id','radarPath');
				pan = -90 - pan;
				var arcX1 = 180 * Math.cos((pan - fov / 2) * d2r);
				var arcY1 = 180 * Math.sin((pan - fov / 2) * d2r);
				var arcX2 = 180 * Math.cos((pan + fov / 2) * d2r);
				var arcY2 = 180 * Math.sin((pan + fov / 2) * d2r);
				arcX1 += 180;
				arcY1 += 180;
				arcX2 += 180;
				arcY2 += 180;
				var radarPathString = 'M180,180 L' + arcX1 + ',' + arcY1 + ' A 180 180 0 0 1 ' + arcX2 + ' ' + arcY2 +' Z';
				radarPath.setAttributeNS(null,'d', radarPathString);
				radarPath.setAttributeNS(null,'fill', '#ff0000');
				radarPath.setAttributeNS(null,'fill-opacity', 0.35);
				radarPath.setAttributeNS(null,'stroke', '#ff0000');
				radarPath.setAttributeNS(null,'stroke-opacity', 0.8);
				radarPath.setAttributeNS(null,'stroke-width', 1);
				radarPath.setAttributeNS(null,'stroke-linejoin', 'miter');
				radar.radarElement.appendChild(radarPath);
				me._map_1__mapdiv.appendChild(radar.radarElement);
				var radarXPos = activeMarker.radarXPos - 180;
				var radarYPos = activeMarker.radarYPos - 180;
				radar.radarElement.style['position'] = 'absolute';
				radar.radarElement.style['left'] = '' + radarXPos + 'px';
				radar.radarElement.style['top'] = '' + radarYPos + 'px';
				radar.radarElement.style['z-index'] = me._map_1.style['z-index'] + 1;
			} else {
				if (radar.radarElement) {
					me._map_1__mapdiv.removeChild(radar.radarElement);
					radar.radarElement = null;
				}
			}
		}
		me._map_1.ggShowSimpleFloorplan=function(mapDetails) {
			var mapWidth = me._map_1.clientWidth;
			var mapHeight = me._map_1.clientHeight;
			var levelLimit = 500;
			var level = 1;
			while (mapWidth > levelLimit && mapHeight > levelLimit) {
				levelLimit *= 2;
				level++;
			}
			var imageFilename = basePath + 'images/maptiles/' + me._map_1.ggMapId + '_' + level + '.' + mapDetails['tileformat'];
			me._map_1__img.setAttribute('src', imageFilename);
		me._map_1__mapdiv.setAttribute('style','position: absolute; left: 50%; margin-left: -' + me._map_1.ggFloorplanWidth / 2 + 'px; top: 50%; margin-top: -' + me._map_1.ggFloorplanHeight / 2 + 'px;width:' + me._map_1.ggFloorplanWidth + 'px;height:' + me._map_1.ggFloorplanHeight + 'px;overflow:hidden;;');
		me._map_1__img.setAttribute('style','width:' + me._map_1.ggFloorplanWidth + 'px;height:' + me._map_1.ggFloorplanHeight + 'px;-webkit-user-drag:none;pointer-events:none;');
		}
		me._map_1.ggCalculateFloorplanSize=function(mapDetails) {
			var floorplanWidth = mapDetails['width'];
			var floorplanHeight = mapDetails['height'];
			var frameAR = me._map_1.clientWidth / me._map_1.clientHeight;
			var floorplanAR = floorplanWidth / floorplanHeight;
			if (frameAR > floorplanAR) {
				me._map_1.ggFloorplanHeight = me._map_1.clientHeight;
				me._map_1.ggFloorplanWidth = me._map_1.ggFloorplanHeight * floorplanAR;
			} else {
				me._map_1.ggFloorplanWidth = me._map_1.clientWidth;
				me._map_1.ggFloorplanHeight = me._map_1.ggFloorplanWidth / floorplanAR;
			}
		}
		me._map_1.ggInitMap=function() {
			me._map_1.ggMapNotLoaded = false;
			var mapDetails = player.getMapDetails(me._map_1.ggMapId);
			me._map_1.style.backgroundColor = mapDetails['bgcolor'];
			if (mapDetails.hasOwnProperty('transparent') && mapDetails['transparent']) {
				me._map_1.ggPermeableMap = true;
			} else {
				me._map_1.ggPermeableMap = false;
			}
			me._map_1.ggCalculateFloorplanSize(mapDetails);
			me._map_1.ggShowSimpleFloorplan(mapDetails);
			me._map_1.ggFloorplanNorth = mapDetails['floorplannorth'];
		}
		me._map_1.ggClearMap=function() {
			me._map_1.ggClearMapMarkers();
			me._map_1.ggMapNotLoaded = true;
		}
		me._map_1.ggChangeMap=function(mapId) {
			var newMapType = player.getMapType(mapId)
			if (newMapType == 'web') {
				return;
			}
			me._map_1.ggMapId = mapId;
			me._map_1.ggClearMap();
			me._map_1.ggInitMap();
			me._map_1.ggInitMapMarkers();
		}
		me._map_1.ggPlaceMarkersOnSimpleFloorplan=function() {
			var markers=me._map_1.ggSimpleFloorplanMarkerArray;
			for (id in markers) {
				if (markers.hasOwnProperty(id)) {
					marker=markers[id];
					var coords = player.getNodeMapCoordsInPercent(id, me._map_1.ggMapId);
					var xPos = (me._map_1.ggFloorplanWidth * coords[0]) / 100.0;
					var yPos = (me._map_1.ggFloorplanHeight * coords[1]) / 100.0;
					marker.radarXPos = xPos;
					marker.radarYPos = yPos;
					xPos -= me._map_1.ggHMarkerAnchorOffset;
					yPos -= me._map_1.ggVMarkerAnchorOffset;
					marker.style['position'] = 'absolute';
					marker.style['left'] = xPos + 'px';
					marker.style['top'] = yPos + 'px';
					marker.style['z-index'] = me._map_1.style['z-index'] + 2;
				}
			}
		}
		me._map_1.ggInitMapMarkers=function() {
			me._map_1.ggClearMapMarkers();
			var ids = player.getNodeIds();
			me._map_1.ggFilteredIds = [];
			if (me._map_1.ggFilter != '') {
				var filter = me._map_1.ggFilter.split(',');
				for (i=0; i < ids.length; i++) {
					var nodeId = ids[i];
					var nodeData = player.getNodeUserdata(nodeId);
					for (var j=0; j < filter.length; j++) {
						if (nodeData['tags'].indexOf(filter[j].trim()) != -1) me._map_1.ggFilteredIds.push(nodeId);
					}
				}
				if (me._map_1.ggFilteredIds.length > 0) ids = me._map_1.ggFilteredIds;
			}
			for(var i=0; i < ids.length; i++) {
				var id = ids[i];
				var coords = player.getNodeMapCoordsInPercent(id, me._map_1.ggMapId);
				if (coords.length>=2) {
					me._map_1.ggHMarkerAnchorOffset = 20;
					me._map_1.ggVMarkerAnchorOffset = 40;
					var marker = document.createElement('img');
					marker.setAttribute('src', basePath + 'images/_ggMapPin.png');
					marker.setAttribute('title', player.getNodeTitle(id));
					marker.style['width'] = '40px';
					marker.style['width'] = '40px';
					marker.style['cursor'] = 'pointer';
					marker.ggId = id;
					marker.onclick = function() {
						player.openNext('{' + this.ggId + '}');
					}
					me._map_1.ggSimpleFloorplanMarkerArray[id] = marker;
					me._map_1__mapdiv.appendChild(marker);
				}
			}
			me._map_1.ggPlaceMarkersOnSimpleFloorplan();
			skin.updateSize(me._map_1);
		}
		me._map_1.ggClearMapMarkers=function() {
			for (id in me._map_1.ggSimpleFloorplanMarkerArray) {
				if (me._map_1.ggSimpleFloorplanMarkerArray.hasOwnProperty(id)) {
					me._map_1__mapdiv.removeChild(me._map_1.ggSimpleFloorplanMarkerArray[id]);
				}
			}
			me._map_1.ggMarkerInstances=[];
			me._map_1.ggSimpleFloorplanMarkerArray=[];
		}
		player.addListener('sizechanged', function() {
			me.updateSize(me.divSkin);
		});
		player.addListener('configloaded', function() {
			me._dropdown_cloner.ggUpdate();
			me._thumbnail_cloner.ggUpdate();
			me._map_1.ggInitMap(false);
			me._map_1.ggInitMapMarkers(true);
		});
		player.addListener('imagesready', function() {
			me._dropdown_scrollarea.ggUpdatePosition();
			me._thumbnail_menu.ggUpdatePosition();
		});
	};
	this.hotspotProxyClick=function(id, url) {
	}
	this.hotspotProxyDoubleClick=function(id, url) {
	}
	me.hotspotProxyOver=function(id, url) {
	}
	me.hotspotProxyOut=function(id, url) {
	}
	me.callChildLogicBlocksHotspot_ht_node2_sizechanged = function(){
		if(hotspotTemplates['ht_node']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_node'].length; i++) {
				if (hotspotTemplates['ht_node'][i]._hs_tt1 && hotspotTemplates['ht_node'][i]._hs_tt1.logicBlock_visible) {
					hotspotTemplates['ht_node'][i]._hs_tt1.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_node2_changenode = function(){
		if(hotspotTemplates['ht_node']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_node'].length; i++) {
				if (hotspotTemplates['ht_node'][i]._hs_preview_image1 && hotspotTemplates['ht_node'][i]._hs_preview_image1.logicBlock_alpha) {
					hotspotTemplates['ht_node'][i]._hs_preview_image1.logicBlock_alpha();
				}
				if (hotspotTemplates['ht_node'][i]._tt_ht_3d1 && hotspotTemplates['ht_node'][i]._tt_ht_3d1.logicBlock_visible) {
					hotspotTemplates['ht_node'][i]._tt_ht_3d1.logicBlock_visible();
				}
				if (hotspotTemplates['ht_node'][i]._hs_tt1 && hotspotTemplates['ht_node'][i]._hs_tt1.logicBlock_visible) {
					hotspotTemplates['ht_node'][i]._hs_tt1.logicBlock_visible();
				}
				if (hotspotTemplates['ht_node'][i]._ht_checkmark_tick1 && hotspotTemplates['ht_node'][i]._ht_checkmark_tick1.logicBlock_visible) {
					hotspotTemplates['ht_node'][i]._ht_checkmark_tick1.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_node2_configloaded = function(){
		if(hotspotTemplates['ht_node']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_node'].length; i++) {
				if (hotspotTemplates['ht_node'][i]._hs_preview_image1 && hotspotTemplates['ht_node'][i]._hs_preview_image1.logicBlock_alpha) {
					hotspotTemplates['ht_node'][i]._hs_preview_image1.logicBlock_alpha();
				}
				if (hotspotTemplates['ht_node'][i]._tt_ht_3d1 && hotspotTemplates['ht_node'][i]._tt_ht_3d1.logicBlock_visible) {
					hotspotTemplates['ht_node'][i]._tt_ht_3d1.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_node2_mouseover = function(){
		if(hotspotTemplates['ht_node']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_node'].length; i++) {
				if (hotspotTemplates['ht_node'][i]._chevron_white_lower1 && hotspotTemplates['ht_node'][i]._chevron_white_lower1.logicBlock_alpha) {
					hotspotTemplates['ht_node'][i]._chevron_white_lower1.logicBlock_alpha();
				}
				if (hotspotTemplates['ht_node'][i]._chevron_black1 && hotspotTemplates['ht_node'][i]._chevron_black1.logicBlock_alpha) {
					hotspotTemplates['ht_node'][i]._chevron_black1.logicBlock_alpha();
				}
				if (hotspotTemplates['ht_node'][i]._chevron_white1 && hotspotTemplates['ht_node'][i]._chevron_white1.logicBlock_alpha) {
					hotspotTemplates['ht_node'][i]._chevron_white1.logicBlock_alpha();
				}
				if (hotspotTemplates['ht_node'][i]._hs_preview_image1 && hotspotTemplates['ht_node'][i]._hs_preview_image1.logicBlock_alpha) {
					hotspotTemplates['ht_node'][i]._hs_preview_image1.logicBlock_alpha();
				}
				if (hotspotTemplates['ht_node'][i]._tt_ht_3d1 && hotspotTemplates['ht_node'][i]._tt_ht_3d1.logicBlock_visible) {
					hotspotTemplates['ht_node'][i]._tt_ht_3d1.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_node2_active = function(){
		if(hotspotTemplates['ht_node']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_node'].length; i++) {
				if (hotspotTemplates['ht_node'][i]._ht_checkmark_tick1 && hotspotTemplates['ht_node'][i]._ht_checkmark_tick1.logicBlock_visible) {
					hotspotTemplates['ht_node'][i]._ht_checkmark_tick1.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_node2_varchanged_opt_3d_preview = function(){
		if(hotspotTemplates['ht_node']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_node'].length; i++) {
				if (hotspotTemplates['ht_node'][i]._hs_preview_image1 && hotspotTemplates['ht_node'][i]._hs_preview_image1.logicBlock_alpha) {
					hotspotTemplates['ht_node'][i]._hs_preview_image1.logicBlock_alpha();
				}
				if (hotspotTemplates['ht_node'][i]._tt_ht_3d1 && hotspotTemplates['ht_node'][i]._tt_ht_3d1.logicBlock_visible) {
					hotspotTemplates['ht_node'][i]._tt_ht_3d1.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_node1_sizechanged = function(){
		if(hotspotTemplates['ht_node']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_node'].length; i++) {
				if (hotspotTemplates['ht_node'][i]._ht_node1.logicBlock_visible) {
					hotspotTemplates['ht_node'][i]._ht_node1.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_node1_changenode = function(){
		if(hotspotTemplates['ht_node']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_node'].length; i++) {
				if (hotspotTemplates['ht_node'][i]._ht_node1.logicBlock_visible) {
					hotspotTemplates['ht_node'][i]._ht_node1.logicBlock_visible();
				}
				if (hotspotTemplates['ht_node'][i]._ht_node_visited && hotspotTemplates['ht_node'][i]._ht_node_visited.logicBlock_visible) {
					hotspotTemplates['ht_node'][i]._ht_node_visited.logicBlock_visible();
				}
				if (hotspotTemplates['ht_node'][i]._ht_node_image && hotspotTemplates['ht_node'][i]._ht_node_image.logicBlock_visible) {
					hotspotTemplates['ht_node'][i]._ht_node_image.logicBlock_visible();
				}
				if (hotspotTemplates['ht_node'][i]._hotspot_preview && hotspotTemplates['ht_node'][i]._hotspot_preview.logicBlock_visible) {
					hotspotTemplates['ht_node'][i]._hotspot_preview.logicBlock_visible();
				}
				if (hotspotTemplates['ht_node'][i]._tt_ht_node && hotspotTemplates['ht_node'][i]._tt_ht_node.logicBlock_visible) {
					hotspotTemplates['ht_node'][i]._tt_ht_node.logicBlock_visible();
				}
				if (hotspotTemplates['ht_node'][i]._ht_tooltip && hotspotTemplates['ht_node'][i]._ht_tooltip.logicBlock_visible) {
					hotspotTemplates['ht_node'][i]._ht_tooltip.logicBlock_visible();
				}
				if (hotspotTemplates['ht_node'][i]._ht_checkmark_tick0 && hotspotTemplates['ht_node'][i]._ht_checkmark_tick0.logicBlock_visible) {
					hotspotTemplates['ht_node'][i]._ht_checkmark_tick0.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_node1_configloaded = function(){
		if(hotspotTemplates['ht_node']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_node'].length; i++) {
				if (hotspotTemplates['ht_node'][i]._hotspot_preview && hotspotTemplates['ht_node'][i]._hotspot_preview.logicBlock_visible) {
					hotspotTemplates['ht_node'][i]._hotspot_preview.logicBlock_visible();
				}
				if (hotspotTemplates['ht_node'][i]._tt_ht_node && hotspotTemplates['ht_node'][i]._tt_ht_node.logicBlock_position) {
					hotspotTemplates['ht_node'][i]._tt_ht_node.logicBlock_position();
				}
				if (hotspotTemplates['ht_node'][i]._tt_ht_node && hotspotTemplates['ht_node'][i]._tt_ht_node.logicBlock_visible) {
					hotspotTemplates['ht_node'][i]._tt_ht_node.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_node1_mouseover = function(){
		if(hotspotTemplates['ht_node']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_node'].length; i++) {
				if (hotspotTemplates['ht_node'][i]._hotspot_preview && hotspotTemplates['ht_node'][i]._hotspot_preview.logicBlock_visible) {
					hotspotTemplates['ht_node'][i]._hotspot_preview.logicBlock_visible();
				}
				if (hotspotTemplates['ht_node'][i]._tt_ht_node && hotspotTemplates['ht_node'][i]._tt_ht_node.logicBlock_visible) {
					hotspotTemplates['ht_node'][i]._tt_ht_node.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_node1_active = function(){
		if(hotspotTemplates['ht_node']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_node'].length; i++) {
				if (hotspotTemplates['ht_node'][i]._ht_checkmark_tick0 && hotspotTemplates['ht_node'][i]._ht_checkmark_tick0.logicBlock_visible) {
					hotspotTemplates['ht_node'][i]._ht_checkmark_tick0.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_node1_varchanged_vis_website = function(){
		if(hotspotTemplates['ht_node']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_node'].length; i++) {
				if (hotspotTemplates['ht_node'][i]._ht_node1.logicBlock_visible) {
					hotspotTemplates['ht_node'][i]._ht_node1.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_node1_varchanged_opt_hotspot_preview = function(){
		if(hotspotTemplates['ht_node']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_node'].length; i++) {
				if (hotspotTemplates['ht_node'][i]._hotspot_preview && hotspotTemplates['ht_node'][i]._hotspot_preview.logicBlock_visible) {
					hotspotTemplates['ht_node'][i]._hotspot_preview.logicBlock_visible();
				}
				if (hotspotTemplates['ht_node'][i]._tt_ht_node && hotspotTemplates['ht_node'][i]._tt_ht_node.logicBlock_visible) {
					hotspotTemplates['ht_node'][i]._tt_ht_node.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_node0_sizechanged = function(){
		if(hotspotTemplates['ht_node']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_node'].length; i++) {
				if (hotspotTemplates['ht_node'][i]._hs_tt0 && hotspotTemplates['ht_node'][i]._hs_tt0.logicBlock_visible) {
					hotspotTemplates['ht_node'][i]._hs_tt0.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_node0_changenode = function(){
		if(hotspotTemplates['ht_node']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_node'].length; i++) {
				if (hotspotTemplates['ht_node'][i]._hs_preview_image0 && hotspotTemplates['ht_node'][i]._hs_preview_image0.logicBlock_alpha) {
					hotspotTemplates['ht_node'][i]._hs_preview_image0.logicBlock_alpha();
				}
				if (hotspotTemplates['ht_node'][i]._tt_ht_3d0 && hotspotTemplates['ht_node'][i]._tt_ht_3d0.logicBlock_visible) {
					hotspotTemplates['ht_node'][i]._tt_ht_3d0.logicBlock_visible();
				}
				if (hotspotTemplates['ht_node'][i]._hs_tt0 && hotspotTemplates['ht_node'][i]._hs_tt0.logicBlock_visible) {
					hotspotTemplates['ht_node'][i]._hs_tt0.logicBlock_visible();
				}
				if (hotspotTemplates['ht_node'][i]._hs_visited && hotspotTemplates['ht_node'][i]._hs_visited.logicBlock_visible) {
					hotspotTemplates['ht_node'][i]._hs_visited.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_node0_configloaded = function(){
		if(hotspotTemplates['ht_node']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_node'].length; i++) {
				if (hotspotTemplates['ht_node'][i]._hs_preview_image0 && hotspotTemplates['ht_node'][i]._hs_preview_image0.logicBlock_alpha) {
					hotspotTemplates['ht_node'][i]._hs_preview_image0.logicBlock_alpha();
				}
				if (hotspotTemplates['ht_node'][i]._tt_ht_3d0 && hotspotTemplates['ht_node'][i]._tt_ht_3d0.logicBlock_visible) {
					hotspotTemplates['ht_node'][i]._tt_ht_3d0.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_node0_mouseover = function(){
		if(hotspotTemplates['ht_node']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_node'].length; i++) {
				if (hotspotTemplates['ht_node'][i]._chevron_white_lower0 && hotspotTemplates['ht_node'][i]._chevron_white_lower0.logicBlock_alpha) {
					hotspotTemplates['ht_node'][i]._chevron_white_lower0.logicBlock_alpha();
				}
				if (hotspotTemplates['ht_node'][i]._chevron_black0 && hotspotTemplates['ht_node'][i]._chevron_black0.logicBlock_alpha) {
					hotspotTemplates['ht_node'][i]._chevron_black0.logicBlock_alpha();
				}
				if (hotspotTemplates['ht_node'][i]._chevron_white0 && hotspotTemplates['ht_node'][i]._chevron_white0.logicBlock_alpha) {
					hotspotTemplates['ht_node'][i]._chevron_white0.logicBlock_alpha();
				}
				if (hotspotTemplates['ht_node'][i]._hs_preview_image0 && hotspotTemplates['ht_node'][i]._hs_preview_image0.logicBlock_alpha) {
					hotspotTemplates['ht_node'][i]._hs_preview_image0.logicBlock_alpha();
				}
				if (hotspotTemplates['ht_node'][i]._tt_ht_3d0 && hotspotTemplates['ht_node'][i]._tt_ht_3d0.logicBlock_visible) {
					hotspotTemplates['ht_node'][i]._tt_ht_3d0.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_node0_active = function(){
		if(hotspotTemplates['ht_node']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_node'].length; i++) {
				if (hotspotTemplates['ht_node'][i]._hs_visited && hotspotTemplates['ht_node'][i]._hs_visited.logicBlock_visible) {
					hotspotTemplates['ht_node'][i]._hs_visited.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_node0_varchanged_opt_3d_preview = function(){
		if(hotspotTemplates['ht_node']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_node'].length; i++) {
				if (hotspotTemplates['ht_node'][i]._hs_preview_image0 && hotspotTemplates['ht_node'][i]._hs_preview_image0.logicBlock_alpha) {
					hotspotTemplates['ht_node'][i]._hs_preview_image0.logicBlock_alpha();
				}
				if (hotspotTemplates['ht_node'][i]._tt_ht_3d0 && hotspotTemplates['ht_node'][i]._tt_ht_3d0.logicBlock_visible) {
					hotspotTemplates['ht_node'][i]._tt_ht_3d0.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_node_sizechanged = function(){
		if(hotspotTemplates['ht_node']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_node'].length; i++) {
				if (hotspotTemplates['ht_node'][i]._hs_tt && hotspotTemplates['ht_node'][i]._hs_tt.logicBlock_visible) {
					hotspotTemplates['ht_node'][i]._hs_tt.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_node_changenode = function(){
		if(hotspotTemplates['ht_node']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_node'].length; i++) {
				if (hotspotTemplates['ht_node'][i]._hs_preview_image && hotspotTemplates['ht_node'][i]._hs_preview_image.logicBlock_alpha) {
					hotspotTemplates['ht_node'][i]._hs_preview_image.logicBlock_alpha();
				}
				if (hotspotTemplates['ht_node'][i]._tt_ht_3d && hotspotTemplates['ht_node'][i]._tt_ht_3d.logicBlock_visible) {
					hotspotTemplates['ht_node'][i]._tt_ht_3d.logicBlock_visible();
				}
				if (hotspotTemplates['ht_node'][i]._hs_tt && hotspotTemplates['ht_node'][i]._hs_tt.logicBlock_visible) {
					hotspotTemplates['ht_node'][i]._hs_tt.logicBlock_visible();
				}
				if (hotspotTemplates['ht_node'][i]._ht_checkmark_tick && hotspotTemplates['ht_node'][i]._ht_checkmark_tick.logicBlock_visible) {
					hotspotTemplates['ht_node'][i]._ht_checkmark_tick.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_node_configloaded = function(){
		if(hotspotTemplates['ht_node']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_node'].length; i++) {
				if (hotspotTemplates['ht_node'][i]._hs_preview_image && hotspotTemplates['ht_node'][i]._hs_preview_image.logicBlock_alpha) {
					hotspotTemplates['ht_node'][i]._hs_preview_image.logicBlock_alpha();
				}
				if (hotspotTemplates['ht_node'][i]._tt_ht_3d && hotspotTemplates['ht_node'][i]._tt_ht_3d.logicBlock_visible) {
					hotspotTemplates['ht_node'][i]._tt_ht_3d.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_node_mouseover = function(){
		if(hotspotTemplates['ht_node']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_node'].length; i++) {
				if (hotspotTemplates['ht_node'][i]._chevron_white_lower && hotspotTemplates['ht_node'][i]._chevron_white_lower.logicBlock_alpha) {
					hotspotTemplates['ht_node'][i]._chevron_white_lower.logicBlock_alpha();
				}
				if (hotspotTemplates['ht_node'][i]._chevron_black && hotspotTemplates['ht_node'][i]._chevron_black.logicBlock_alpha) {
					hotspotTemplates['ht_node'][i]._chevron_black.logicBlock_alpha();
				}
				if (hotspotTemplates['ht_node'][i]._chevron_white && hotspotTemplates['ht_node'][i]._chevron_white.logicBlock_alpha) {
					hotspotTemplates['ht_node'][i]._chevron_white.logicBlock_alpha();
				}
				if (hotspotTemplates['ht_node'][i]._hs_preview_image && hotspotTemplates['ht_node'][i]._hs_preview_image.logicBlock_alpha) {
					hotspotTemplates['ht_node'][i]._hs_preview_image.logicBlock_alpha();
				}
				if (hotspotTemplates['ht_node'][i]._tt_ht_3d && hotspotTemplates['ht_node'][i]._tt_ht_3d.logicBlock_visible) {
					hotspotTemplates['ht_node'][i]._tt_ht_3d.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_node_active = function(){
		if(hotspotTemplates['ht_node']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_node'].length; i++) {
				if (hotspotTemplates['ht_node'][i]._ht_checkmark_tick && hotspotTemplates['ht_node'][i]._ht_checkmark_tick.logicBlock_visible) {
					hotspotTemplates['ht_node'][i]._ht_checkmark_tick.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_node_varchanged_opt_3d_preview = function(){
		if(hotspotTemplates['ht_node']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_node'].length; i++) {
				if (hotspotTemplates['ht_node'][i]._hs_preview_image && hotspotTemplates['ht_node'][i]._hs_preview_image.logicBlock_alpha) {
					hotspotTemplates['ht_node'][i]._hs_preview_image.logicBlock_alpha();
				}
				if (hotspotTemplates['ht_node'][i]._tt_ht_3d && hotspotTemplates['ht_node'][i]._tt_ht_3d.logicBlock_visible) {
					hotspotTemplates['ht_node'][i]._tt_ht_3d.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_url_sizechanged = function(){
		if(hotspotTemplates['ht_url']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_url'].length; i++) {
				if (hotspotTemplates['ht_url'][i]._ht_url.logicBlock_visible) {
					hotspotTemplates['ht_url'][i]._ht_url.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_url_changenode = function(){
		if(hotspotTemplates['ht_url']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_url'].length; i++) {
				if (hotspotTemplates['ht_url'][i]._ht_url.logicBlock_visible) {
					hotspotTemplates['ht_url'][i]._ht_url.logicBlock_visible();
				}
				if (hotspotTemplates['ht_url'][i]._ht_url_image && hotspotTemplates['ht_url'][i]._ht_url_image.logicBlock_visible) {
					hotspotTemplates['ht_url'][i]._ht_url_image.logicBlock_visible();
				}
				if (hotspotTemplates['ht_url'][i]._ht_url_image_newpage && hotspotTemplates['ht_url'][i]._ht_url_image_newpage.logicBlock_visible) {
					hotspotTemplates['ht_url'][i]._ht_url_image_newpage.logicBlock_visible();
				}
				if (hotspotTemplates['ht_url'][i]._tt_ht_url && hotspotTemplates['ht_url'][i]._tt_ht_url.logicBlock_visible) {
					hotspotTemplates['ht_url'][i]._tt_ht_url.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_url_configloaded = function(){
		if(hotspotTemplates['ht_url']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_url'].length; i++) {
				if (hotspotTemplates['ht_url'][i]._ht_url_image && hotspotTemplates['ht_url'][i]._ht_url_image.logicBlock_visible) {
					hotspotTemplates['ht_url'][i]._ht_url_image.logicBlock_visible();
				}
				if (hotspotTemplates['ht_url'][i]._ht_url_image_newpage && hotspotTemplates['ht_url'][i]._ht_url_image_newpage.logicBlock_visible) {
					hotspotTemplates['ht_url'][i]._ht_url_image_newpage.logicBlock_visible();
				}
				if (hotspotTemplates['ht_url'][i]._tt_ht_url && hotspotTemplates['ht_url'][i]._tt_ht_url.logicBlock_position) {
					hotspotTemplates['ht_url'][i]._tt_ht_url.logicBlock_position();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_url_mouseover = function(){
		if(hotspotTemplates['ht_url']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_url'].length; i++) {
				if (hotspotTemplates['ht_url'][i]._tt_ht_url && hotspotTemplates['ht_url'][i]._tt_ht_url.logicBlock_visible) {
					hotspotTemplates['ht_url'][i]._tt_ht_url.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_url_varchanged_vis_website = function(){
		if(hotspotTemplates['ht_url']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_url'].length; i++) {
				if (hotspotTemplates['ht_url'][i]._ht_url.logicBlock_visible) {
					hotspotTemplates['ht_url'][i]._ht_url.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_url_varchanged_opt_url = function(){
		if(hotspotTemplates['ht_url']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_url'].length; i++) {
				if (hotspotTemplates['ht_url'][i]._ht_url_image && hotspotTemplates['ht_url'][i]._ht_url_image.logicBlock_visible) {
					hotspotTemplates['ht_url'][i]._ht_url_image.logicBlock_visible();
				}
				if (hotspotTemplates['ht_url'][i]._ht_url_image_newpage && hotspotTemplates['ht_url'][i]._ht_url_image_newpage.logicBlock_visible) {
					hotspotTemplates['ht_url'][i]._ht_url_image_newpage.logicBlock_visible();
				}
			}
		}
	}
	player.addListener('changenode', function() {
		me.ggUserdata=player.userdata;
	});
	me.skinTimerEvent=function() {
		me.ggCurrentTime=new Date().getTime();
		if (me.elementMouseDown['button_image_right']) {
			player.changePanLog(-0.5,true);
		}
		if (me.elementMouseDown['button_image_left']) {
			player.changePanLog(0.5,true);
		}
		if (me.elementMouseDown['button_image_down']) {
			player.changeTiltLog(-0.5,true);
		}
		if (me.elementMouseDown['button_image_up']) {
			player.changeTiltLog(0.5,true);
		}
		if (me.elementMouseDown['zoomout']) {
			player.changeFovLog(0.5,true);
		}
		if (me.elementMouseDown['zoomin']) {
			player.changeFovLog(-0.5,true);
		}
		me._map_pin_tt.ggUpdateText();
		me._dropdown_menu_title.ggUpdateText();
		me._web_page.ggUpdateText();
		me._map_1.ggUpdateConditionTimer();
		if (!player.getLockedKeyboard()) {
			switch(me.skinKeyPressed) {
				case 37:
					player.changePanLog(0.5,true);
					break;
				case 38:
					player.changeTiltLog(0.5,true);
					break;
				case 39:
					player.changePanLog(-0.5,true);
					break;
				case 40:
					player.changeTiltLog(-0.5,true);
					break;
			}
		}
	};
	player.addListener('timer', me.skinTimerEvent);
	function SkinHotspotClass_ht_node2(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):'';
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_node2=document.createElement('div');
		el.ggId="ht_node";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 75px;';
		hs+='position : absolute;';
		hs+='top : 220px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		hs+='transform-style: preserve-3d;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_node2.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
		}
		me._ht_node2.onclick=function (e) {
			player.openNext(me.hotspot.url,me.hotspot.target);
			skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_node2.ondblclick=function (e) {
			skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_node2.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['ht_node2']=true;
			me._chevron_white_lower1.logicBlock_alpha();
			me._chevron_black1.logicBlock_alpha();
			me._chevron_white1.logicBlock_alpha();
			me._hs_preview_image1.logicBlock_alpha();
			me._tt_ht_3d1.logicBlock_visible();
			skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		me._ht_node2.onmouseout=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['ht_node2']=false;
			me._chevron_white_lower1.logicBlock_alpha();
			me._chevron_black1.logicBlock_alpha();
			me._chevron_white1.logicBlock_alpha();
			me._hs_preview_image1.logicBlock_alpha();
			me._tt_ht_3d1.logicBlock_visible();
			skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		me._ht_node2.ontouchend=function (e) {
			me.elementMouseOver['ht_node2']=false;
			me._chevron_white_lower1.logicBlock_alpha();
			me._chevron_black1.logicBlock_alpha();
			me._chevron_white1.logicBlock_alpha();
			me._hs_preview_image1.logicBlock_alpha();
			me._tt_ht_3d1.logicBlock_visible();
		}
		me._ht_node2.ggUpdatePosition=function (useTransition) {
		}
		el=me._chevron_white_lower1=document.createElement('div');
		els=me._chevron_white_lower1__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMCIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCAxMDAwIDEwMDAiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDEwMDAgMTAwMDsiIHhtbDpzcG'+
			'FjZT0icHJlc2VydmUiPgo8c3R5bGUgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtmaWxsOiNGRkZGRkY7fQo8L3N0eWxlPgo8Zz4KCTxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0zNC45LDQzOS43bDQwMC00MDFjMTcuOS0xNy45LDQxLjctMjUuNCw2NS4yLTI0YzIzLjQtMS40LDQ3LjIsNi4xLDY1LjEsMjRsNDAwLDQwMQoJCWMzMy4yLDMzLjMsMzMuMiw4Ny40LDAsMTIwLjdjLTMzLjIsMzMuMy04Ny4xLDMzLjMtMTIwLjQsMEw1MDAsMjE0LjdMMTU1LjIsNTYwLjRjLTMzLjIsMzMuMy04Ny4xLDMzLjMtMTIwLjQsMAoJCVMxLjcsNDczLDM0LjksNDM5Ljd6Ii8+CjwvZz4KPC9zdmc+Cg==';
		me._chevron_white_lower1__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;chevron_white_lower1;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="chevron_white_lower";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 80px;';
		hs+='left : -10000px;';
		hs+='opacity : 0.6;';
		hs+='position : absolute;';
		hs+='top : -145px;';
		hs+='visibility : inherit;';
		hs+='width : 80px;';
		hs+='pointer-events:auto;';
		hs+='transform:translate3d(0px,0px,-1px);';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._chevron_white_lower1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._chevron_white_lower1.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				(me.elementMouseOver['ht_node2'] == true)
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._chevron_white_lower1.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._chevron_white_lower1.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._chevron_white_lower1.style[domTransition]='opacity 500ms ease 0ms, visibility 500ms ease 0ms';
				if (me._chevron_white_lower1.ggCurrentLogicStateAlpha == 0) {
					me._chevron_white_lower1.style.visibility=me._chevron_white_lower1.ggVisible?'inherit':'hidden';
					me._chevron_white_lower1.style.opacity=1;
				}
				else {
					me._chevron_white_lower1.style.visibility=me._chevron_white_lower1.ggVisible?'inherit':'hidden';
					me._chevron_white_lower1.style.opacity=0.6;
				}
			}
		}
		me._chevron_white_lower1.onclick=function (e) {
			player.openNext("{"+player.getPrevNode()+"}","");
		}
		me._chevron_white_lower1.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me._ht_node2.appendChild(me._chevron_white_lower1);
		el=me._chevron_black1=document.createElement('div');
		els=me._chevron_black1__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMCIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCAxMDAwIDEwMDAiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDEwMDAgMTAwMDsiIHhtbDpzcG'+
			'FjZT0icHJlc2VydmUiPgo8Zz4KCTxwYXRoIGQ9Ik0zNC45LDQzOS43bDQwMC00MDFjMTcuOS0xNy45LDQxLjctMjUuNCw2NS4yLTI0YzIzLjQtMS40LDQ3LjIsNi4xLDY1LjEsMjRsNDAwLDQwMWMzMy4yLDMzLjMsMzMuMiw4Ny40LDAsMTIwLjcKCQljLTMzLjIsMzMuMy04Ny4xLDMzLjMtMTIwLjQsMEw1MDAsMjE0LjdMMTU1LjIsNTYwLjRjLTMzLjIsMzMuMy04Ny4xLDMzLjMtMTIwLjQsMFMxLjcsNDczLDM0LjksNDM5Ljd6Ii8+CjwvZz4KPC9zdmc+Cg==';
		me._chevron_black1__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;chevron_black1;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="chevron_black";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 80px;';
		hs+='left : -10000px;';
		hs+='opacity : 0.4;';
		hs+='position : absolute;';
		hs+='top : -145px;';
		hs+='visibility : inherit;';
		hs+='width : 80px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._chevron_black1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._chevron_black1.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				(me.elementMouseOver['ht_node2'] == true)
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._chevron_black1.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._chevron_black1.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._chevron_black1.style[domTransition]='opacity 500ms ease 0ms, visibility 500ms ease 0ms';
				if (me._chevron_black1.ggCurrentLogicStateAlpha == 0) {
					me._chevron_black1.style.visibility=me._chevron_black1.ggVisible?'inherit':'hidden';
					me._chevron_black1.style.opacity=1;
				}
				else {
					me._chevron_black1.style.visibility=me._chevron_black1.ggVisible?'inherit':'hidden';
					me._chevron_black1.style.opacity=0.4;
				}
			}
		}
		me._chevron_black1.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me._ht_node2.appendChild(me._chevron_black1);
		el=me._chevron_white1=document.createElement('div');
		els=me._chevron_white1__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMCIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCAxMDAwIDEwMDAiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDEwMDAgMTAwMDsiIHhtbDpzcG'+
			'FjZT0icHJlc2VydmUiPgo8c3R5bGUgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtmaWxsOiNGRkZGRkY7fQo8L3N0eWxlPgo8Zz4KCTxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0zNC45LDQzOS43bDQwMC00MDFjMTcuOS0xNy45LDQxLjctMjUuNCw2NS4yLTI0YzIzLjQtMS40LDQ3LjIsNi4xLDY1LjEsMjRsNDAwLDQwMQoJCWMzMy4yLDMzLjMsMzMuMiw4Ny40LDAsMTIwLjdjLTMzLjIsMzMuMy04Ny4xLDMzLjMtMTIwLjQsMEw1MDAsMjE0LjdMMTU1LjIsNTYwLjRjLTMzLjIsMzMuMy04Ny4xLDMzLjMtMTIwLjQsMAoJCVMxLjcsNDczLDM0LjksNDM5Ljd6Ii8+CjwvZz4KPC9zdmc+Cg==';
		me._chevron_white1__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;chevron_white1;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="chevron_white";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 80px;';
		hs+='left : -10000px;';
		hs+='opacity : 0.6;';
		hs+='position : absolute;';
		hs+='top : -145px;';
		hs+='visibility : inherit;';
		hs+='width : 80px;';
		hs+='pointer-events:auto;';
		hs+='transform:translate3d(0px,0px,1px);';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._chevron_white1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._chevron_white1.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				(me.elementMouseOver['ht_node2'] == true)
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._chevron_white1.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._chevron_white1.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._chevron_white1.style[domTransition]='opacity 500ms ease 0ms, visibility 500ms ease 0ms';
				if (me._chevron_white1.ggCurrentLogicStateAlpha == 0) {
					me._chevron_white1.style.visibility=me._chevron_white1.ggVisible?'inherit':'hidden';
					me._chevron_white1.style.opacity=1;
				}
				else {
					me._chevron_white1.style.visibility=me._chevron_white1.ggVisible?'inherit':'hidden';
					me._chevron_white1.style.opacity=0.6;
				}
			}
		}
		me._chevron_white1.onclick=function (e) {
			player.openNext("{"+player.getLastVisitedNode()+"}","");
		}
		me._chevron_white1.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me._ht_node2.appendChild(me._chevron_white1);
		el=me._hs_preview_image1=document.createElement('div');
		els=me._hs_preview_image1__img=document.createElement('img');
		els.className='ggskin ggskin_nodeimage';
		els.setAttribute('src',basePath + "images/hs_preview_image_" + nodeId + ".jpg");
		el.ggNodeId=nodeId;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;hs_preview_image1;');
		els.className='ggskin ggskin_nodeimage';
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="hs_preview_image";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_nodeimage ";
		el.ggType='nodeimage';
		hs ='';
		hs+='z-index: -5;';
		hs+='height : 90px;';
		hs+='left : -10000px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : -220px;';
		hs+='visibility : hidden;';
		hs+='width : 140px;';
		hs+='pointer-events:none;';
		hs+='border-radius: 5px; overflow: hidden; box-shadow: 0px 0px 2px #ffffff; transform:translate3d(0px,0px,80px) rotateX(-90deg) scale(1.5); transform-style: preserve-3d; -webkit-backface-visibility: hidden; backface-visibility: hidden;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._hs_preview_image1.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return this.ggNodeId;
		}
		me._hs_preview_image1.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				(me.elementMouseOver['ht_node2'] == true) && 
				(player.getVariableValue('opt_3d_preview') == true) && 
				(player.getIsTour() == true)
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._hs_preview_image1.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._hs_preview_image1.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._hs_preview_image1.style[domTransition]='opacity 500ms ease 0ms, visibility 500ms ease 0ms';
				if (me._hs_preview_image1.ggCurrentLogicStateAlpha == 0) {
					me._hs_preview_image1.style.visibility=me._hs_preview_image1.ggVisible?'inherit':'hidden';
					me._hs_preview_image1.style.opacity=1;
				}
				else {
					me._hs_preview_image1.style.visibility="hidden";
					me._hs_preview_image1.style.opacity=0;
				}
			}
		}
		me._hs_preview_image1.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		el=me._hs_tt1=document.createElement('div');
		els=me._hs_tt1__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="hs_tt";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='bottom : 0px;';
		hs+='height : 20px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 140px;';
		hs+='pointer-events:none;';
		hs+='text-shadow: 1px 1px 2px #000000;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 100%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='bottom:  0px;';
		hs+='width: 140px;';
		hs+='height: auto;';
		hs+='pointer-events: none;';
		hs+='background: #000000;';
		hs+='background: rgba(0,0,0,0.196078);';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='font-size: 12px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 2px 3px 2px 3px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML=me.hotspot.title;
		el.appendChild(els);
		me._hs_tt1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._hs_tt1.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				(player.getVariableValue('opt_3d_tooltip') == false) && 
				(me.hotspot.title != "")
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._hs_tt1.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._hs_tt1.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._hs_tt1.style[domTransition]='';
				if (me._hs_tt1.ggCurrentLogicStateVisible == 0) {
					me._hs_tt1.style.visibility="hidden";
					me._hs_tt1.ggVisible=false;
				}
				else {
					me._hs_tt1.style.visibility=(Number(me._hs_tt1.style.opacity)>0||!me._hs_tt1.style.opacity)?'inherit':'hidden';
					me._hs_tt1.ggVisible=true;
				}
			}
		}
		me._hs_tt1.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me._hs_preview_image1.appendChild(me._hs_tt1);
		el=me._ht_checkmark_tick1=document.createElement('div');
		els=me._ht_checkmark_tick1__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxNi4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCIgWw0KCTwhRU5USVRZIG5zX2Zsb3dzICJodHRwOi8vbnMuYWRvYmUuY29tL0Zsb3dzLzEuMC8iPg0KCTwhRU5USVRZIG5zX2V4dGVuZCAiaHR0cDovL25zLmFkb2JlLmNvbS9FeHRlbn'+
			'NpYmlsaXR5LzEuMC8iPg0KCTwhRU5USVRZIG5zX2FpICJodHRwOi8vbnMuYWRvYmUuY29tL0Fkb2JlSWxsdXN0cmF0b3IvMTAuMC8iPg0KCTwhRU5USVRZIG5zX2dyYXBocyAiaHR0cDovL25zLmFkb2JlLmNvbS9HcmFwaHMvMS4wLyI+DQpdPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zOng9IiZuc19leHRlbmQ7IiB4bWxuczppPSImbnNfYWk7IiB4bWxuczpncmFwaD0iJm5zX2dyYXBoczsiDQoJIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOmE9Imh0dHA6Ly9ucy5hZG9iZS5jb20vQWRv'+
			'YmVTVkdWaWV3ZXJFeHRlbnNpb25zLzMuMC8iDQoJIHg9IjBweCIgeT0iMHB4IiB3aWR0aD0iMzJweCIgaGVpZ2h0PSIzMnB4IiB2aWV3Qm94PSItMzcyMiAtMjYwNiAzMiAzMiIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAtMzcyMiAtMjYwNiAzMiAzMiINCgkgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+DQo8ZyBpZD0iTGF5ZXJfMSI+DQo8L2c+DQo8ZyBpZD0iRWJlbmVfMSI+DQo8L2c+DQo8ZyBpZD0iTGF5ZXJfMiI+DQoJPGc+DQoJCTxnPg0KCQkJPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTS0zNjk1LjQ3My0yNTk4LjE0NmMtMC41MTktMC41MTktMS4zNjEtMC41MTktMS44NzksMGwtOC43ODcsOC'+
			'43ODdsLTIuMjkxLTIuMjQzDQoJCQkJYy0wLjUyNS0wLjUxMy0xLjM2Ni0wLjUwNC0xLjg4LDAuMDJjLTAuNTEzLDAuNTI1LTAuNTA0LDEuMzY3LDAuMDIxLDEuODhsMy4yMywzLjE2M2MwLjI1OSwwLjI1MywwLjU5NCwwLjM3OSwwLjkzLDAuMzc5DQoJCQkJYzAuMzQsMCwwLjY4LTAuMTMsMC45NC0wLjM5bDkuNzE3LTkuNzE3Qy0zNjk0Ljk1NC0yNTk2Ljc4NS0zNjk0Ljk1NC0yNTk3LjYyNi0zNjk1LjQ3My0yNTk4LjE0NnoiLz4NCgkJCTxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik0tMzY5OS45Ni0yNTgzLjgzN2gtMTIuMzI1di0xMi4zMjZoMTEuODIxbDIuMjUyLTIuMjUyYy0wLjE2Ni0wLjA4'+
			'Ni0wLjM1Mi0wLjE0MS0wLjU1Mi0wLjE0MWgtMTQuNzE4DQoJCQkJYy0wLjY2MSwwLTEuMTk2LDAuNTM2LTEuMTk2LDEuMTk2djE0LjcxOWMwLDAuNjYsMC41MzUsMS4xOTYsMS4xOTYsMS4xOTZoMTQuNzE4YzAuNjYxLDAsMS4xOTctMC41MzYsMS4xOTctMS4xOTZ2LTEwLjQwMw0KCQkJCWwtMi4zOTMsMi4zOTNWLTI1ODMuODM3eiIvPg0KCQk8L2c+DQoJCTxnIG9wYWNpdHk9IjAuNCIgIGE6YWRvYmUtYmxlbmRpbmctbW9kZT0ibXVsdGlwbHkiPg0KCQkJDQoJCQkJPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMUExNzFCIiBzdHJva2Utd2lkdGg9IjEuNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW'+
			'5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiAgYTphZG9iZS1ibGVuZGluZy1tb2RlPSJub3JtYWwiIGQ9Ig0KCQkJCU0tMzY5NS40NzMtMjU5OC4xNDZjLTAuNTE5LTAuNTE5LTEuMzYxLTAuNTE5LTEuODc5LDBsLTguNzg3LDguNzg3bC0yLjI5MS0yLjI0M2MtMC41MjUtMC41MTMtMS4zNjYtMC41MDQtMS44OCwwLjAyDQoJCQkJYy0wLjUxMywwLjUyNS0wLjUwNCwxLjM2NywwLjAyMSwxLjg4bDMuMjMsMy4xNjNjMC4yNTksMC4yNTMsMC41OTQsMC4zNzksMC45MywwLjM3OWMwLjM0LDAsMC42OC0wLjEzLDAuOTQtMC4zOWw5LjcxNy05LjcxNw0KCQkJCUMtMzY5NC45NTQtMjU5Ni43ODUtMzY5'+
			'NC45NTQtMjU5Ny42MjYtMzY5NS40NzMtMjU5OC4xNDZ6Ii8+DQoJCQkNCgkJCQk8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiMxQTE3MUIiIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiICBhOmFkb2JlLWJsZW5kaW5nLW1vZGU9Im5vcm1hbCIgZD0iDQoJCQkJTS0zNjk5Ljk2LTI1ODMuODM3aC0xMi4zMjV2LTEyLjMyNmgxMS44MjFsMi4yNTItMi4yNTJjLTAuMTY2LTAuMDg2LTAuMzUyLTAuMTQxLTAuNTUyLTAuMTQxaC0xNC43MTgNCgkJCQljLTAuNjYxLDAtMS4xOTYsMC41MzYtMS4xOTYsMS4xOTZ2MTQuNzE5YzAsMC'+
			'42NiwwLjUzNSwxLjE5NiwxLjE5NiwxLjE5NmgxNC43MThjMC42NjEsMCwxLjE5Ny0wLjUzNiwxLjE5Ny0xLjE5NnYtMTAuNDAzDQoJCQkJbC0yLjM5MywyLjM5M1YtMjU4My44Mzd6Ii8+DQoJCTwvZz4NCgkJPGc+DQoJCQk8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNLTM2OTUuNDczLTI1OTguMTQ2Yy0wLjUxOS0wLjUxOS0xLjM2MS0wLjUxOS0xLjg3OSwwbC04Ljc4Nyw4Ljc4N2wtMi4yOTEtMi4yNDMNCgkJCQljLTAuNTI1LTAuNTEzLTEuMzY2LTAuNTA0LTEuODgsMC4wMmMtMC41MTMsMC41MjUtMC41MDQsMS4zNjcsMC4wMjEsMS44OGwzLjIzLDMuMTYzYzAuMjU5LDAuMjUzLDAuNTk0LDAu'+
			'Mzc5LDAuOTMsMC4zNzkNCgkJCQljMC4zNCwwLDAuNjgtMC4xMywwLjk0LTAuMzlsOS43MTctOS43MTdDLTM2OTQuOTU0LTI1OTYuNzg1LTM2OTQuOTU0LTI1OTcuNjI2LTM2OTUuNDczLTI1OTguMTQ2eiIvPg0KCQkJPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTS0zNjk5Ljk2LTI1ODMuODM3aC0xMi4zMjV2LTEyLjMyNmgxMS44MjFsMi4yNTItMi4yNTJjLTAuMTY2LTAuMDg2LTAuMzUyLTAuMTQxLTAuNTUyLTAuMTQxaC0xNC43MTgNCgkJCQljLTAuNjYxLDAtMS4xOTYsMC41MzYtMS4xOTYsMS4xOTZ2MTQuNzE5YzAsMC42NiwwLjUzNSwxLjE5NiwxLjE5NiwxLjE5NmgxNC43MThjMC42NjEsMC'+
			'wxLjE5Ny0wLjUzNiwxLjE5Ny0xLjE5NnYtMTAuNDAzDQoJCQkJbC0yLjM5MywyLjM5M1YtMjU4My44Mzd6Ii8+DQoJCTwvZz4NCgkJPGc+DQoJCQk8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiMxQTE3MUIiIHN0cm9rZS13aWR0aD0iMC4yIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGQ9Ik0tMzY5NS40NzMtMjU5OC4xNDYNCgkJCQljLTAuNTE5LTAuNTE5LTEuMzYxLTAuNTE5LTEuODc5LDBsLTguNzg3LDguNzg3bC0yLjI5MS0yLjI0M2MtMC41MjUtMC41MTMtMS4zNjYtMC41MDQtMS44OCwwLjAyDQoJCQkJYy0wLjUxMywwLjUyNS0wLjUwNCwxLjM2'+
			'NywwLjAyMSwxLjg4bDMuMjMsMy4xNjNjMC4yNTksMC4yNTMsMC41OTQsMC4zNzksMC45MywwLjM3OWMwLjM0LDAsMC42OC0wLjEzLDAuOTQtMC4zOWw5LjcxNy05LjcxNw0KCQkJCUMtMzY5NC45NTQtMjU5Ni43ODUtMzY5NC45NTQtMjU5Ny42MjYtMzY5NS40NzMtMjU5OC4xNDZ6Ii8+DQoJCQk8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiMxQTE3MUIiIHN0cm9rZS13aWR0aD0iMC4yIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGQ9Ik0tMzY5OS45Ni0yNTgzLjgzNw0KCQkJCWgtMTIuMzI1di0xMi4zMjZoMTEuODIxbDIuMjUyLTIuMjUyYy0wLjE2Ni'+
			'0wLjA4Ni0wLjM1Mi0wLjE0MS0wLjU1Mi0wLjE0MWgtMTQuNzE4Yy0wLjY2MSwwLTEuMTk2LDAuNTM2LTEuMTk2LDEuMTk2djE0LjcxOQ0KCQkJCWMwLDAuNjYsMC41MzUsMS4xOTYsMS4xOTYsMS4xOTZoMTQuNzE4YzAuNjYxLDAsMS4xOTctMC41MzYsMS4xOTctMS4xOTZ2LTEwLjQwM2wtMi4zOTMsMi4zOTNWLTI1ODMuODM3eiIvPg0KCQk8L2c+DQoJPC9nPg0KPC9nPg0KPC9zdmc+DQo=';
		me._ht_checkmark_tick1__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;ht_checkmark_tick1;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="ht_checkmark_tick";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 30px;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 30px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_checkmark_tick1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_checkmark_tick1.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				(player.nodeVisited(me._ht_checkmark_tick1.ggElementNodeId()) == true) || 
				(me._ht_checkmark_tick1.ggIsActive() == true)
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_checkmark_tick1.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_checkmark_tick1.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_checkmark_tick1.style[domTransition]='';
				if (me._ht_checkmark_tick1.ggCurrentLogicStateVisible == 0) {
					me._ht_checkmark_tick1.style.visibility=(Number(me._ht_checkmark_tick1.style.opacity)>0||!me._ht_checkmark_tick1.style.opacity)?'inherit':'hidden';
					me._ht_checkmark_tick1.ggVisible=true;
				}
				else {
					me._ht_checkmark_tick1.style.visibility="hidden";
					me._ht_checkmark_tick1.ggVisible=false;
				}
			}
		}
		me._ht_checkmark_tick1.ggUpdatePosition=function (useTransition) {
		}
		me._hs_preview_image1.appendChild(me._ht_checkmark_tick1);
		me._ht_node2.appendChild(me._hs_preview_image1);
		el=me.__code1=document.createElement('div');
		els=me.__code1__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="_code";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 37px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : -39px;';
		hs+='visibility : hidden;';
		hs+='width : 66px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 68px;';
		hs+='height: 39px;';
		hs+='pointer-events: none;';
		hs+='background: #ffffff;';
		hs+='border: 1px solid #000000;';
		hs+='color: #000000;';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="";
this.onUpdatePosition=function(player,hotspot) {
var vs=player.getViewerSize();
var y=vs.height * (1/6*(1+Math.cos(player.getTilt() * Math.PI/90.0)));
var hs= 'perspective(500px) translate3d(0px,' + (y) + 'px,0px) ';
hs += 'rotateZ(' + ( player.getRoll()).toFixed(10) + 'deg) ';
hs += 'rotateX(' + ( player.getTilt()).toFixed(10) + 'deg) ';
hs += 'rotateY(' + (-player.getPan()).toFixed(10)  + 'deg) ';
hs += 'rotateY(' + ( hotspot.pan).toFixed(2)  + 'deg) ';
hs += 'rotateX(' + (-hotspot.tilt).toFixed(2) + 'deg) ';
hs += 'rotateX(90deg) ';
this.__div.style.transform=hs;
this.__div.style.left = vs.width / 2 + "px";
this.__div.style.top = vs.height / 2 + "px";
};
		el.appendChild(els);
		me.__code1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me.__code1.ggUpdatePosition=function (useTransition) {
		}
		me._ht_node2.appendChild(me.__code1);
		el=me._tt_ht_3d1=document.createElement('div');
		els=me._tt_ht_3d1__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tt_ht_3d";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 20px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -170px;';
		hs+='visibility : hidden;';
		hs+='width : 150px;';
		hs+='pointer-events:none;';
		hs+='transform:translate3d(0px,0px,40px) rotateX(-90deg); text-shadow: 1px 1px 2px #000000; -webkit-backface-visibility: hidden; backface-visibility: hidden;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 100%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 150px;';
		hs+='height: auto;';
		hs+='pointer-events: none;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='font-size: 18px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 2px 3px 2px 3px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML=me.hotspot.title;
		el.appendChild(els);
		me._tt_ht_3d1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._tt_ht_3d1.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				(player.getIsTour() == false) && 
				(me.hotspot.title != "") && 
				(me.elementMouseOver['ht_node2'] == true) && 
				(player.getVariableValue('opt_3d_preview') == true)
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._tt_ht_3d1.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._tt_ht_3d1.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._tt_ht_3d1.style[domTransition]='';
				if (me._tt_ht_3d1.ggCurrentLogicStateVisible == 0) {
					me._tt_ht_3d1.style.visibility=(Number(me._tt_ht_3d1.style.opacity)>0||!me._tt_ht_3d1.style.opacity)?'inherit':'hidden';
					me._tt_ht_3d1.ggVisible=true;
				}
				else {
					me._tt_ht_3d1.style.visibility="hidden";
					me._tt_ht_3d1.ggVisible=false;
				}
			}
		}
		me._tt_ht_3d1.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me._ht_node2.appendChild(me._tt_ht_3d1);
		me.__div = me._ht_node2;
	};
	function SkinHotspotClass_ht_node1(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):'';
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_node1=document.createElement('div');
		el.ggId="ht_node";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 75px;';
		hs+='position : absolute;';
		hs+='top : 130px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_node1.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
		}
		me._ht_node1.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				(player.getVariableValue('vis_userdata') == true) || 
				(player.getVariableValue('vis_image_popup') == true) || 
				(player.getVariableValue('vis_info_popup') == true) || 
				(player.getVariableValue('vis_video_popup_file') == true) || 
				(player.getVariableValue('vis_video_popup_url') == true) || 
				(player.getVariableValue('vis_video_popup_vimeo') == true) || 
				(player.getVariableValue('vis_video_popup_youtube') == true) || 
				(player.getVariableValue('vis_website') == true)
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_node1.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_node1.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_node1.style[domTransition]='';
				if (me._ht_node1.ggCurrentLogicStateVisible == 0) {
					me._ht_node1.style.visibility="hidden";
					me._ht_node1.ggVisible=false;
				}
				else {
					me._ht_node1.style.visibility=(Number(me._ht_node1.style.opacity)>0||!me._ht_node1.style.opacity)?'inherit':'hidden';
					me._ht_node1.ggVisible=true;
				}
			}
		}
		me._ht_node1.onclick=function (e) {
			player.openNext(me.hotspot.url,me.hotspot.target);
			skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_node1.ondblclick=function (e) {
			skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_node1.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['ht_node1']=true;
			me._hotspot_preview.logicBlock_visible();
			me._tt_ht_node.logicBlock_visible();
			skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		me._ht_node1.onmouseout=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['ht_node1']=false;
			me._hotspot_preview.logicBlock_visible();
			me._tt_ht_node.logicBlock_visible();
			skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		me._ht_node1.ontouchend=function (e) {
			me.elementMouseOver['ht_node1']=false;
			me._hotspot_preview.logicBlock_visible();
			me._tt_ht_node.logicBlock_visible();
		}
		me._ht_node1.ggUpdatePosition=function (useTransition) {
		}
		el=me._ht_node_visited=document.createElement('div');
		els=me._ht_node_visited__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxOS4xLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBiYXNlUHJvZmlsZT0idGlueSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiDQoJIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSItMjQwIDMzMiAxMzAgMTMwIiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxnIG'+
			'lkPSJMYXllcl8xXzFfIj4NCgk8cGF0aCBmaWxsPSIjMDAwMDAwIiBkPSJNLTE3NSwzNDFjLTMxLDAtNTYuMSwyNS4xLTU2LjEsNTYuMWMwLDMxLDI1LjEsNTYuMSw1Ni4xLDU2LjFzNTYuMS0yNS4xLDU2LjEtNTYuMQ0KCQlDLTExOC45LDM2Ni4xLTE0NCwzNDEtMTc1LDM0MXogTS0xNjcuOSwzNjYuNmMwLjUtMC41LDEuNC0wLjUsMiwwbDEuMiwxLjJjMC41LDAuNSwwLjUsMS40LDAsMmwtMjUuMywyNS4zYy0wLjUsMC41LTEuNywxLjUtMiwxLjUNCgkJYy0wLjMsMC4xLTAuOCwwLjEtMS4xLDBjLTAuMy0wLjEtMS40LTEtMi0xLjVsLTcuOC03LjhjLTAuNS0wLjUtMC41LTEuNCwwLTJsMS4yLTEu'+
			'MmMwLjUtMC41LDEuNC0wLjUsMiwwbDcuMiw3LjJMLTE2Ny45LDM2Ni42eg0KCQkgTS0xNTQuOSwzOTRjMC4zLTAuMywwLjYtMC40LDEtMC40YzAuNCwwLDAuNywwLjEsMSwwLjRsOC43LDguNXYxMS40Yy03LjYtMi43LTE2LjctNC4zLTI2LjMtNC43TC0xNTQuOSwzOTR6IE0tMTU0LjYsMzgzDQoJCWMyLjMtMC40LDQuNCwwLjYsNC43LDIuM2MwLjMsMS43LTEuMywzLjQtMy41LDMuOWMtMi4zLDAuNC00LjQtMC42LTQuNy0yLjNDLTE1OC40LDM4NS4yLTE1Ni45LDM4My41LTE1NC42LDM4M3ogTS0xNzMsNDA5LjINCgkJYy0wLjcsMC0xLjMsMC0yLDBjLTExLjEsMC0yMiwxLjctMzAuOCw0Ljh2LT'+
			'YuN2M4LjUtMS40LDE5LjQtMi4zLDMwLjgtMi4zYzIuMSwwLDQuMSwwLDYuMiwwLjFMLTE3Myw0MDkuMnogTS0xNjcsNDAzLjQNCgkJYy0yLjYtMC4xLTUuMy0wLjEtOC0wLjFjLTUuNCwwLTEwLjcsMC4yLTE1LjcsMC41bDE0LjItMTMuOWMwLjktMC45LDIuNC0wLjksMy4zLDBsMTAsOS43TC0xNjcsNDAzLjR6IE0tMTM3LjksNDIwDQoJCWMwLDAuOC0wLjQsMS41LTEuMSwxLjljLTAuNywwLjQtMS41LDAuNS0yLjIsMC4xYy04LjctNC4yLTIxLTYuNi0zMy44LTYuNnMtMjUuMiwyLjQtMzMuOCw2LjZjLTAuMywwLjItMC42LDAuMi0xLDAuMg0KCQljLTAuNCwwLTAuOC0wLjEtMS4yLTAuM2MtMC43'+
			'LTAuNC0xLjEtMS4xLTEuMS0xLjl2LTQ1LjhjMC0wLjgsMC40LTEuNSwxLjEtMS45YzAuNy0wLjQsMS41LTAuNSwyLjItMC4xYzcsMy40LDE2LjQsNS42LDI2LjUsNi4zDQoJCWwtNC4xLDQuMWMtNy44LTAuOS0xNS4xLTIuNi0yMS4xLTV2MzguOWM4LjktMy42LDIwLjYtNS42LDMyLjYtNS42YzEyLDAsMjMuNiwyLDMyLjYsNS42di0zOC45Yy04LjksMy42LTIwLjYsNS42LTMyLjYsNS42DQoJCWMtMC4yLDAtMC41LDAtMC43LDBsNC42LTQuNmMxMS40LTAuNCwyMi4yLTIuNywzMC02LjVjMC43LTAuMywxLjUtMC4zLDIuMiwwLjFjMC43LDAuNCwxLjEsMS4xLDEuMSwxLjlMLTEzNy45LDQyMEwtMT'+
			'M3LjksNDIweiIvPg0KPC9nPg0KPGcgaWQ9IkxheWVyXzIiPg0KCTxnPg0KCQk8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNLTE3Ni41LDM4OS45bC0xNC4yLDEzLjljNS0wLjMsMTAuMy0wLjUsMTUuNy0wLjVjMi43LDAsNS4zLDAsOCwwLjFsMy44LTMuN2wtMTAtOS43DQoJCQlDLTE3NC4xLDM4OS0xNzUuNiwzODktMTc2LjUsMzg5Ljl6Ii8+DQoJCTxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik0tMjA1LjgsNDA3LjN2Ni43YzguOC0zLjEsMTkuNi00LjgsMzAuOC00LjhjMC43LDAsMS4zLDAsMiwwbDQuMi00LjFjLTItMC4xLTQuMS0wLjEtNi4yLTAuMQ0KCQkJQy0xODYuMyw0MDUtMTk3LjMsNDA1'+
			'LjgtMjA1LjgsNDA3LjN6Ii8+DQoJCTxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik0tMTQ0LjIsNDEzLjl2LTExLjRsLTguNy04LjVjLTAuMy0wLjMtMC42LTAuNC0xLTAuNGMtMC40LDAtMC43LDAuMS0xLDAuNGwtMTUuNiwxNS4yDQoJCQlDLTE2MC45LDQwOS42LTE1MS44LDQxMS4zLTE0NC4yLDQxMy45eiIvPg0KCQk8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNLTE1My40LDM4OS4yYzIuMy0wLjQsMy45LTIuMiwzLjUtMy45Yy0wLjMtMS43LTIuNC0yLjctNC43LTIuM2MtMi4zLDAuNC0zLjksMi4yLTMuNSwzLjkNCgkJCUMtMTU3LjgsMzg4LjYtMTU1LjcsMzg5LjYtMTUzLjQsMzg5LjJ6Ii8+DQ'+
			'oJCTxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik0tMTk5LjgsMzg0LjJjLTAuNS0wLjUtMS40LTAuNS0yLDBsLTEuMiwxLjJjLTAuNSwwLjUtMC41LDEuNCwwLDJsNy44LDcuOGMwLjUsMC41LDEuNywxLjUsMiwxLjUNCgkJCWMwLjMsMC4xLDAuOCwwLjEsMS4xLDBjMC4zLTAuMSwxLjQtMSwyLTEuNWwyNS4zLTI1LjNjMC41LTAuNSwwLjUtMS40LDAtMmwtMS4yLTEuMmMtMC41LTAuNS0xLjQtMC41LTIsMGwtMjQuNywyNC43DQoJCQlMLTE5OS44LDM4NC4yeiIvPg0KCQk8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNLTEzOSwzNzIuM2MtMC43LTAuNC0xLjUtMC41LTIuMi0wLjFjLTcuOCwzLjgtMTgu'+
			'Niw2LjEtMzAsNi41bC00LjYsNC42YzAuMiwwLDAuNSwwLDAuNywwDQoJCQljMTIsMCwyMy42LTIsMzIuNi01LjZ2MzguOWMtOC45LTMuNi0yMC42LTUuNi0zMi42LTUuNnMtMjMuNiwyLTMyLjYsNS42di0zOC45YzYsMi40LDEzLjMsNC4xLDIxLjEsNWw0LjEtNC4xDQoJCQljLTEwLjEtMC43LTE5LjUtMi45LTI2LjUtNi4zYy0wLjctMC4zLTEuNS0wLjMtMi4yLDAuMWMtMC43LDAuNC0xLjEsMS4xLTEuMSwxLjlWNDIwYzAsMC44LDAuNCwxLjUsMS4xLDEuOQ0KCQkJYzAuNCwwLjIsMC44LDAuMywxLjIsMC4zYzAuMywwLDAuNy0wLjEsMS0wLjJjOC43LTQuMiwyMS02LjYsMzMuOC02LjZjMTIuOC'+
			'wwLDI1LjIsMi40LDMzLjgsNi42YzAuNywwLjMsMS41LDAuMywyLjItMC4xDQoJCQljMC43LTAuNCwxLjEtMS4xLDEuMS0xLjl2LTQ1LjhDLTEzNy45LDM3My40LTEzOC4zLDM3Mi43LTEzOSwzNzIuM3oiLz4NCgk8L2c+DQo8L2c+DQo8L3N2Zz4NCg==';
		me._ht_node_visited__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;ht_node_visited;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._ht_node_visited__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxOS4xLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBiYXNlUHJvZmlsZT0idGlueSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiDQoJIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSItMjQwIDMzMiAxMzAgMTMwIiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxnIG'+
			'lkPSJMYXllcl8xXzFfIj4NCgk8cGF0aCBmaWxsPSIjMDAwMDAwIiBkPSJNLTE3NSwzMzQuN2MtMzQuNCwwLTYyLjQsMjcuOS02Mi40LDYyLjRjMCwzNC40LDI3LjksNjIuNCw2Mi40LDYyLjRzNjIuNC0yNy45LDYyLjQtNjIuNA0KCQlDLTExMi42LDM2Mi43LTE0MC42LDMzNC43LTE3NSwzMzQuN3ogTS0xNjcuMSwzNjMuMmMwLjYtMC42LDEuNi0wLjYsMi4yLDBsMS4zLDEuM2MwLjYsMC42LDAuNiwxLjYsMCwyLjJsLTI4LjIsMjguMg0KCQljLTAuNiwwLjYtMS45LDEuNi0yLjIsMS43Yy0wLjMsMC4xLTAuOSwwLjEtMS4zLDBjLTAuMy0wLjEtMS42LTEuMS0yLjItMS43bC04LjYtOC42Yy0wLjYt'+
			'MC42LTAuNi0xLjYsMC0yLjJsMS4zLTEuMw0KCQljMC42LTAuNiwxLjYtMC42LDIuMiwwbDgsOEwtMTY3LjEsMzYzLjJ6IE0tMTUyLjcsMzkzLjdjMC4zLTAuMywwLjctMC41LDEuMS0wLjVzMC44LDAuMiwxLjEsMC40bDkuNiw5LjR2MTIuNw0KCQljLTguNC0zLTE4LjYtNC44LTI5LjItNS4yTC0xNTIuNywzOTMuN3ogTS0xNTIuMywzODEuNWMyLjUtMC41LDQuOSwwLjYsNS4zLDIuNWMwLjQsMS45LTEuNCwzLjgtMy45LDQuM2MtMi41LDAuNS00LjktMC42LTUuMy0yLjUNCgkJQy0xNTYuNiwzODMuOS0xNTQuOCwzODItMTUyLjMsMzgxLjV6IE0tMTcyLjgsNDEwLjVjLTAuNywwLTEuNSwwLTIuMi'+
			'wwYy0xMi40LDAtMjQuNSwxLjktMzQuMiw1LjN2LTcuNGM5LjQtMS42LDIxLjYtMi41LDM0LjItMi41DQoJCWMyLjMsMCw0LjYsMCw2LjksMC4xTC0xNzIuOCw0MTAuNXogTS0xNjYuMiw0MDQuMWMtMi45LTAuMS01LjktMC4yLTguOC0wLjJjLTYsMC0xMS44LDAuMi0xNy40LDAuNmwxNS44LTE1LjRjMS0xLDIuNi0xLDMuNywwDQoJCWwxMS4xLDEwLjhMLTE2Ni4yLDQwNC4xeiBNLTEzMy44LDQyMi41YzAsMC45LTAuNCwxLjctMS4yLDIuMWMtMC43LDAuNS0xLjYsMC41LTIuNCwwLjFjLTkuNi00LjYtMjMuMy03LjMtMzcuNi03LjMNCgkJcy0yOCwyLjctMzcuNiw3LjNjLTAuMywwLjItMC43LDAu'+
			'Mi0xLjEsMC4yYy0wLjUsMC0wLjktMC4xLTEuMy0wLjRjLTAuNy0wLjUtMS4yLTEuMy0xLjItMi4xdi01MC45YzAtMC45LDAuNC0xLjcsMS4yLTIuMQ0KCQljMC43LTAuNSwxLjYtMC41LDIuNC0wLjFjNy44LDMuOCwxOC4yLDYuMiwyOS40LDdsLTQuNiw0LjZjLTguNi0wLjktMTYuNy0yLjgtMjMuNC01LjV2NDMuMmM5LjktNCwyMi45LTYuMiwzNi4yLTYuMg0KCQlzMjYuMywyLjIsMzYuMiw2LjJ2LTQzLjJjLTkuOSw0LTIyLjksNi4yLTM2LjIsNi4yYy0wLjMsMC0wLjUsMC0wLjgsMGw1LjEtNS4xYzEyLjctMC41LDI0LjctMywzMy4zLTcuMmMwLjgtMC40LDEuNy0wLjMsMi40LDAuMQ0KCQljMC'+
			'43LDAuNSwxLjIsMS4zLDEuMiwyLjFMLTEzMy44LDQyMi41TC0xMzMuOCw0MjIuNXoiLz4NCjwvZz4NCjxnIGlkPSJMYXllcl8yIj4NCgk8Zz4NCgkJPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTS0xNzYuNiwzODkuMWwtMTUuOCwxNS40YzUuNi0wLjQsMTEuNC0wLjYsMTcuNC0wLjZjMywwLDUuOSwwLjEsOC44LDAuMmw0LjItNC4xbC0xMS4xLTEwLjgNCgkJCUMtMTc0LDM4OC4xLTE3NS42LDM4OC4xLTE3Ni42LDM4OS4xeiIvPg0KCQk8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNLTIwOS4yLDQwOC40djcuNGM5LjctMy40LDIxLjgtNS4zLDM0LjItNS4zYzAuNywwLDEuNSwwLDIuMiwwbDQuNi00'+
			'LjVjLTIuMy0wLjEtNC42LTAuMS02LjktMC4xDQoJCQlDLTE4Ny42LDQwNS45LTE5OS43LDQwNi44LTIwOS4yLDQwOC40eiIvPg0KCQk8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNLTE0MC44LDQxNS44di0xMi43bC05LjYtOS40Yy0wLjMtMC4zLTAuNy0wLjQtMS4xLTAuNGMtMC40LDAtMC44LDAuMi0xLjEsMC41bC0xNy4zLDE2LjkNCgkJCUMtMTU5LjQsNDExLTE0OS4yLDQxMi45LTE0MC44LDQxNS44eiIvPg0KCQk8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNLTE1MSwzODguM2MyLjUtMC41LDQuMy0yLjQsMy45LTQuM2MtMC40LTEuOS0yLjctMy01LjMtMi41Yy0yLjUsMC41LTQuMywyLjQtMy'+
			'45LDQuMw0KCQkJQy0xNTUuOSwzODcuNy0xNTMuNSwzODguOC0xNTEsMzg4LjN6Ii8+DQoJCTxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik0tMjAyLjYsMzgyLjdjLTAuNi0wLjYtMS42LTAuNi0yLjIsMGwtMS4zLDEuM2MtMC42LDAuNi0wLjYsMS42LDAsMi4ybDguNiw4LjZjMC42LDAuNiwxLjksMS42LDIuMiwxLjcNCgkJCWMwLjMsMC4xLDAuOSwwLjEsMS4zLDBjMC4zLTAuMSwxLjYtMS4xLDIuMi0xLjdsMjguMi0yOC4yYzAuNi0wLjYsMC42LTEuNiwwLTIuMmwtMS4zLTEuM2MtMC42LTAuNi0xLjYtMC42LTIuMiwwbC0yNy41LDI3LjUNCgkJCUwtMjAyLjYsMzgyLjd6Ii8+DQoJCTxwYXRoIGZp'+
			'bGw9IiNGRkZGRkYiIGQ9Ik0tMTM1LDM2OS41Yy0wLjctMC41LTEuNi0wLjUtMi40LTAuMWMtOC43LDQuMi0yMC42LDYuNy0zMy4zLDcuMmwtNS4xLDUuMWMwLjMsMCwwLjUsMCwwLjgsMA0KCQkJYzEzLjMsMCwyNi4zLTIuMiwzNi4yLTYuMnY0My4yYy05LjktNC0yMi45LTYuMi0zNi4yLTYuMnMtMjYuMywyLjItMzYuMiw2LjJ2LTQzLjJjNi43LDIuNywxNC44LDQuNiwyMy40LDUuNWw0LjYtNC42DQoJCQljLTExLjItMC44LTIxLjctMy4zLTI5LjQtN2MtMC44LTAuNC0xLjctMC4zLTIuNCwwLjFjLTAuNywwLjUtMS4yLDEuMy0xLjIsMi4xdjUwLjljMCwwLjksMC40LDEuNywxLjIsMi4xDQoJCQ'+
			'ljMC40LDAuMywwLjksMC40LDEuMywwLjRjMC40LDAsMC43LTAuMSwxLjEtMC4yYzkuNi00LjYsMjMuMy03LjMsMzcuNi03LjNjMTQuMywwLDI4LDIuNywzNy42LDcuM2MwLjgsMC40LDEuNywwLjMsMi40LTAuMQ0KCQkJczEuMi0xLjMsMS4yLTIuMXYtNTAuOUMtMTMzLjgsMzcwLjgtMTM0LjMsMzcwLTEzNSwzNjkuNXoiLz4NCgk8L2c+DQo8L2c+DQo8L3N2Zz4NCg==';
		me._ht_node_visited__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;ht_node_visited;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="ht_node_visited";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -16px;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_node_visited.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_node_visited.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				(player.nodeVisited(me._ht_node_visited.ggElementNodeId()) == true)
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_node_visited.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_node_visited.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_node_visited.style[domTransition]='';
				if (me._ht_node_visited.ggCurrentLogicStateVisible == 0) {
					me._ht_node_visited.style.visibility=(Number(me._ht_node_visited.style.opacity)>0||!me._ht_node_visited.style.opacity)?'inherit':'hidden';
					me._ht_node_visited.ggVisible=true;
				}
				else {
					me._ht_node_visited.style.visibility="hidden";
					me._ht_node_visited.ggVisible=false;
				}
			}
		}
		me._ht_node_visited.onmouseover=function (e) {
			me._ht_node_visited__img.style.visibility='hidden';
			me._ht_node_visited__imgo.style.visibility='inherit';
		}
		me._ht_node_visited.onmouseout=function (e) {
			me._ht_node_visited__img.style.visibility='inherit';
			me._ht_node_visited__imgo.style.visibility='hidden';
		}
		me._ht_node_visited.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me._ht_node1.appendChild(me._ht_node_visited);
		el=me._ht_node_image=document.createElement('div');
		els=me._ht_node_image__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxOS4xLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBiYXNlUHJvZmlsZT0idGlueSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiDQoJIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSItMjQwIDMzMiAxMzAgMTMwIiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxnIG'+
			'lkPSJMYXllcl8xXzFfIj4NCgk8Zz4NCgkJPHBhdGggZmlsbD0iIzAwMDAwMCIgZD0iTS0xNzUsMzQxYy0zMSwwLTU2LjEsMjUuMS01Ni4xLDU2LjFjMCwzMSwyNS4xLDU2LjEsNTYuMSw1Ni4xczU2LjEtMjUuMSw1Ni4xLTU2LjENCgkJCUMtMTE4LjksMzY2LjEtMTQ0LDM0MS0xNzUsMzQxeiBNLTEzNy45LDQyMGMwLDAuOC0wLjQsMS41LTEuMSwxLjljLTAuNywwLjQtMS41LDAuNS0yLjIsMC4xYy04LjctNC4yLTIxLTYuNi0zMy44LTYuNg0KCQkJYy0xMi44LDAtMjUuMiwyLjQtMzMuOCw2LjZjLTAuMywwLjItMC42LDAuMi0xLDAuMmMtMC40LDAtMC44LTAuMS0xLjItMC4zYy0wLjctMC40LTEu'+
			'MS0xLjEtMS4xLTEuOXYtNDUuOGMwLTAuOCwwLjQtMS41LDEuMS0xLjkNCgkJCWMwLjctMC40LDEuNS0wLjUsMi4yLTAuMWM4LjcsNC4yLDIxLDYuNiwzMy44LDYuNmMxMi44LDAsMjUuMi0yLjQsMzMuOC02LjZjMC43LTAuMywxLjUtMC4zLDIuMiwwLjFjMC43LDAuNCwxLjEsMS4xLDEuMSwxLjkNCgkJCUMtMTM3LjksMzc0LjItMTM3LjksNDIwLTEzNy45LDQyMHoiLz4NCgkJPHBhdGggZmlsbD0iIzAwMDAwMCIgZD0iTS0yMDcuNiwzNzcuN3YzOC45YzguOS0zLjYsMjAuNi01LjYsMzIuNi01LjZjMTIsMCwyMy42LDIsMzIuNiw1LjZ2LTM4LjljLTguOSwzLjYtMjAuNiw1LjYtMzIuNiw1LjYNCg'+
			'kJCUMtMTg3LDM4My4zLTE5OC42LDM4MS4yLTIwNy42LDM3Ny43eiBNLTE3NSw0MDkuMWMtMTEuMSwwLTIyLDEuNy0zMC44LDQuOHYtNi43YzguNS0xLjQsMTkuNC0yLjMsMzAuOC0yLjNjMi4xLDAsNC4xLDAsNi4yLDAuMQ0KCQkJbC00LjIsNC4xQy0xNzMuNyw0MDkuMi0xNzQuMyw0MDkuMS0xNzUsNDA5LjF6IE0tMTQ0LjIsNDEzLjljLTcuNi0yLjctMTYuNy00LjMtMjYuMy00LjdsMTUuNi0xNS4yYzAuMy0wLjMsMC42LTAuNCwxLTAuNA0KCQkJYzAuNCwwLDAuNywwLjEsMSwwLjRsOC43LDguNUMtMTQ0LjIsNDAyLjUtMTQ0LjIsNDEzLjktMTQ0LjIsNDEzLjl6IE0tMTU0LjYsMzgzYzIuMy0w'+
			'LjQsNC40LDAuNiw0LjcsMi4zDQoJCQljMC4zLDEuNy0xLjMsMy40LTMuNSwzLjljLTIuMywwLjQtNC40LTAuNi00LjctMi4zQy0xNTguNCwzODUuMi0xNTYuOSwzODMuNS0xNTQuNiwzODN6IE0tMTczLjIsMzg5LjlsMTAsOS43bC0zLjgsMy43DQoJCQljLTIuNi0wLjEtNS4zLTAuMS04LTAuMWMtNS40LDAtMTAuNywwLjItMTUuNywwLjVsMTQuMi0xMy45Qy0xNzUuNiwzODktMTc0LjEsMzg5LTE3My4yLDM4OS45eiIvPg0KCTwvZz4NCjwvZz4NCjxnIGlkPSJMYXllcl8yIj4NCgk8Zz4NCgkJPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTS0xOTAuNyw0MDMuOGM1LTAuMywxMC4zLTAuNSwxNS43LT'+
			'AuNWMyLjcsMCw1LjMsMCw4LDAuMWwzLjgtMy43bC0xMC05LjdjLTAuOS0wLjktMi40LTAuOS0zLjMsMA0KCQkJTC0xOTAuNyw0MDMuOHoiLz4NCgkJPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTS0xNzUsNDA1Yy0xMS4zLDAtMjIuMywwLjgtMzAuOCwyLjN2Ni43YzguOC0zLjEsMTkuNi00LjgsMzAuOC00LjhjMC43LDAsMS4zLDAsMiwwbDQuMi00LjENCgkJCUMtMTcwLjksNDA1LTE3Mi45LDQwNS0xNzUsNDA1eiIvPg0KCQk8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNLTE1My45LDM5My42Yy0wLjQsMC0wLjcsMC4xLTEsMC40bC0xNS42LDE1LjJjOS41LDAuNCwxOC43LDIsMjYuMyw0Ljd2LTEx'+
			'LjRsLTguNy04LjUNCgkJCUMtMTUzLjIsMzkzLjgtMTUzLjUsMzkzLjYtMTUzLjksMzkzLjZ6Ii8+DQoJCTxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik0tMTM5LDM3Mi4zYy0wLjctMC40LTEuNS0wLjUtMi4yLTAuMWMtOC43LDQuMi0yMSw2LjYtMzMuOCw2LjZjLTEyLjksMC0yNS4yLTIuNC0zMy44LTYuNg0KCQkJYy0wLjctMC4zLTEuNS0wLjMtMi4yLDAuMWMtMC43LDAuNC0xLjEsMS4xLTEuMSwxLjlWNDIwYzAsMC44LDAuNCwxLjUsMS4xLDEuOWMwLjQsMC4yLDAuOCwwLjMsMS4yLDAuM2MwLjMsMCwwLjctMC4xLDEtMC4yDQoJCQljOC43LTQuMiwyMS02LjYsMzMuOC02LjZjMTIuOCwwLDI1Lj'+
			'IsMi40LDMzLjgsNi42YzAuNywwLjMsMS41LDAuMywyLjItMC4xYzAuNy0wLjQsMS4xLTEuMSwxLjEtMS45di00NS44DQoJCQlDLTEzNy45LDM3My40LTEzOC4zLDM3Mi43LTEzOSwzNzIuM3ogTS0xNDIuNCw0MTYuNWMtOC45LTMuNi0yMC42LTUuNi0zMi42LTUuNnMtMjMuNiwyLTMyLjYsNS42di0zOC45DQoJCQljOC45LDMuNiwyMC42LDUuNiwzMi42LDUuNmMxMiwwLDIzLjYtMiwzMi42LTUuNlY0MTYuNXoiLz4NCgkJPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTS0xNTMuNCwzODkuMmMyLjMtMC40LDMuOS0yLjIsMy41LTMuOWMtMC4zLTEuNy0yLjQtMi43LTQuNy0yLjNjLTIuMywwLjQtMy45'+
			'LDIuMi0zLjUsMy45DQoJCQlDLTE1Ny44LDM4OC42LTE1NS43LDM4OS42LTE1My40LDM4OS4yeiIvPg0KCTwvZz4NCjwvZz4NCjwvc3ZnPg0K';
		me._ht_node_image__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;ht_node_image;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._ht_node_image__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxOS4xLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBiYXNlUHJvZmlsZT0idGlueSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiDQoJIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSItMjQwIDMzMiAxMzAgMTMwIiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxnIG'+
			'lkPSJMYXllcl8xXzFfIj4NCgk8Zz4NCgkJPHBhdGggZmlsbD0iIzAwMDAwMCIgZD0iTS0xNzUsMzM0LjdjLTM0LjQsMC02Mi40LDI3LjktNjIuNCw2Mi40YzAsMzQuNCwyNy45LDYyLjQsNjIuNCw2Mi40czYyLjQtMjcuOSw2Mi40LTYyLjQNCgkJCUMtMTEyLjYsMzYyLjctMTQwLjYsMzM0LjctMTc1LDMzNC43eiBNLTEzMy44LDQyMi41YzAsMC45LTAuNCwxLjctMS4yLDIuMWMtMC43LDAuNS0xLjYsMC41LTIuNCwwLjFjLTkuNi00LjYtMjMuMy03LjMtMzcuNi03LjMNCgkJCXMtMjgsMi43LTM3LjYsNy4zYy0wLjMsMC4yLTAuNywwLjItMS4xLDAuMmMtMC41LDAtMC45LTAuMS0xLjMtMC40Yy0w'+
			'LjctMC41LTEuMi0xLjMtMS4yLTIuMXYtNTAuOWMwLTAuOSwwLjQtMS43LDEuMi0yLjENCgkJCWMwLjctMC41LDEuNi0wLjUsMi40LTAuMWM5LjYsNC42LDIzLjMsNy4zLDM3LjYsNy4zYzE0LjMsMCwyOC0yLjcsMzcuNi03LjNjMC44LTAuNCwxLjctMC4zLDIuNCwwLjFjMC43LDAuNSwxLjIsMS4zLDEuMiwyLjENCgkJCUMtMTMzLjgsMzcxLjctMTMzLjgsNDIyLjUtMTMzLjgsNDIyLjV6Ii8+DQoJCTxwYXRoIGZpbGw9IiMwMDAwMDAiIGQ9Ik0tMjExLjIsMzc1LjV2NDMuMmM5LjktNCwyMi45LTYuMiwzNi4yLTYuMnMyNi4zLDIuMiwzNi4yLDYuMnYtNDMuMmMtOS45LDQtMjIuOSw2LjItMzYuMi'+
			'w2LjINCgkJCUMtMTg4LjMsMzgxLjctMjAxLjMsMzc5LjUtMjExLjIsMzc1LjV6IE0tMTc1LDQxMC41Yy0xMi40LDAtMjQuNCwxLjktMzQuMiw1LjN2LTcuNGM5LjQtMS42LDIxLjYtMi41LDM0LjItMi41DQoJCQljMi4zLDAsNC42LDAsNi45LDAuMWwtNC42LDQuNUMtMTczLjUsNDEwLjUtMTc0LjMsNDEwLjUtMTc1LDQxMC41eiBNLTE0MC44LDQxNS44Yy04LjQtMy0xOC42LTQuOC0yOS4yLTUuMmwxNy4zLTE2LjkNCgkJCWMwLjMtMC4zLDAuNy0wLjUsMS4xLTAuNXMwLjgsMC4yLDEuMSwwLjVsOS42LDkuNEMtMTQwLjgsNDAzLjEtMTQwLjgsNDE1LjgtMTQwLjgsNDE1Ljh6IE0tMTUyLjMsMzgx'+
			'LjVjMi41LTAuNSw0LjksMC42LDUuMywyLjUNCgkJCWMwLjQsMS45LTEuNCwzLjgtMy45LDQuM2MtMi41LDAuNS00LjktMC42LTUuMy0yLjVDLTE1Ni42LDM4My45LTE1NC44LDM4Mi0xNTIuMywzODEuNXogTS0xNzMsMzg5LjFsMTEuMSwxMC44bC00LjIsNC4xDQoJCQljLTIuOS0wLjEtNS45LTAuMi04LjgtMC4yYy02LDAtMTEuOCwwLjItMTcuNCwwLjZsMTUuOC0xNS40Qy0xNzUuNiwzODguMS0xNzQsMzg4LjEtMTczLDM4OS4xeiIvPg0KCTwvZz4NCjwvZz4NCjxnIGlkPSJMYXllcl8yIj4NCgk8Zz4NCgkJPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTS0xOTIuNCw0MDQuNWM1LjYtMC40LDExLj'+
			'QtMC42LDE3LjQtMC42YzMsMCw1LjksMC4xLDguOCwwLjJsNC4yLTQuMWwtMTEuMS0xMC44Yy0xLTEtMi42LTEtMy42LDANCgkJCUwtMTkyLjQsNDA0LjV6Ii8+DQoJCTxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik0tMTc1LDQwNS45Yy0xMi42LDAtMjQuNywwLjktMzQuMiwyLjV2Ny40YzkuNy0zLjQsMjEuOC01LjMsMzQuMi01LjNjMC43LDAsMS41LDAsMi4yLDBsNC42LTQuNQ0KCQkJQy0xNzAuNCw0MDUuOS0xNzIuNyw0MDUuOS0xNzUsNDA1Ljl6Ii8+DQoJCTxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik0tMTUxLjYsMzkzLjJjLTAuNCwwLTAuOCwwLjItMS4xLDAuNWwtMTcuMywxNi45YzEwLjYs'+
			'MC40LDIwLjgsMi4zLDI5LjIsNS4ydi0xMi43bC05LjYtOS40DQoJCQlDLTE1MC43LDM5My40LTE1MS4xLDM5My4yLTE1MS42LDM5My4yeiIvPg0KCQk8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNLTEzNSwzNjkuNWMtMC43LTAuNS0xLjYtMC41LTIuNC0wLjFjLTkuNiw0LjYtMjMuMyw3LjMtMzcuNiw3LjNzLTI4LTIuNy0zNy42LTcuMw0KCQkJYy0wLjgtMC40LTEuNy0wLjMtMi40LDAuMWMtMC43LDAuNS0xLjIsMS4zLTEuMiwyLjF2NTAuOWMwLDAuOSwwLjQsMS43LDEuMiwyLjFjMC40LDAuMywwLjksMC40LDEuMywwLjRjMC40LDAsMC43LTAuMSwxLjEtMC4yDQoJCQljOS42LTQuNiwyMy4zLT'+
			'cuMywzNy42LTcuM2MxNC4zLDAsMjgsMi43LDM3LjYsNy4zYzAuOCwwLjQsMS43LDAuMywyLjQtMC4xczEuMi0xLjMsMS4yLTIuMXYtNTAuOQ0KCQkJQy0xMzMuOCwzNzAuOC0xMzQuMywzNzAtMTM1LDM2OS41eiBNLTEzOC44LDQxOC43Yy05LjktNC0yMi45LTYuMi0zNi4yLTYuMnMtMjYuMywyLjItMzYuMiw2LjJ2LTQzLjJjOS45LDQsMjIuOSw2LjIsMzYuMiw2LjINCgkJCWMxMy4zLDAsMjYuMy0yLjIsMzYuMi02LjJWNDE4Ljd6Ii8+DQoJCTxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik0tMTUxLDM4OC4zYzIuNS0wLjUsNC4zLTIuNCwzLjktNC4zYy0wLjQtMS45LTIuNy0zLTUuMy0yLjVjLTIu'+
			'NSwwLjUtNC4zLDIuNC0zLjksNC4zDQoJCQlDLTE1NS45LDM4Ny43LTE1My41LDM4OC44LTE1MSwzODguM3oiLz4NCgk8L2c+DQo8L2c+DQo8L3N2Zz4NCg==';
		me._ht_node_image__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;ht_node_image;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="ht_node_image";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -16px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_node_image.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_node_image.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				(player.nodeVisited(me._ht_node_image.ggElementNodeId()) == true)
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_node_image.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_node_image.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_node_image.style[domTransition]='';
				if (me._ht_node_image.ggCurrentLogicStateVisible == 0) {
					me._ht_node_image.style.visibility="hidden";
					me._ht_node_image.ggVisible=false;
				}
				else {
					me._ht_node_image.style.visibility=(Number(me._ht_node_image.style.opacity)>0||!me._ht_node_image.style.opacity)?'inherit':'hidden';
					me._ht_node_image.ggVisible=true;
				}
			}
		}
		me._ht_node_image.onmouseover=function (e) {
			me._ht_node_image__img.style.visibility='hidden';
			me._ht_node_image__imgo.style.visibility='inherit';
		}
		me._ht_node_image.onmouseout=function (e) {
			me._ht_node_image__img.style.visibility='inherit';
			me._ht_node_image__imgo.style.visibility='hidden';
		}
		me._ht_node_image.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me._ht_node1.appendChild(me._ht_node_image);
		el=me._hotspot_preview=document.createElement('div');
		el.ggPermeable=false;
		el.ggId="hotspot_preview";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='z-index: 100;';
		hs+='height : 100px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -130px;';
		hs+='visibility : hidden;';
		hs+='width : 150px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._hotspot_preview.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._hotspot_preview.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				(me.elementMouseOver['ht_node1'] == true) && 
				(player.getVariableValue('opt_hotspot_preview') == true) && 
				(player.getIsTour() == true)
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._hotspot_preview.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._hotspot_preview.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._hotspot_preview.style[domTransition]='';
				if (me._hotspot_preview.ggCurrentLogicStateVisible == 0) {
					me._hotspot_preview.style.visibility=(Number(me._hotspot_preview.style.opacity)>0||!me._hotspot_preview.style.opacity)?'inherit':'hidden';
					me._hotspot_preview.ggVisible=true;
				}
				else {
					me._hotspot_preview.style.visibility="hidden";
					me._hotspot_preview.ggVisible=false;
				}
			}
		}
		me._hotspot_preview.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		el=me._ht_preview_picture_frame_=document.createElement('div');
		el.ggId="ht_preview_picture_frame ";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(0,0,0,0.666667);';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 100px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 150px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_preview_picture_frame_.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_preview_picture_frame_.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me._hotspot_preview.appendChild(me._ht_preview_picture_frame_);
		el=me._ht_preview_nodeimage=document.createElement('div');
		els=me._ht_preview_nodeimage__img=document.createElement('img');
		els.className='ggskin ggskin_nodeimage';
		els.setAttribute('src',basePath + "images/hs_preview_image_" + nodeId + ".jpg");
		el.ggNodeId=nodeId;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;ht_preview_nodeimage;');
		els.className='ggskin ggskin_nodeimage';
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="ht_preview_nodeImage";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_nodeimage ";
		el.ggType='nodeimage';
		hs ='';
		hs+='height : 90px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : 5px;';
		hs+='visibility : inherit;';
		hs+='width : 140px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='0% 0%';
		me._ht_preview_nodeimage.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return this.ggNodeId;
		}
		me._ht_preview_nodeimage.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me._hotspot_preview.appendChild(me._ht_preview_nodeimage);
		el=me._ht_tooltip=document.createElement('div');
		els=me._ht_tooltip__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="ht_tooltip";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='bottom : 5px;';
		hs+='height : 20px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 140px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='bottom:  0px;';
		hs+='width: 140px;';
		hs+='height: auto;';
		hs+='background: #000000;';
		hs+='background: rgba(0,0,0,0.392157);';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 2px 3px 2px 3px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML=me.hotspot.title;
		el.appendChild(els);
		me._ht_tooltip.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_tooltip.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				(me.hotspot.title == "")
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_tooltip.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_tooltip.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_tooltip.style[domTransition]='';
				if (me._ht_tooltip.ggCurrentLogicStateVisible == 0) {
					me._ht_tooltip.style.visibility="hidden";
					me._ht_tooltip.ggVisible=false;
				}
				else {
					me._ht_tooltip.style.visibility=(Number(me._ht_tooltip.style.opacity)>0||!me._ht_tooltip.style.opacity)?'inherit':'hidden';
					me._ht_tooltip.ggVisible=true;
				}
			}
		}
		me._ht_tooltip.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me._hotspot_preview.appendChild(me._ht_tooltip);
		el=me._ht_checkmark_tick0=document.createElement('div');
		els=me._ht_checkmark_tick0__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxOS4xLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiDQoJIHZpZXdCb3g9Ii0yNDAgMzMyIDEzMCAxMzAiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgLTI0MCAzMzIgMTMwIDEzMD'+
			'siIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPHN0eWxlIHR5cGU9InRleHQvY3NzIj4NCgkuc3Qwe2ZpbGw6IzAwMDAwMDt9DQoJLnN0MXtmaWxsOiNGRkZGRkY7fQ0KPC9zdHlsZT4NCjxnIGlkPSJMYXllcl8xXzFfIj4NCjwvZz4NCjxnIGlkPSJMYXllcl8yIj4NCgk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNLTEyMi4xLDM0MS41aC0xMDUuOGMtMS40LDAtMi42LDEuMS0yLjYsMi42djEwNS44YzAsMS40LDEuMSwyLjYsMi42LDIuNmgxMDUuOGMxLjQsMCwyLjYtMS4xLDIuNi0yLjZWMzQ0LjENCgkJQy0xMTkuNiwzNDIuNy0xMjAuNywzNDEuNS0xMjIuMSwzNDEuNXogTS0xMzIuOCwzODEuN2wtNTAu'+
			'OCw1MC44Yy0wLjMsMC4zLTAuOCwwLjUtMS4yLDAuNWMtMC41LDAtMC45LTAuMS0xLjMtMC41bC0zMS43LTMxLjgNCgkJYy0wLjctMC43LTAuNy0xLjcsMC0yLjRsMTIuNS0xMi41YzAuNy0wLjcsMS43LTAuNywyLjQsMGwxOCwxOGwzNy4xLTM3LjFjMC43LTAuNywxLjctMC43LDIuNCwwbDEyLjUsMTIuNQ0KCQlDLTEzMi4xLDM3OS45LTEzMi4xLDM4MS0xMzIuOCwzODEuN3oiLz4NCgk8cGF0aCBjbGFzcz0ic3QxIiBkPSJNLTE0Ny43LDM2Ni44bC0zNy4xLDM3LjFsLTE4LTE4Yy0wLjctMC43LTEuNy0wLjctMi40LDBsLTEyLjUsMTIuNWMtMC43LDAuNy0wLjcsMS43LDAsMi40bDMxLjcsMzEuOA'+
			'0KCQljMC4zLDAuMywwLjgsMC41LDEuMywwLjVjMC40LDAsMC45LTAuMiwxLjItMC41bDUwLjgtNTAuOWMwLjctMC43LDAuNy0xLjcsMC0yLjRsLTEyLjUtMTIuNUMtMTQ1LjksMzY2LjEtMTQ3LDM2Ni4xLTE0Ny43LDM2Ni44eiINCgkJLz4NCjwvZz4NCjwvc3ZnPg0K';
		me._ht_checkmark_tick0__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;ht_checkmark_tick0;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="ht_checkmark_tick";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 20px;';
		hs+='position : absolute;';
		hs+='right : 7px;';
		hs+='top : 7px;';
		hs+='visibility : hidden;';
		hs+='width : 20px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_checkmark_tick0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_checkmark_tick0.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				(player.nodeVisited(me._ht_checkmark_tick0.ggElementNodeId()) == true) || 
				(me._ht_checkmark_tick0.ggIsActive() == true)
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_checkmark_tick0.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_checkmark_tick0.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_checkmark_tick0.style[domTransition]='';
				if (me._ht_checkmark_tick0.ggCurrentLogicStateVisible == 0) {
					me._ht_checkmark_tick0.style.visibility=(Number(me._ht_checkmark_tick0.style.opacity)>0||!me._ht_checkmark_tick0.style.opacity)?'inherit':'hidden';
					me._ht_checkmark_tick0.ggVisible=true;
				}
				else {
					me._ht_checkmark_tick0.style.visibility="hidden";
					me._ht_checkmark_tick0.ggVisible=false;
				}
			}
		}
		me._ht_checkmark_tick0.ggUpdatePosition=function (useTransition) {
		}
		me._hotspot_preview.appendChild(me._ht_checkmark_tick0);
		me._ht_node1.appendChild(me._hotspot_preview);
		el=me._tt_ht_node=document.createElement('div');
		els=me._tt_ht_node__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tt_ht_node";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='z-index: 100;';
		hs+='height : 20px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : 22px;';
		hs+='visibility : hidden;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='background: #000000;';
		hs+='background: rgba(0,0,0,0.666667);';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 2px 3px 2px 3px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML=me.hotspot.title;
		el.appendChild(els);
		me._tt_ht_node.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._tt_ht_node.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				(player.getIsMobile() == true)
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._tt_ht_node.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._tt_ht_node.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._tt_ht_node.style[domTransition]='left 0s, top 0s';
				if (me._tt_ht_node.ggCurrentLogicStatePosition == 0) {
					this.ggDx = 0;
					me._tt_ht_node.style.top='-47px';
					me._tt_ht_node.ggUpdatePosition(true);
				}
				else {
					me._tt_ht_node.ggDx=0;
					me._tt_ht_node.style.top='22px';
					me._tt_ht_node.ggUpdatePosition(true);
				}
			}
		}
		me._tt_ht_node.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				(me.elementMouseOver['ht_node1'] == true) && 
				(me.hotspot.title != "") && 
				(player.getIsTour() == false) && 
				(player.getVariableValue('opt_hotspot_preview') == false)
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				(me.elementMouseOver['ht_node1'] == true) && 
				(me.hotspot.title != "") && 
				(player.getIsTour() == true) && 
				(player.getVariableValue('opt_hotspot_preview') == false)
			)
			{
				newLogicStateVisible = 1;
			}
			else if (
				(me.elementMouseOver['ht_node1'] == true) && 
				(me.hotspot.title != "") && 
				(player.getIsTour() == false) && 
				(player.getVariableValue('opt_hotspot_preview') == true)
			)
			{
				newLogicStateVisible = 2;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._tt_ht_node.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._tt_ht_node.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._tt_ht_node.style[domTransition]='left 0s, top 0s';
				if (me._tt_ht_node.ggCurrentLogicStateVisible == 0) {
					me._tt_ht_node.style.visibility=(Number(me._tt_ht_node.style.opacity)>0||!me._tt_ht_node.style.opacity)?'inherit':'hidden';
					me._tt_ht_node.ggVisible=true;
				}
				else if (me._tt_ht_node.ggCurrentLogicStateVisible == 1) {
					me._tt_ht_node.style.visibility=(Number(me._tt_ht_node.style.opacity)>0||!me._tt_ht_node.style.opacity)?'inherit':'hidden';
					me._tt_ht_node.ggVisible=true;
				}
				else if (me._tt_ht_node.ggCurrentLogicStateVisible == 2) {
					me._tt_ht_node.style.visibility=(Number(me._tt_ht_node.style.opacity)>0||!me._tt_ht_node.style.opacity)?'inherit':'hidden';
					me._tt_ht_node.ggVisible=true;
				}
				else {
					me._tt_ht_node.style.visibility="hidden";
					me._tt_ht_node.ggVisible=false;
				}
			}
		}
		me._tt_ht_node.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((98-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me._ht_node1.appendChild(me._tt_ht_node);
		me.__div = me._ht_node1;
	};
	function SkinHotspotClass_ht_node0(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):'';
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_node0=document.createElement('div');
		el.ggId="ht_node";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 71px;';
		hs+='position : absolute;';
		hs+='top : 220px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		hs+='transform-style: preserve-3d;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_node0.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
		}
		me._ht_node0.onclick=function (e) {
			player.openNext(me.hotspot.url,me.hotspot.target);
			skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_node0.ondblclick=function (e) {
			skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_node0.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['ht_node0']=true;
			me._chevron_white_lower0.logicBlock_alpha();
			me._chevron_black0.logicBlock_alpha();
			me._chevron_white0.logicBlock_alpha();
			me._hs_preview_image0.logicBlock_alpha();
			me._tt_ht_3d0.logicBlock_visible();
			skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		me._ht_node0.onmouseout=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['ht_node0']=false;
			me._chevron_white_lower0.logicBlock_alpha();
			me._chevron_black0.logicBlock_alpha();
			me._chevron_white0.logicBlock_alpha();
			me._hs_preview_image0.logicBlock_alpha();
			me._tt_ht_3d0.logicBlock_visible();
			skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		me._ht_node0.ontouchend=function (e) {
			me.elementMouseOver['ht_node0']=false;
			me._chevron_white_lower0.logicBlock_alpha();
			me._chevron_black0.logicBlock_alpha();
			me._chevron_white0.logicBlock_alpha();
			me._hs_preview_image0.logicBlock_alpha();
			me._tt_ht_3d0.logicBlock_visible();
		}
		me._ht_node0.ggUpdatePosition=function (useTransition) {
		}
		el=me._chevron_white_lower0=document.createElement('div');
		els=me._chevron_white_lower0__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMCIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCAxMDAwIDEwMDAiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDEwMDAgMTAwMDsiIHhtbDpzcG'+
			'FjZT0icHJlc2VydmUiPgo8c3R5bGUgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtmaWxsOiNGRkZGRkY7fQo8L3N0eWxlPgo8Zz4KCTxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0zNC45LDQzOS43bDQwMC00MDFjMTcuOS0xNy45LDQxLjctMjUuNCw2NS4yLTI0YzIzLjQtMS40LDQ3LjIsNi4xLDY1LjEsMjRsNDAwLDQwMQoJCWMzMy4yLDMzLjMsMzMuMiw4Ny40LDAsMTIwLjdjLTMzLjIsMzMuMy04Ny4xLDMzLjMtMTIwLjQsMEw1MDAsMjE0LjdMMTU1LjIsNTYwLjRjLTMzLjIsMzMuMy04Ny4xLDMzLjMtMTIwLjQsMAoJCVMxLjcsNDczLDM0LjksNDM5Ljd6Ii8+CjwvZz4KPC9zdmc+Cg==';
		me._chevron_white_lower0__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;chevron_white_lower0;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="chevron_white_lower";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 80px;';
		hs+='left : -10000px;';
		hs+='opacity : 0.6;';
		hs+='position : absolute;';
		hs+='top : -140px;';
		hs+='visibility : inherit;';
		hs+='width : 80px;';
		hs+='pointer-events:auto;';
		hs+='transform:translate3d(0px,0px,-1px);';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._chevron_white_lower0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._chevron_white_lower0.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				(me.elementMouseOver['ht_node0'] == true)
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._chevron_white_lower0.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._chevron_white_lower0.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._chevron_white_lower0.style[domTransition]='opacity 500ms ease 0ms, visibility 500ms ease 0ms';
				if (me._chevron_white_lower0.ggCurrentLogicStateAlpha == 0) {
					me._chevron_white_lower0.style.visibility=me._chevron_white_lower0.ggVisible?'inherit':'hidden';
					me._chevron_white_lower0.style.opacity=1;
				}
				else {
					me._chevron_white_lower0.style.visibility=me._chevron_white_lower0.ggVisible?'inherit':'hidden';
					me._chevron_white_lower0.style.opacity=0.6;
				}
			}
		}
		me._chevron_white_lower0.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me._ht_node0.appendChild(me._chevron_white_lower0);
		el=me._chevron_black0=document.createElement('div');
		els=me._chevron_black0__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMCIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCAxMDAwIDEwMDAiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDEwMDAgMTAwMDsiIHhtbDpzcG'+
			'FjZT0icHJlc2VydmUiPgo8Zz4KCTxwYXRoIGQ9Ik0zNC45LDQzOS43bDQwMC00MDFjMTcuOS0xNy45LDQxLjctMjUuNCw2NS4yLTI0YzIzLjQtMS40LDQ3LjIsNi4xLDY1LjEsMjRsNDAwLDQwMWMzMy4yLDMzLjMsMzMuMiw4Ny40LDAsMTIwLjcKCQljLTMzLjIsMzMuMy04Ny4xLDMzLjMtMTIwLjQsMEw1MDAsMjE0LjdMMTU1LjIsNTYwLjRjLTMzLjIsMzMuMy04Ny4xLDMzLjMtMTIwLjQsMFMxLjcsNDczLDM0LjksNDM5Ljd6Ii8+CjwvZz4KPC9zdmc+Cg==';
		me._chevron_black0__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;chevron_black0;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="chevron_black";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 80px;';
		hs+='left : -10000px;';
		hs+='opacity : 0.4;';
		hs+='position : absolute;';
		hs+='top : -140px;';
		hs+='visibility : inherit;';
		hs+='width : 80px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._chevron_black0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._chevron_black0.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				(me.elementMouseOver['ht_node0'] == true)
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._chevron_black0.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._chevron_black0.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._chevron_black0.style[domTransition]='opacity 500ms ease 0ms, visibility 500ms ease 0ms';
				if (me._chevron_black0.ggCurrentLogicStateAlpha == 0) {
					me._chevron_black0.style.visibility=me._chevron_black0.ggVisible?'inherit':'hidden';
					me._chevron_black0.style.opacity=1;
				}
				else {
					me._chevron_black0.style.visibility=me._chevron_black0.ggVisible?'inherit':'hidden';
					me._chevron_black0.style.opacity=0.4;
				}
			}
		}
		me._chevron_black0.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me._ht_node0.appendChild(me._chevron_black0);
		el=me._chevron_white0=document.createElement('div');
		els=me._chevron_white0__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMCIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCAxMDAwIDEwMDAiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDEwMDAgMTAwMDsiIHhtbDpzcG'+
			'FjZT0icHJlc2VydmUiPgo8c3R5bGUgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtmaWxsOiNGRkZGRkY7fQo8L3N0eWxlPgo8Zz4KCTxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0zNC45LDQzOS43bDQwMC00MDFjMTcuOS0xNy45LDQxLjctMjUuNCw2NS4yLTI0YzIzLjQtMS40LDQ3LjIsNi4xLDY1LjEsMjRsNDAwLDQwMQoJCWMzMy4yLDMzLjMsMzMuMiw4Ny40LDAsMTIwLjdjLTMzLjIsMzMuMy04Ny4xLDMzLjMtMTIwLjQsMEw1MDAsMjE0LjdMMTU1LjIsNTYwLjRjLTMzLjIsMzMuMy04Ny4xLDMzLjMtMTIwLjQsMAoJCVMxLjcsNDczLDM0LjksNDM5Ljd6Ii8+CjwvZz4KPC9zdmc+Cg==';
		me._chevron_white0__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;chevron_white0;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="chevron_white";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 80px;';
		hs+='left : -10000px;';
		hs+='opacity : 0.6;';
		hs+='position : absolute;';
		hs+='top : -140px;';
		hs+='visibility : inherit;';
		hs+='width : 80px;';
		hs+='pointer-events:auto;';
		hs+='transform:translate3d(0px,0px,1px);';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._chevron_white0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._chevron_white0.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				(me.elementMouseOver['ht_node0'] == true)
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._chevron_white0.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._chevron_white0.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._chevron_white0.style[domTransition]='opacity 500ms ease 0ms, visibility 500ms ease 0ms';
				if (me._chevron_white0.ggCurrentLogicStateAlpha == 0) {
					me._chevron_white0.style.visibility=me._chevron_white0.ggVisible?'inherit':'hidden';
					me._chevron_white0.style.opacity=1;
				}
				else {
					me._chevron_white0.style.visibility=me._chevron_white0.ggVisible?'inherit':'hidden';
					me._chevron_white0.style.opacity=0.6;
				}
			}
		}
		me._chevron_white0.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me._ht_node0.appendChild(me._chevron_white0);
		el=me._hs_preview_image0=document.createElement('div');
		els=me._hs_preview_image0__img=document.createElement('img');
		els.className='ggskin ggskin_nodeimage';
		els.setAttribute('src',basePath + "images/hs_preview_image_" + nodeId + ".jpg");
		el.ggNodeId=nodeId;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;hs_preview_image0;');
		els.className='ggskin ggskin_nodeimage';
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="hs_preview_image";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_nodeimage ";
		el.ggType='nodeimage';
		hs ='';
		hs+='z-index: -5;';
		hs+='height : 90px;';
		hs+='left : -10000px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : -220px;';
		hs+='visibility : hidden;';
		hs+='width : 140px;';
		hs+='pointer-events:none;';
		hs+='border-radius: 5px; overflow: hidden; box-shadow: 0px 0px 2px #000000; transform:translate3d(0px,0px,90px) rotateX(-90deg) scale(1.5); transform-style: preserve-3d; -webkit-backface-visibility: hidden; backface-visibility: hidden;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._hs_preview_image0.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return this.ggNodeId;
		}
		me._hs_preview_image0.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				(me.elementMouseOver['ht_node0'] == true) && 
				(player.getVariableValue('opt_3d_preview') == true) && 
				(player.getIsTour() == true)
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._hs_preview_image0.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._hs_preview_image0.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._hs_preview_image0.style[domTransition]='opacity 500ms ease 0ms, visibility 500ms ease 0ms';
				if (me._hs_preview_image0.ggCurrentLogicStateAlpha == 0) {
					me._hs_preview_image0.style.visibility=me._hs_preview_image0.ggVisible?'inherit':'hidden';
					me._hs_preview_image0.style.opacity=1;
				}
				else {
					me._hs_preview_image0.style.visibility="hidden";
					me._hs_preview_image0.style.opacity=0;
				}
			}
		}
		me._hs_preview_image0.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		el=me._hs_tt0=document.createElement('div');
		els=me._hs_tt0__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="hs_tt";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='bottom : 0px;';
		hs+='height : 20px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 140px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 100%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='bottom:  0px;';
		hs+='width: 140px;';
		hs+='height: auto;';
		hs+='pointer-events: none;';
		hs+='background: #000000;';
		hs+='background: rgba(0,0,0,0.196078);';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='font-size: 12px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 2px 3px 2px 3px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML=me.hotspot.title;
		el.appendChild(els);
		me._hs_tt0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._hs_tt0.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				(player.getVariableValue('opt_3d_tooltip') == false) && 
				(me.hotspot.title == "")
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._hs_tt0.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._hs_tt0.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._hs_tt0.style[domTransition]='';
				if (me._hs_tt0.ggCurrentLogicStateVisible == 0) {
					me._hs_tt0.style.visibility="hidden";
					me._hs_tt0.ggVisible=false;
				}
				else {
					me._hs_tt0.style.visibility=(Number(me._hs_tt0.style.opacity)>0||!me._hs_tt0.style.opacity)?'inherit':'hidden';
					me._hs_tt0.ggVisible=true;
				}
			}
		}
		me._hs_tt0.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me._hs_preview_image0.appendChild(me._hs_tt0);
		el=me._hs_visited=document.createElement('div');
		els=me._hs_visited__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxOS4xLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiDQoJIHZpZXdCb3g9Ii0yNDAgMzMyIDEzMCAxMzAiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgLTI0MCAzMzIgMTMwIDEzMD'+
			'siIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPHN0eWxlIHR5cGU9InRleHQvY3NzIj4NCgkuc3Qwe2ZpbGw6IzAwMDAwMDt9DQoJLnN0MXtmaWxsOiNGRkZGRkY7fQ0KPC9zdHlsZT4NCjxnIGlkPSJMYXllcl8xXzFfIj4NCjwvZz4NCjxnIGlkPSJMYXllcl8yIj4NCgk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNLTEyMi4xLDM0MS41aC0xMDUuOGMtMS40LDAtMi42LDEuMS0yLjYsMi42djEwNS44YzAsMS40LDEuMSwyLjYsMi42LDIuNmgxMDUuOGMxLjQsMCwyLjYtMS4xLDIuNi0yLjZWMzQ0LjENCgkJQy0xMTkuNiwzNDIuNy0xMjAuNywzNDEuNS0xMjIuMSwzNDEuNXogTS0xMzIuOCwzODEuN2wtNTAu'+
			'OCw1MC44Yy0wLjMsMC4zLTAuOCwwLjUtMS4yLDAuNWMtMC41LDAtMC45LTAuMS0xLjMtMC41bC0zMS43LTMxLjgNCgkJYy0wLjctMC43LTAuNy0xLjcsMC0yLjRsMTIuNS0xMi41YzAuNy0wLjcsMS43LTAuNywyLjQsMGwxOCwxOGwzNy4xLTM3LjFjMC43LTAuNywxLjctMC43LDIuNCwwbDEyLjUsMTIuNQ0KCQlDLTEzMi4xLDM3OS45LTEzMi4xLDM4MS0xMzIuOCwzODEuN3oiLz4NCgk8cGF0aCBjbGFzcz0ic3QxIiBkPSJNLTE0Ny43LDM2Ni44bC0zNy4xLDM3LjFsLTE4LTE4Yy0wLjctMC43LTEuNy0wLjctMi40LDBsLTEyLjUsMTIuNWMtMC43LDAuNy0wLjcsMS43LDAsMi40bDMxLjcsMzEuOA'+
			'0KCQljMC4zLDAuMywwLjgsMC41LDEuMywwLjVjMC40LDAsMC45LTAuMiwxLjItMC41bDUwLjgtNTAuOWMwLjctMC43LDAuNy0xLjcsMC0yLjRsLTEyLjUtMTIuNUMtMTQ1LjksMzY2LjEtMTQ3LDM2Ni4xLTE0Ny43LDM2Ni44eiINCgkJLz4NCjwvZz4NCjwvc3ZnPg0K';
		me._hs_visited__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;hs_visited;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="hs_visited";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 20px;';
		hs+='position : absolute;';
		hs+='right : 5px;';
		hs+='top : 5px;';
		hs+='visibility : hidden;';
		hs+='width : 20px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._hs_visited.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._hs_visited.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				(me._hs_visited.ggIsActive() == true) || 
				(player.nodeVisited(me._hs_visited.ggElementNodeId()) == true)
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._hs_visited.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._hs_visited.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._hs_visited.style[domTransition]='';
				if (me._hs_visited.ggCurrentLogicStateVisible == 0) {
					me._hs_visited.style.visibility=(Number(me._hs_visited.style.opacity)>0||!me._hs_visited.style.opacity)?'inherit':'hidden';
					me._hs_visited.ggVisible=true;
				}
				else {
					me._hs_visited.style.visibility="hidden";
					me._hs_visited.ggVisible=false;
				}
			}
		}
		me._hs_visited.ggUpdatePosition=function (useTransition) {
		}
		me._hs_preview_image0.appendChild(me._hs_visited);
		me._ht_node0.appendChild(me._hs_preview_image0);
		el=me.__code0=document.createElement('div');
		els=me.__code0__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="_code";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 37px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : -39px;';
		hs+='visibility : hidden;';
		hs+='width : 66px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 68px;';
		hs+='height: 39px;';
		hs+='pointer-events: none;';
		hs+='background: #ffffff;';
		hs+='border: 1px solid #000000;';
		hs+='color: #000000;';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="";
this.onUpdatePosition=function(player,hotspot) {
var vs=player.getViewerSize();
var y=vs.height * (1/6*(1+Math.cos(player.getTilt() * Math.PI/90.0)));
var hs= 'perspective(500px) translate3d(0px,' + (y) + 'px,0px) ';
hs += 'rotateZ(' + ( player.getRoll()).toFixed(10) + 'deg) ';
hs += 'rotateX(' + ( player.getTilt()).toFixed(10) + 'deg) ';
hs += 'rotateY(' + (-player.getPan()).toFixed(10)  + 'deg) ';
hs += 'rotateY(' + ( hotspot.pan).toFixed(2)  + 'deg) ';
hs += 'rotateX(' + (-hotspot.tilt).toFixed(2) + 'deg) ';
hs += 'rotateX(90deg) ';
this.__div.style.transform=hs;
this.__div.style.left = vs.width / 2 + "px";
this.__div.style.top = vs.height / 2 + "px";
};
		el.appendChild(els);
		me.__code0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me.__code0.ggUpdatePosition=function (useTransition) {
		}
		me._ht_node0.appendChild(me.__code0);
		el=me._tt_ht_3d0=document.createElement('div');
		els=me._tt_ht_3d0__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tt_ht_3d";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 20px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -170px;';
		hs+='visibility : hidden;';
		hs+='width : 140px;';
		hs+='pointer-events:none;';
		hs+='transform:translate3d(0px,0px,40px) rotateX(-90deg); font-size: 15px; -webkit-backface-visibility: hidden; backface-visibility: hidden;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 100%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='pointer-events: none;';
		hs+='background: #000000;';
		hs+='background: rgba(0,0,0,0.666667);';
		hs+='border: 1px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='font-size: 16px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 2px 3px 2px 3px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML=me.hotspot.title;
		el.appendChild(els);
		me._tt_ht_3d0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._tt_ht_3d0.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				(player.getIsTour() == false) && 
				(me.hotspot.title != "") && 
				(me.elementMouseOver['ht_node0'] == true) && 
				(player.getVariableValue('opt_3d_preview') == true)
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._tt_ht_3d0.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._tt_ht_3d0.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._tt_ht_3d0.style[domTransition]='';
				if (me._tt_ht_3d0.ggCurrentLogicStateVisible == 0) {
					me._tt_ht_3d0.style.visibility=(Number(me._tt_ht_3d0.style.opacity)>0||!me._tt_ht_3d0.style.opacity)?'inherit':'hidden';
					me._tt_ht_3d0.ggVisible=true;
				}
				else {
					me._tt_ht_3d0.style.visibility="hidden";
					me._tt_ht_3d0.ggVisible=false;
				}
			}
		}
		me._tt_ht_3d0.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 2;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((142-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me._ht_node0.appendChild(me._tt_ht_3d0);
		me.__div = me._ht_node0;
	};
	function SkinHotspotClass_ht_node(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):'';
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_node=document.createElement('div');
		el.ggId="ht_node";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 75px;';
		hs+='position : absolute;';
		hs+='top : 220px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		hs+='transform-style: preserve-3d;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_node.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
		}
		me._ht_node.onclick=function (e) {
			player.openNext(me.hotspot.url,me.hotspot.target);
			skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_node.ondblclick=function (e) {
			skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_node.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['ht_node']=true;
			me._chevron_white_lower.logicBlock_alpha();
			me._chevron_black.logicBlock_alpha();
			me._chevron_white.logicBlock_alpha();
			me._hs_preview_image.logicBlock_alpha();
			me._tt_ht_3d.logicBlock_visible();
			skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		me._ht_node.onmouseout=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['ht_node']=false;
			me._chevron_white_lower.logicBlock_alpha();
			me._chevron_black.logicBlock_alpha();
			me._chevron_white.logicBlock_alpha();
			me._hs_preview_image.logicBlock_alpha();
			me._tt_ht_3d.logicBlock_visible();
			skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		me._ht_node.ontouchend=function (e) {
			me.elementMouseOver['ht_node']=false;
			me._chevron_white_lower.logicBlock_alpha();
			me._chevron_black.logicBlock_alpha();
			me._chevron_white.logicBlock_alpha();
			me._hs_preview_image.logicBlock_alpha();
			me._tt_ht_3d.logicBlock_visible();
		}
		me._ht_node.ggUpdatePosition=function (useTransition) {
		}
		el=me._chevron_white_lower=document.createElement('div');
		els=me._chevron_white_lower__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMCIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCAxMDAwIDEwMDAiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDEwMDAgMTAwMDsiIHhtbDpzcG'+
			'FjZT0icHJlc2VydmUiPgo8c3R5bGUgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtmaWxsOiNGRkZGRkY7fQo8L3N0eWxlPgo8Zz4KCTxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0zNC45LDQzOS43bDQwMC00MDFjMTcuOS0xNy45LDQxLjctMjUuNCw2NS4yLTI0YzIzLjQtMS40LDQ3LjIsNi4xLDY1LjEsMjRsNDAwLDQwMQoJCWMzMy4yLDMzLjMsMzMuMiw4Ny40LDAsMTIwLjdjLTMzLjIsMzMuMy04Ny4xLDMzLjMtMTIwLjQsMEw1MDAsMjE0LjdMMTU1LjIsNTYwLjRjLTMzLjIsMzMuMy04Ny4xLDMzLjMtMTIwLjQsMAoJCVMxLjcsNDczLDM0LjksNDM5Ljd6Ii8+CjwvZz4KPC9zdmc+Cg==';
		me._chevron_white_lower__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;chevron_white_lower;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="chevron_white_lower";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 80px;';
		hs+='left : -10000px;';
		hs+='opacity : 0.6;';
		hs+='position : absolute;';
		hs+='top : -145px;';
		hs+='visibility : inherit;';
		hs+='width : 80px;';
		hs+='pointer-events:auto;';
		hs+='transform:translate3d(0px,0px,-1px);';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._chevron_white_lower.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._chevron_white_lower.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				(me.elementMouseOver['ht_node'] == true)
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._chevron_white_lower.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._chevron_white_lower.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._chevron_white_lower.style[domTransition]='opacity 500ms ease 0ms, visibility 500ms ease 0ms';
				if (me._chevron_white_lower.ggCurrentLogicStateAlpha == 0) {
					me._chevron_white_lower.style.visibility=me._chevron_white_lower.ggVisible?'inherit':'hidden';
					me._chevron_white_lower.style.opacity=1;
				}
				else {
					me._chevron_white_lower.style.visibility=me._chevron_white_lower.ggVisible?'inherit':'hidden';
					me._chevron_white_lower.style.opacity=0.6;
				}
			}
		}
		me._chevron_white_lower.onclick=function (e) {
			player.openNext("{"+player.getPrevNode()+"}","");
		}
		me._chevron_white_lower.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me._ht_node.appendChild(me._chevron_white_lower);
		el=me._chevron_black=document.createElement('div');
		els=me._chevron_black__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMCIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCAxMDAwIDEwMDAiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDEwMDAgMTAwMDsiIHhtbDpzcG'+
			'FjZT0icHJlc2VydmUiPgo8Zz4KCTxwYXRoIGQ9Ik0zNC45LDQzOS43bDQwMC00MDFjMTcuOS0xNy45LDQxLjctMjUuNCw2NS4yLTI0YzIzLjQtMS40LDQ3LjIsNi4xLDY1LjEsMjRsNDAwLDQwMWMzMy4yLDMzLjMsMzMuMiw4Ny40LDAsMTIwLjcKCQljLTMzLjIsMzMuMy04Ny4xLDMzLjMtMTIwLjQsMEw1MDAsMjE0LjdMMTU1LjIsNTYwLjRjLTMzLjIsMzMuMy04Ny4xLDMzLjMtMTIwLjQsMFMxLjcsNDczLDM0LjksNDM5Ljd6Ii8+CjwvZz4KPC9zdmc+Cg==';
		me._chevron_black__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;chevron_black;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="chevron_black";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 80px;';
		hs+='left : -10000px;';
		hs+='opacity : 0.4;';
		hs+='position : absolute;';
		hs+='top : -145px;';
		hs+='visibility : inherit;';
		hs+='width : 80px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._chevron_black.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._chevron_black.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				(me.elementMouseOver['ht_node'] == true)
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._chevron_black.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._chevron_black.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._chevron_black.style[domTransition]='opacity 500ms ease 0ms, visibility 500ms ease 0ms';
				if (me._chevron_black.ggCurrentLogicStateAlpha == 0) {
					me._chevron_black.style.visibility=me._chevron_black.ggVisible?'inherit':'hidden';
					me._chevron_black.style.opacity=1;
				}
				else {
					me._chevron_black.style.visibility=me._chevron_black.ggVisible?'inherit':'hidden';
					me._chevron_black.style.opacity=0.4;
				}
			}
		}
		me._chevron_black.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me._ht_node.appendChild(me._chevron_black);
		el=me._chevron_white=document.createElement('div');
		els=me._chevron_white__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMCIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCAxMDAwIDEwMDAiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDEwMDAgMTAwMDsiIHhtbDpzcG'+
			'FjZT0icHJlc2VydmUiPgo8c3R5bGUgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtmaWxsOiNGRkZGRkY7fQo8L3N0eWxlPgo8Zz4KCTxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0zNC45LDQzOS43bDQwMC00MDFjMTcuOS0xNy45LDQxLjctMjUuNCw2NS4yLTI0YzIzLjQtMS40LDQ3LjIsNi4xLDY1LjEsMjRsNDAwLDQwMQoJCWMzMy4yLDMzLjMsMzMuMiw4Ny40LDAsMTIwLjdjLTMzLjIsMzMuMy04Ny4xLDMzLjMtMTIwLjQsMEw1MDAsMjE0LjdMMTU1LjIsNTYwLjRjLTMzLjIsMzMuMy04Ny4xLDMzLjMtMTIwLjQsMAoJCVMxLjcsNDczLDM0LjksNDM5Ljd6Ii8+CjwvZz4KPC9zdmc+Cg==';
		me._chevron_white__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;chevron_white;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="chevron_white";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 80px;';
		hs+='left : -10000px;';
		hs+='opacity : 0.6;';
		hs+='position : absolute;';
		hs+='top : -145px;';
		hs+='visibility : inherit;';
		hs+='width : 80px;';
		hs+='pointer-events:auto;';
		hs+='transform:translate3d(0px,0px,1px);';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._chevron_white.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._chevron_white.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				(me.elementMouseOver['ht_node'] == true)
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._chevron_white.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._chevron_white.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._chevron_white.style[domTransition]='opacity 500ms ease 0ms, visibility 500ms ease 0ms';
				if (me._chevron_white.ggCurrentLogicStateAlpha == 0) {
					me._chevron_white.style.visibility=me._chevron_white.ggVisible?'inherit':'hidden';
					me._chevron_white.style.opacity=1;
				}
				else {
					me._chevron_white.style.visibility=me._chevron_white.ggVisible?'inherit':'hidden';
					me._chevron_white.style.opacity=0.6;
				}
			}
		}
		me._chevron_white.onclick=function (e) {
			player.openNext("{"+player.getNextNode()+"}","");
		}
		me._chevron_white.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me._ht_node.appendChild(me._chevron_white);
		el=me._hs_preview_image=document.createElement('div');
		els=me._hs_preview_image__img=document.createElement('img');
		els.className='ggskin ggskin_nodeimage';
		els.setAttribute('src',basePath + "images/hs_preview_image_" + nodeId + ".jpg");
		el.ggNodeId=nodeId;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;hs_preview_image;');
		els.className='ggskin ggskin_nodeimage';
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="hs_preview_image";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_nodeimage ";
		el.ggType='nodeimage';
		hs ='';
		hs+='z-index: -5;';
		hs+='height : 90px;';
		hs+='left : -10000px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : -220px;';
		hs+='visibility : hidden;';
		hs+='width : 140px;';
		hs+='pointer-events:none;';
		hs+='border-radius: 5px; overflow: hidden; box-shadow: 0px 0px 2px #ffffff; transform:translate3d(0px,0px,80px) rotateX(-90deg) scale(1.5); transform-style: preserve-3d; -webkit-backface-visibility: hidden; backface-visibility: hidden;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._hs_preview_image.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return this.ggNodeId;
		}
		me._hs_preview_image.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				(me.elementMouseOver['ht_node'] == true) && 
				(player.getVariableValue('opt_3d_preview') == true) && 
				(player.getIsTour() == true)
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._hs_preview_image.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._hs_preview_image.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._hs_preview_image.style[domTransition]='opacity 500ms ease 0ms, visibility 500ms ease 0ms';
				if (me._hs_preview_image.ggCurrentLogicStateAlpha == 0) {
					me._hs_preview_image.style.visibility=me._hs_preview_image.ggVisible?'inherit':'hidden';
					me._hs_preview_image.style.opacity=1;
				}
				else {
					me._hs_preview_image.style.visibility="hidden";
					me._hs_preview_image.style.opacity=0;
				}
			}
		}
		me._hs_preview_image.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		el=me._hs_tt=document.createElement('div');
		els=me._hs_tt__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="hs_tt";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='bottom : 0px;';
		hs+='height : 20px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 140px;';
		hs+='pointer-events:none;';
		hs+='text-shadow: 1px 1px 2px #000000;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 100%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='bottom:  0px;';
		hs+='width: 140px;';
		hs+='height: auto;';
		hs+='pointer-events: none;';
		hs+='background: #000000;';
		hs+='background: rgba(0,0,0,0.196078);';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='font-size: 12px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 2px 3px 2px 3px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML=me.hotspot.title;
		el.appendChild(els);
		me._hs_tt.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._hs_tt.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				(player.getVariableValue('opt_3d_tooltip') == false) && 
				(me.hotspot.title != "")
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._hs_tt.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._hs_tt.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._hs_tt.style[domTransition]='';
				if (me._hs_tt.ggCurrentLogicStateVisible == 0) {
					me._hs_tt.style.visibility="hidden";
					me._hs_tt.ggVisible=false;
				}
				else {
					me._hs_tt.style.visibility=(Number(me._hs_tt.style.opacity)>0||!me._hs_tt.style.opacity)?'inherit':'hidden';
					me._hs_tt.ggVisible=true;
				}
			}
		}
		me._hs_tt.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me._hs_preview_image.appendChild(me._hs_tt);
		el=me._ht_checkmark_tick=document.createElement('div');
		els=me._ht_checkmark_tick__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxNi4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCIgWw0KCTwhRU5USVRZIG5zX2Zsb3dzICJodHRwOi8vbnMuYWRvYmUuY29tL0Zsb3dzLzEuMC8iPg0KCTwhRU5USVRZIG5zX2V4dGVuZCAiaHR0cDovL25zLmFkb2JlLmNvbS9FeHRlbn'+
			'NpYmlsaXR5LzEuMC8iPg0KCTwhRU5USVRZIG5zX2FpICJodHRwOi8vbnMuYWRvYmUuY29tL0Fkb2JlSWxsdXN0cmF0b3IvMTAuMC8iPg0KCTwhRU5USVRZIG5zX2dyYXBocyAiaHR0cDovL25zLmFkb2JlLmNvbS9HcmFwaHMvMS4wLyI+DQpdPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zOng9IiZuc19leHRlbmQ7IiB4bWxuczppPSImbnNfYWk7IiB4bWxuczpncmFwaD0iJm5zX2dyYXBoczsiDQoJIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOmE9Imh0dHA6Ly9ucy5hZG9iZS5jb20vQWRv'+
			'YmVTVkdWaWV3ZXJFeHRlbnNpb25zLzMuMC8iDQoJIHg9IjBweCIgeT0iMHB4IiB3aWR0aD0iMzJweCIgaGVpZ2h0PSIzMnB4IiB2aWV3Qm94PSItMzcyMiAtMjYwNiAzMiAzMiIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAtMzcyMiAtMjYwNiAzMiAzMiINCgkgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+DQo8ZyBpZD0iTGF5ZXJfMSI+DQo8L2c+DQo8ZyBpZD0iRWJlbmVfMSI+DQo8L2c+DQo8ZyBpZD0iTGF5ZXJfMiI+DQoJPGc+DQoJCTxnPg0KCQkJPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTS0zNjk1LjQ3My0yNTk4LjE0NmMtMC41MTktMC41MTktMS4zNjEtMC41MTktMS44NzksMGwtOC43ODcsOC'+
			'43ODdsLTIuMjkxLTIuMjQzDQoJCQkJYy0wLjUyNS0wLjUxMy0xLjM2Ni0wLjUwNC0xLjg4LDAuMDJjLTAuNTEzLDAuNTI1LTAuNTA0LDEuMzY3LDAuMDIxLDEuODhsMy4yMywzLjE2M2MwLjI1OSwwLjI1MywwLjU5NCwwLjM3OSwwLjkzLDAuMzc5DQoJCQkJYzAuMzQsMCwwLjY4LTAuMTMsMC45NC0wLjM5bDkuNzE3LTkuNzE3Qy0zNjk0Ljk1NC0yNTk2Ljc4NS0zNjk0Ljk1NC0yNTk3LjYyNi0zNjk1LjQ3My0yNTk4LjE0NnoiLz4NCgkJCTxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik0tMzY5OS45Ni0yNTgzLjgzN2gtMTIuMzI1di0xMi4zMjZoMTEuODIxbDIuMjUyLTIuMjUyYy0wLjE2Ni0wLjA4'+
			'Ni0wLjM1Mi0wLjE0MS0wLjU1Mi0wLjE0MWgtMTQuNzE4DQoJCQkJYy0wLjY2MSwwLTEuMTk2LDAuNTM2LTEuMTk2LDEuMTk2djE0LjcxOWMwLDAuNjYsMC41MzUsMS4xOTYsMS4xOTYsMS4xOTZoMTQuNzE4YzAuNjYxLDAsMS4xOTctMC41MzYsMS4xOTctMS4xOTZ2LTEwLjQwMw0KCQkJCWwtMi4zOTMsMi4zOTNWLTI1ODMuODM3eiIvPg0KCQk8L2c+DQoJCTxnIG9wYWNpdHk9IjAuNCIgIGE6YWRvYmUtYmxlbmRpbmctbW9kZT0ibXVsdGlwbHkiPg0KCQkJDQoJCQkJPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMUExNzFCIiBzdHJva2Utd2lkdGg9IjEuNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW'+
			'5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiAgYTphZG9iZS1ibGVuZGluZy1tb2RlPSJub3JtYWwiIGQ9Ig0KCQkJCU0tMzY5NS40NzMtMjU5OC4xNDZjLTAuNTE5LTAuNTE5LTEuMzYxLTAuNTE5LTEuODc5LDBsLTguNzg3LDguNzg3bC0yLjI5MS0yLjI0M2MtMC41MjUtMC41MTMtMS4zNjYtMC41MDQtMS44OCwwLjAyDQoJCQkJYy0wLjUxMywwLjUyNS0wLjUwNCwxLjM2NywwLjAyMSwxLjg4bDMuMjMsMy4xNjNjMC4yNTksMC4yNTMsMC41OTQsMC4zNzksMC45MywwLjM3OWMwLjM0LDAsMC42OC0wLjEzLDAuOTQtMC4zOWw5LjcxNy05LjcxNw0KCQkJCUMtMzY5NC45NTQtMjU5Ni43ODUtMzY5'+
			'NC45NTQtMjU5Ny42MjYtMzY5NS40NzMtMjU5OC4xNDZ6Ii8+DQoJCQkNCgkJCQk8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiMxQTE3MUIiIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiICBhOmFkb2JlLWJsZW5kaW5nLW1vZGU9Im5vcm1hbCIgZD0iDQoJCQkJTS0zNjk5Ljk2LTI1ODMuODM3aC0xMi4zMjV2LTEyLjMyNmgxMS44MjFsMi4yNTItMi4yNTJjLTAuMTY2LTAuMDg2LTAuMzUyLTAuMTQxLTAuNTUyLTAuMTQxaC0xNC43MTgNCgkJCQljLTAuNjYxLDAtMS4xOTYsMC41MzYtMS4xOTYsMS4xOTZ2MTQuNzE5YzAsMC'+
			'42NiwwLjUzNSwxLjE5NiwxLjE5NiwxLjE5NmgxNC43MThjMC42NjEsMCwxLjE5Ny0wLjUzNiwxLjE5Ny0xLjE5NnYtMTAuNDAzDQoJCQkJbC0yLjM5MywyLjM5M1YtMjU4My44Mzd6Ii8+DQoJCTwvZz4NCgkJPGc+DQoJCQk8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNLTM2OTUuNDczLTI1OTguMTQ2Yy0wLjUxOS0wLjUxOS0xLjM2MS0wLjUxOS0xLjg3OSwwbC04Ljc4Nyw4Ljc4N2wtMi4yOTEtMi4yNDMNCgkJCQljLTAuNTI1LTAuNTEzLTEuMzY2LTAuNTA0LTEuODgsMC4wMmMtMC41MTMsMC41MjUtMC41MDQsMS4zNjcsMC4wMjEsMS44OGwzLjIzLDMuMTYzYzAuMjU5LDAuMjUzLDAuNTk0LDAu'+
			'Mzc5LDAuOTMsMC4zNzkNCgkJCQljMC4zNCwwLDAuNjgtMC4xMywwLjk0LTAuMzlsOS43MTctOS43MTdDLTM2OTQuOTU0LTI1OTYuNzg1LTM2OTQuOTU0LTI1OTcuNjI2LTM2OTUuNDczLTI1OTguMTQ2eiIvPg0KCQkJPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTS0zNjk5Ljk2LTI1ODMuODM3aC0xMi4zMjV2LTEyLjMyNmgxMS44MjFsMi4yNTItMi4yNTJjLTAuMTY2LTAuMDg2LTAuMzUyLTAuMTQxLTAuNTUyLTAuMTQxaC0xNC43MTgNCgkJCQljLTAuNjYxLDAtMS4xOTYsMC41MzYtMS4xOTYsMS4xOTZ2MTQuNzE5YzAsMC42NiwwLjUzNSwxLjE5NiwxLjE5NiwxLjE5NmgxNC43MThjMC42NjEsMC'+
			'wxLjE5Ny0wLjUzNiwxLjE5Ny0xLjE5NnYtMTAuNDAzDQoJCQkJbC0yLjM5MywyLjM5M1YtMjU4My44Mzd6Ii8+DQoJCTwvZz4NCgkJPGc+DQoJCQk8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiMxQTE3MUIiIHN0cm9rZS13aWR0aD0iMC4yIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGQ9Ik0tMzY5NS40NzMtMjU5OC4xNDYNCgkJCQljLTAuNTE5LTAuNTE5LTEuMzYxLTAuNTE5LTEuODc5LDBsLTguNzg3LDguNzg3bC0yLjI5MS0yLjI0M2MtMC41MjUtMC41MTMtMS4zNjYtMC41MDQtMS44OCwwLjAyDQoJCQkJYy0wLjUxMywwLjUyNS0wLjUwNCwxLjM2'+
			'NywwLjAyMSwxLjg4bDMuMjMsMy4xNjNjMC4yNTksMC4yNTMsMC41OTQsMC4zNzksMC45MywwLjM3OWMwLjM0LDAsMC42OC0wLjEzLDAuOTQtMC4zOWw5LjcxNy05LjcxNw0KCQkJCUMtMzY5NC45NTQtMjU5Ni43ODUtMzY5NC45NTQtMjU5Ny42MjYtMzY5NS40NzMtMjU5OC4xNDZ6Ii8+DQoJCQk8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiMxQTE3MUIiIHN0cm9rZS13aWR0aD0iMC4yIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGQ9Ik0tMzY5OS45Ni0yNTgzLjgzNw0KCQkJCWgtMTIuMzI1di0xMi4zMjZoMTEuODIxbDIuMjUyLTIuMjUyYy0wLjE2Ni'+
			'0wLjA4Ni0wLjM1Mi0wLjE0MS0wLjU1Mi0wLjE0MWgtMTQuNzE4Yy0wLjY2MSwwLTEuMTk2LDAuNTM2LTEuMTk2LDEuMTk2djE0LjcxOQ0KCQkJCWMwLDAuNjYsMC41MzUsMS4xOTYsMS4xOTYsMS4xOTZoMTQuNzE4YzAuNjYxLDAsMS4xOTctMC41MzYsMS4xOTctMS4xOTZ2LTEwLjQwM2wtMi4zOTMsMi4zOTNWLTI1ODMuODM3eiIvPg0KCQk8L2c+DQoJPC9nPg0KPC9nPg0KPC9zdmc+DQo=';
		me._ht_checkmark_tick__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;ht_checkmark_tick;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="ht_checkmark_tick";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 30px;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 30px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_checkmark_tick.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_checkmark_tick.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				(player.nodeVisited(me._ht_checkmark_tick.ggElementNodeId()) == true) || 
				(me._ht_checkmark_tick.ggIsActive() == true)
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_checkmark_tick.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_checkmark_tick.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_checkmark_tick.style[domTransition]='';
				if (me._ht_checkmark_tick.ggCurrentLogicStateVisible == 0) {
					me._ht_checkmark_tick.style.visibility=(Number(me._ht_checkmark_tick.style.opacity)>0||!me._ht_checkmark_tick.style.opacity)?'inherit':'hidden';
					me._ht_checkmark_tick.ggVisible=true;
				}
				else {
					me._ht_checkmark_tick.style.visibility="hidden";
					me._ht_checkmark_tick.ggVisible=false;
				}
			}
		}
		me._ht_checkmark_tick.ggUpdatePosition=function (useTransition) {
		}
		me._hs_preview_image.appendChild(me._ht_checkmark_tick);
		me._ht_node.appendChild(me._hs_preview_image);
		el=me.__code=document.createElement('div');
		els=me.__code__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="_code";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 37px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : -39px;';
		hs+='visibility : hidden;';
		hs+='width : 66px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 68px;';
		hs+='height: 39px;';
		hs+='pointer-events: none;';
		hs+='background: #ffffff;';
		hs+='border: 1px solid #000000;';
		hs+='color: #000000;';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="";
this.onUpdatePosition=function(player,hotspot) {
var vs=player.getViewerSize();
var y=vs.height * (1/6*(1+Math.cos(player.getTilt() * Math.PI/90.0)));
var hs= 'perspective(500px) translate3d(0px,' + (y) + 'px,0px) ';
hs += 'rotateZ(' + ( player.getRoll()).toFixed(10) + 'deg) ';
hs += 'rotateX(' + ( player.getTilt()).toFixed(10) + 'deg) ';
hs += 'rotateY(' + (-player.getPan()).toFixed(10)  + 'deg) ';
hs += 'rotateY(' + ( hotspot.pan).toFixed(2)  + 'deg) ';
hs += 'rotateX(' + (-hotspot.tilt).toFixed(2) + 'deg) ';
hs += 'rotateX(90deg) ';
this.__div.style.transform=hs;
this.__div.style.left = vs.width / 2 + "px";
this.__div.style.top = vs.height / 2 + "px";
};
		el.appendChild(els);
		me.__code.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me.__code.ggUpdatePosition=function (useTransition) {
		}
		me._ht_node.appendChild(me.__code);
		el=me._tt_ht_3d=document.createElement('div');
		els=me._tt_ht_3d__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tt_ht_3d";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 20px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -170px;';
		hs+='visibility : hidden;';
		hs+='width : 150px;';
		hs+='pointer-events:none;';
		hs+='transform:translate3d(0px,0px,40px) rotateX(-90deg); text-shadow: 1px 1px 2px #000000; -webkit-backface-visibility: hidden; backface-visibility: hidden;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 100%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 150px;';
		hs+='height: auto;';
		hs+='pointer-events: none;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='font-size: 18px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 2px 3px 2px 3px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML=me.hotspot.title;
		el.appendChild(els);
		me._tt_ht_3d.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._tt_ht_3d.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				(player.getIsTour() == false) && 
				(me.hotspot.title != "") && 
				(me.elementMouseOver['ht_node'] == true) && 
				(player.getVariableValue('opt_3d_preview') == true)
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._tt_ht_3d.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._tt_ht_3d.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._tt_ht_3d.style[domTransition]='';
				if (me._tt_ht_3d.ggCurrentLogicStateVisible == 0) {
					me._tt_ht_3d.style.visibility=(Number(me._tt_ht_3d.style.opacity)>0||!me._tt_ht_3d.style.opacity)?'inherit':'hidden';
					me._tt_ht_3d.ggVisible=true;
				}
				else {
					me._tt_ht_3d.style.visibility="hidden";
					me._tt_ht_3d.ggVisible=false;
				}
			}
		}
		me._tt_ht_3d.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me._ht_node.appendChild(me._tt_ht_3d);
		me.__div = me._ht_node;
	};
	function SkinHotspotClass_ht_url(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):'';
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_url=document.createElement('div');
		el.ggId="ht_url";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 251px;';
		hs+='position : absolute;';
		hs+='top : 47px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_url.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
		}
		me._ht_url.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				(player.getVariableValue('vis_userdata') == true) || 
				(player.getVariableValue('vis_image_popup') == true) || 
				(player.getVariableValue('vis_info_popup') == true) || 
				(player.getVariableValue('vis_video_popup_file') == true) || 
				(player.getVariableValue('vis_video_popup_url') == true) || 
				(player.getVariableValue('vis_video_popup_vimeo') == true) || 
				(player.getVariableValue('vis_video_popup_youtube') == true) || 
				(player.getVariableValue('vis_website') == true)
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_url.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_url.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_url.style[domTransition]='';
				if (me._ht_url.ggCurrentLogicStateVisible == 0) {
					me._ht_url.style.visibility="hidden";
					me._ht_url.ggVisible=false;
				}
				else {
					me._ht_url.style.visibility=(Number(me._ht_url.style.opacity)>0||!me._ht_url.style.opacity)?'inherit':'hidden';
					me._ht_url.ggVisible=true;
				}
			}
		}
		me._ht_url.onclick=function (e) {
			player.setVariableValue('vis_website', true);
			skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_url.ondblclick=function (e) {
			skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_url.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['ht_url']=true;
			me._tt_ht_url.logicBlock_visible();
			skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		me._ht_url.onmouseout=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['ht_url']=false;
			me._tt_ht_url.logicBlock_visible();
			skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		me._ht_url.ontouchend=function (e) {
			me.elementMouseOver['ht_url']=false;
			me._tt_ht_url.logicBlock_visible();
		}
		me._ht_url.ggUpdatePosition=function (useTransition) {
		}
		el=me._ht_url_image=document.createElement('div');
		els=me._ht_url_image__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxOS4xLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBiYXNlUHJvZmlsZT0idGlueSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiDQoJIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSItMjQwIDMzMiAxMzAgMTMwIiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxnIG'+
			'lkPSJMYXllcl8xXzFfIj4NCgk8Zz4NCgkJPHBhdGggZmlsbD0iIzAwMDAwMCIgZD0iTS0xOTAuOCw0MTQuM2gxMy43di0xNWgtMTYuM0MtMTkzLjMsNDA0LjctMTkyLjMsNDA5LjgtMTkwLjgsNDE0LjN6Ii8+DQoJCTxwYXRoIGZpbGw9IiMwMDAwMDAiIGQ9Ik0tMTkzLjUsMzk0LjdoMTYuM3YtMTVoLTEzLjdDLTE5Mi4zLDM4NC4yLTE5My4zLDM4OS4zLTE5My41LDM5NC43eiIvPg0KCQk8cGF0aCBmaWxsPSIjMDAwMDAwIiBkPSJNLTE4OS4xLDM3NS4yaDExLjl2LTExLjlDLTE4MS45LDM2NC40LTE4Ni4xLDM2OC44LTE4OS4xLDM3NS4yeiIvPg0KCQk8cGF0aCBmaWxsPSIjMDAwMDAwIiBkPSJN'+
			'LTE3Ny4yLDQzMC43di0xMS45aC0xMS45Qy0xODYuMSw0MjUuMi0xODEuOSw0MjkuNi0xNzcuMiw0MzAuN3oiLz4NCgkJPHBhdGggZmlsbD0iIzAwMDAwMCIgZD0iTS0xOTUuNiwzNzkuN2gtOC41Yy0yLjYsNC41LTQuMyw5LjYtNC42LDE1aDEwLjhDLTE5Ny44LDM4OS4zLTE5NywzODQuMy0xOTUuNiwzNzkuN3oiLz4NCgkJPHBhdGggZmlsbD0iIzAwMDAwMCIgZD0iTS0xNDguOSwzNzUuMmMtMy4zLTQtNy42LTcuMi0xMi40LTkuM2MyLjEsMi42LDMuOSw1LjcsNS40LDkuM0gtMTQ4Ljl6Ii8+DQoJCTxwYXRoIGZpbGw9IiMwMDAwMDAiIGQ9Ik0tMjAwLjksNDE4LjhjMy4zLDMuOSw3LjQsNy4xLD'+
			'EyLjEsOS4yYy0yLjEtMi41LTMuOC01LjYtNS4zLTkuMkgtMjAwLjl6Ii8+DQoJCTxwYXRoIGZpbGw9IiMwMDAwMDAiIGQ9Ik0tMTg4LjgsMzY2Yy00LjcsMi4xLTguOSw1LjMtMTIuMiw5LjJoNi45Qy0xOTIuNiwzNzEuNy0xOTAuOSwzNjguNi0xODguOCwzNjZ6Ii8+DQoJCTxwYXRoIGZpbGw9IiMwMDAwMDAiIGQ9Ik0tMTk4LDM5OS4yaC0xMC44YzAuNCw1LjUsMiwxMC42LDQuNywxNWg4LjVDLTE5Nyw0MDkuNy0xOTcuOCw0MDQuNy0xOTgsMzk5LjJ6Ii8+DQoJCTxwYXRoIGZpbGw9IiMwMDAwMDAiIGQ9Ik0tMTc1LDM0MC45Yy0zMSwwLTU2LjEsMjUuMS01Ni4xLDU2LjFzMjUuMSw1Ni4xLDU2'+
			'LjEsNTYuMXM1Ni4xLTI1LjEsNTYuMS01Ni4xUy0xNDQsMzQwLjktMTc1LDM0MC45eg0KCQkJIE0tMTc0LjksNDM1LjRjMCwwLTAuMSwwLTAuMSwwYy0wLjEsMC0wLjIsMC0wLjQsMGMtMjEtMC4yLTM4LTE3LjQtMzgtMzguNGMwLTIxLjIsMTcuMi0zOC40LDM4LjQtMzguNA0KCQkJYzIxLjIsMCwzOC40LDE3LjIsMzguNCwzOC40Qy0xMzYuNSw0MTguMi0xNTMuNyw0MzUuNC0xNzQuOSw0MzUuNHoiLz4NCgkJPHBhdGggZmlsbD0iIzAwMDAwMCIgZD0iTS0xNjEuMyw0MjguMWM0LjgtMi4xLDktNS4zLDEyLjQtOS4zaC03Qy0xNTcuNCw0MjIuNC0xNTkuMiw0MjUuNS0xNjEuMyw0MjguMXoiLz4NCg'+
			'kJPHBhdGggZmlsbD0iIzAwMDAwMCIgZD0iTS0xNTQuNCw0MTQuM2g4LjZjMi43LTQuNSw0LjMtOS42LDQuNy0xNWgtMTFDLTE1Mi4yLDQwNC43LTE1Myw0MDkuNy0xNTQuNCw0MTQuM3oiLz4NCgkJPHBhdGggZmlsbD0iIzAwMDAwMCIgZD0iTS0xNzIuNywzNjMuM3YxMS45aDExLjdDLTE2My45LDM2OC45LTE2OCwzNjQuNS0xNzIuNywzNjMuM3oiLz4NCgkJPHBhdGggZmlsbD0iIzAwMDAwMCIgZD0iTS0xNTIsMzk0LjdoMTFjLTAuNC01LjUtMi0xMC42LTQuNy0xNWgtOC42Qy0xNTMsMzg0LjMtMTUyLjIsMzg5LjMtMTUyLDM5NC43eiIvPg0KCQk8cGF0aCBmaWxsPSIjMDAwMDAwIiBkPSJNLTE3'+
			'Mi43LDQxOC44djExLjljNC42LTEuMSw4LjgtNS41LDExLjctMTEuOUMtMTYwLjksNDE4LjgtMTcyLjcsNDE4LjgtMTcyLjcsNDE4Ljh6Ii8+DQoJCTxwYXRoIGZpbGw9IiMwMDAwMDAiIGQ9Ik0tMTU5LjIsMzc5LjdoLTEzLjV2MTVoMTYuMUMtMTU2LjcsMzg5LjMtMTU3LjcsMzg0LjItMTU5LjIsMzc5Ljd6Ii8+DQoJCTxwYXRoIGZpbGw9IiMwMDAwMDAiIGQ9Ik0tMTU2LjUsMzk5LjJoLTE2LjF2MTVoMTMuNUMtMTU3LjcsNDA5LjgtMTU2LjcsNDA0LjctMTU2LjUsMzk5LjJ6Ii8+DQoJPC9nPg0KPC9nPg0KPGcgaWQ9IkxheWVyXzIiPg0KCTxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik0tMTM2Lj'+
			'UsMzk3YzAtMjEuMi0xNy4yLTM4LjQtMzguNC0zOC40Yy0yMS4yLDAtMzguNCwxNy4yLTM4LjQsMzguNGMwLDIxLjEsMTcsMzguMiwzOCwzOC40DQoJCWMwLjEsMCwwLjIsMCwwLjQsMGMwLDAsMC4xLDAsMC4xLDBDLTE1My43LDQzNS40LTEzNi41LDQxOC4yLTEzNi41LDM5N3ogTS0yMDguOCwzOTkuMmgxMC44YzAuMiw1LjQsMSwxMC41LDIuMywxNWgtOC41DQoJCUMtMjA2LjgsNDA5LjgtMjA4LjQsNDA0LjctMjA4LjgsMzk5LjJ6IE0tMTQxLjEsMzk0LjdoLTExYy0wLjItNS40LTEtMTAuNS0yLjMtMTVoOC42Qy0xNDMuMSwzODQuMi0xNDEuNCwzODkuMy0xNDEuMSwzOTQuN3oNCgkJIE0tMTU2'+
			'LjUsMzk0LjdoLTE2LjF2LTE1aDEzLjVDLTE1Ny43LDM4NC4yLTE1Ni43LDM4OS4zLTE1Ni41LDM5NC43eiBNLTE3Mi43LDM3NS4ydi0xMS45YzQuNiwxLjEsOC44LDUuNSwxMS43LDExLjlMLTE3Mi43LDM3NS4yDQoJCUwtMTcyLjcsMzc1LjJ6IE0tMTc3LjIsMzYzLjN2MTEuOWgtMTEuOUMtMTg2LjEsMzY4LjgtMTgxLjksMzY0LjQtMTc3LjIsMzYzLjN6IE0tMTc3LjIsMzc5Ljd2MTVoLTE2LjNjMC4yLTUuNCwxLjEtMTAuNSwyLjYtMTUNCgkJTC0xNzcuMiwzNzkuN0wtMTc3LjIsMzc5Ljd6IE0tMTk4LDM5NC43aC0xMC44YzAuNC01LjUsMi0xMC42LDQuNi0xNWg4LjVDLTE5NywzODQuMy0xOT'+
			'cuOCwzODkuMy0xOTgsMzk0Ljd6IE0tMTkzLjUsMzk5LjJoMTYuMw0KCQl2MTVoLTEzLjdDLTE5Mi4zLDQwOS44LTE5My4zLDQwNC43LTE5My41LDM5OS4yeiBNLTE3Ny4yLDQxOC44djExLjljLTQuNy0xLjEtOC45LTUuNS0xMS45LTExLjlILTE3Ny4yeiBNLTE3Mi43LDQzMC42di0xMS45aDExLjcNCgkJQy0xNjMuOSw0MjUuMS0xNjgsNDI5LjUtMTcyLjcsNDMwLjZ6IE0tMTcyLjcsNDE0LjN2LTE1aDE2LjFjLTAuMiw1LjQtMS4xLDEwLjYtMi42LDE1SC0xNzIuN3ogTS0xNTIsMzk5LjJoMTENCgkJYy0wLjQsNS41LTIsMTAuNi00LjcsMTVoLTguNkMtMTUzLDQwOS43LTE1Mi4yLDQwNC43LTE1'+
			'MiwzOTkuMnogTS0xNDguOSwzNzUuMmgtN2MtMS41LTMuNi0zLjMtNi44LTUuNC05LjMNCgkJQy0xNTYuNSwzNjgtMTUyLjIsMzcxLjItMTQ4LjksMzc1LjJ6IE0tMTg4LjgsMzY2Yy0yLjEsMi41LTMuOCw1LjctNS4zLDkuMmgtNi45Qy0xOTcuNywzNzEuMy0xOTMuNSwzNjguMS0xODguOCwzNjZ6DQoJCSBNLTIwMC45LDQxOC44aDYuOWMxLjQsMy41LDMuMiw2LjYsNS4zLDkuMkMtMTkzLjUsNDI1LjgtMTk3LjYsNDIyLjctMjAwLjksNDE4Ljh6IE0tMTYxLjMsNDI4LjFjMi4xLTIuNiwzLjktNS43LDUuNC05LjNoNw0KCQlDLTE1Mi4zLDQyMi43LTE1Ni41LDQyNS45LTE2MS4zLDQyOC4xeiIvPg'+
			'0KPC9nPg0KPC9zdmc+DQo=';
		me._ht_url_image__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;ht_url_image;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._ht_url_image__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxOS4xLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBiYXNlUHJvZmlsZT0idGlueSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiDQoJIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSItMjQwIDMzMiAxMzAgMTMwIiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxnIG'+
			'lkPSJMYXllcl8xXzFfIj4NCgk8Zz4NCgkJPHBhdGggZmlsbD0iIzAwMDAwMCIgZD0iTS0xOTIuNiw0MTYuMmgxNS4ydi0xNi43aC0xOC4xQy0xOTUuMyw0MDUuNS0xOTQuMiw0MTEuMi0xOTIuNiw0MTYuMnoiLz4NCgkJPHBhdGggZmlsbD0iIzAwMDAwMCIgZD0iTS0xOTUuNSwzOTQuNWgxOC4xdi0xNi43aC0xNS4yQy0xOTQuMywzODIuOC0xOTUuMywzODguNS0xOTUuNSwzOTQuNXoiLz4NCgkJPHBhdGggZmlsbD0iIzAwMDAwMCIgZD0iTS0xOTAuNiwzNzIuOGgxMy4ydi0xMy4yQy0xODIuNiwzNjAuNy0xODcuMywzNjUuNy0xOTAuNiwzNzIuOHoiLz4NCgkJPHBhdGggZmlsbD0iIzAwMDAwMCIg'+
			'ZD0iTS0xNzcuNCw0MzQuNHYtMTMuMmgtMTMuMkMtMTg3LjMsNDI4LjMtMTgyLjYsNDMzLjItMTc3LjQsNDM0LjR6Ii8+DQoJCTxwYXRoIGZpbGw9IiMwMDAwMDAiIGQ9Ik0tMTk3LjksMzc3LjhoLTkuNGMtMi45LDQuOS00LjgsMTAuNi01LjIsMTYuN2gxMkMtMjAwLjMsMzg4LjUtMTk5LjQsMzgyLjgtMTk3LjksMzc3Ljh6Ii8+DQoJCTxwYXRoIGZpbGw9IiMwMDAwMDAiIGQ9Ik0tMTQ2LDM3Mi44Yy0zLjctNC40LTguNC04LTEzLjgtMTAuNGMyLjMsMi44LDQuNCw2LjMsNiwxMC40SC0xNDZ6Ii8+DQoJCTxwYXRoIGZpbGw9IiMwMDAwMDAiIGQ9Ik0tMjAzLjgsNDIxLjJjMy42LDQuMyw4LjIsNy'+
			'44LDEzLjUsMTAuMmMtMi4zLTIuOC00LjMtNi4zLTUuOC0xMC4ySC0yMDMuOHoiLz4NCgkJPHBhdGggZmlsbD0iIzAwMDAwMCIgZD0iTS0xOTAuMywzNjIuNmMtNS4yLDIuNC05LjksNS45LTEzLjUsMTAuMmg3LjZDLTE5NC42LDM2OC45LTE5Mi42LDM2NS40LTE5MC4zLDM2Mi42eiIvPg0KCQk8cGF0aCBmaWxsPSIjMDAwMDAwIiBkPSJNLTIwMC41LDM5OS41aC0xMmMwLjQsNi4xLDIuMiwxMS44LDUuMiwxNi43aDkuNEMtMTk5LjQsNDExLjEtMjAwLjMsNDA1LjUtMjAwLjUsMzk5LjV6Ii8+DQoJCTxwYXRoIGZpbGw9IiMwMDAwMDAiIGQ9Ik0tMTc1LDMzNC42Yy0zNC40LDAtNjIuNCwyNy45LTYy'+
			'LjQsNjIuNHMyNy45LDYyLjQsNjIuNCw2Mi40czYyLjQtMjcuOSw2Mi40LTYyLjRTLTE0MC42LDMzNC42LTE3NSwzMzQuNg0KCQkJeiBNLTE3NC45LDQzOS43YzAsMC0wLjEsMC0wLjEsMGMtMC4xLDAtMC4zLDAtMC40LDBjLTIzLjMtMC4zLTQyLjItMTkuMy00Mi4yLTQyLjdjMC0yMy42LDE5LjItNDIuNyw0Mi43LTQyLjcNCgkJCWMyMy42LDAsNDIuNywxOS4yLDQyLjcsNDIuN0MtMTMyLjIsNDIwLjUtMTUxLjMsNDM5LjctMTc0LjksNDM5Ljd6Ii8+DQoJCTxwYXRoIGZpbGw9IiMwMDAwMDAiIGQ9Ik0tMTU5LjgsNDMxLjVjNS4zLTIuNCwxMC01LjksMTMuNy0xMC4zaC03LjhDLTE1NS40LDQyNS'+
			'4yLTE1Ny41LDQyOC43LTE1OS44LDQzMS41eiIvPg0KCQk8cGF0aCBmaWxsPSIjMDAwMDAwIiBkPSJNLTE1Mi4xLDQxNi4yaDkuNmMzLTUsNC44LTEwLjYsNS4yLTE2LjdoLTEyLjJDLTE0OS43LDQwNS41LTE1MC42LDQxMS4xLTE1Mi4xLDQxNi4yeiIvPg0KCQk8cGF0aCBmaWxsPSIjMDAwMDAwIiBkPSJNLTE3Mi40LDM1OS42djEzLjJoMTNDLTE2Mi42LDM2NS43LTE2Ny4zLDM2MC44LTE3Mi40LDM1OS42eiIvPg0KCQk8cGF0aCBmaWxsPSIjMDAwMDAwIiBkPSJNLTE0OS41LDM5NC41aDEyLjJjLTAuNC02LjEtMi4yLTExLjctNS4yLTE2LjdoLTkuNkMtMTUwLjYsMzgyLjgtMTQ5LjcsMzg4LjUt'+
			'MTQ5LjUsMzk0LjV6Ii8+DQoJCTxwYXRoIGZpbGw9IiMwMDAwMDAiIGQ9Ik0tMTcyLjQsNDIxLjJ2MTMuMmM1LjEtMS4yLDkuOC02LjEsMTMtMTMuMkMtMTU5LjQsNDIxLjItMTcyLjQsNDIxLjItMTcyLjQsNDIxLjJ6Ii8+DQoJCTxwYXRoIGZpbGw9IiMwMDAwMDAiIGQ9Ik0tMTU3LjQsMzc3LjhoLTE1djE2LjdoMTcuOUMtMTU0LjcsMzg4LjUtMTU1LjgsMzgyLjgtMTU3LjQsMzc3Ljh6Ii8+DQoJCTxwYXRoIGZpbGw9IiMwMDAwMDAiIGQ9Ik0tMTU0LjUsMzk5LjVoLTE3Ljl2MTYuN2gxNUMtMTU1LjgsNDExLjItMTU0LjcsNDA1LjUtMTU0LjUsMzk5LjV6Ii8+DQoJPC9nPg0KPC9nPg0KPGcgaW'+
			'Q9IkxheWVyXzIiPg0KCTxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik0tMTMyLjIsMzk3YzAtMjMuNi0xOS4yLTQyLjctNDIuNy00Mi43Yy0yMy42LDAtNDIuNywxOS4yLTQyLjcsNDIuN2MwLDIzLjQsMTguOSw0Mi40LDQyLjIsNDIuNw0KCQljMC4xLDAsMC4zLDAsMC40LDBjMCwwLDAuMSwwLDAuMSwwQy0xNTEuMyw0MzkuNy0xMzIuMiw0MjAuNS0xMzIuMiwzOTd6IE0tMjEyLjUsMzk5LjVoMTJjMC4yLDYsMS4xLDExLjcsMi42LDE2LjdoLTkuNA0KCQlDLTIxMC4zLDQxMS4yLTIxMi4xLDQwNS42LTIxMi41LDM5OS41eiBNLTEzNy4zLDM5NC41aC0xMi4yYy0wLjItNi0xLjEtMTEuNi0yLjYtMTYu'+
			'N2g5LjZDLTEzOS41LDM4Mi44LTEzNy43LDM4OC40LTEzNy4zLDM5NC41eg0KCQkgTS0xNTQuNSwzOTQuNWgtMTcuOXYtMTYuN2gxNUMtMTU1LjgsMzgyLjgtMTU0LjcsMzg4LjUtMTU0LjUsMzk0LjV6IE0tMTcyLjQsMzcyLjh2LTEzLjJjNS4yLDEuMiw5LjgsNi4yLDEzLDEzLjJMLTE3Mi40LDM3Mi44DQoJCUwtMTcyLjQsMzcyLjh6IE0tMTc3LjQsMzU5LjZ2MTMuMmgtMTMuMkMtMTg3LjMsMzY1LjctMTgyLjYsMzYwLjctMTc3LjQsMzU5LjZ6IE0tMTc3LjQsMzc3Ljh2MTYuN2gtMTguMWMwLjItNiwxLjMtMTEuNywyLjktMTYuNw0KCQlMLTE3Ny40LDM3Ny44TC0xNzcuNCwzNzcuOHogTS0yMD'+
			'AuNSwzOTQuNWgtMTJjMC40LTYuMSwyLjItMTEuNyw1LjItMTYuN2g5LjRDLTE5OS40LDM4Mi44LTIwMC4zLDM4OC41LTIwMC41LDM5NC41eg0KCQkgTS0xOTUuNSwzOTkuNWgxOC4xdjE2LjdoLTE1LjJDLTE5NC4yLDQxMS4yLTE5NS4zLDQwNS41LTE5NS41LDM5OS41eiBNLTE3Ny40LDQyMS4ydjEzLjJjLTUuMi0xLjItOS45LTYuMS0xMy4yLTEzLjJILTE3Ny40eg0KCQkgTS0xNzIuNCw0MzQuNHYtMTMuMmgxM0MtMTYyLjcsNDI4LjItMTY3LjMsNDMzLjEtMTcyLjQsNDM0LjR6IE0tMTcyLjQsNDE2LjJ2LTE2LjdoMTcuOWMtMC4yLDYtMS4zLDExLjctMi45LDE2LjdILTE3Mi40eg0KCQkgTS0x'+
			'NDkuNSwzOTkuNWgxMi4yYy0wLjQsNi4xLTIuMiwxMS44LTUuMiwxNi43aC05LjZDLTE1MC42LDQxMS4xLTE0OS43LDQwNS41LTE0OS41LDM5OS41eiBNLTE0NiwzNzIuOGgtNy44DQoJCWMtMS42LTQtMy42LTcuNS02LTEwLjRDLTE1NC40LDM2NC44LTE0OS43LDM2OC40LTE0NiwzNzIuOHogTS0xOTAuMywzNjIuNmMtMi4zLDIuOC00LjMsNi4zLTUuOSwxMC4yaC03LjYNCgkJQy0yMDAuMiwzNjguNC0xOTUuNiwzNjQuOS0xOTAuMywzNjIuNnogTS0yMDMuOCw0MjEuMmg3LjZjMS42LDMuOSwzLjYsNy40LDUuOSwxMC4yQy0xOTUuNiw0MjktMjAwLjIsNDI1LjUtMjAzLjgsNDIxLjJ6DQoJCSBNLT'+
			'E1OS44LDQzMS41YzIuMy0yLjgsNC4zLTYuMyw2LTEwLjNoNy44Qy0xNDkuNyw0MjUuNi0xNTQuNCw0MjkuMi0xNTkuOCw0MzEuNXoiLz4NCjwvZz4NCjwvc3ZnPg0K';
		me._ht_url_image__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;ht_url_image;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="ht_url_image";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : -16px;';
		hs+='position : absolute;';
		hs+='top : -16px;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_url_image.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_url_image.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				(player.getIsMobile() == false) && 
				(player.getVariableValue('opt_url') == true)
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_url_image.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_url_image.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_url_image.style[domTransition]='';
				if (me._ht_url_image.ggCurrentLogicStateVisible == 0) {
					me._ht_url_image.style.visibility=(Number(me._ht_url_image.style.opacity)>0||!me._ht_url_image.style.opacity)?'inherit':'hidden';
					me._ht_url_image.ggVisible=true;
				}
				else {
					me._ht_url_image.style.visibility="hidden";
					me._ht_url_image.ggVisible=false;
				}
			}
		}
		me._ht_url_image.onclick=function (e) {
			skin._web_page.ggText="<iframe src=\""+me.hotspot.url+"\" width=\"100%\" height=\"100%\" allowfullscreen=\"true\" mozallowfullscreen=\"true\" webkitallowfullscreen=\"true\" frameborder= \"0\"><\/iframe>";
			skin._web_page.ggTextDiv.innerHTML=skin._web_page.ggText;
			if (skin._web_page.ggUpdateText) {
				skin._web_page.ggUpdateText=function() {
					var hs="<iframe src=\""+me.hotspot.url+"\" width=\"100%\" height=\"100%\" allowfullscreen=\"true\" mozallowfullscreen=\"true\" webkitallowfullscreen=\"true\" frameborder= \"0\"><\/iframe>";
					if (hs!=this.ggText) {
						this.ggText=hs;
						this.ggTextDiv.innerHTML=hs;
						if (this.ggUpdatePosition) this.ggUpdatePosition();
					}
				}
			}
			if (skin._web_page.ggUpdatePosition) {
				skin._web_page.ggUpdatePosition();
			}
			skin._web_page.ggTextDiv.scrollTop = 0;
			player.setVariableValue('vis_website', true);
		}
		me._ht_url_image.onmouseover=function (e) {
			me._ht_url_image__img.style.visibility='hidden';
			me._ht_url_image__imgo.style.visibility='inherit';
		}
		me._ht_url_image.onmouseout=function (e) {
			me._ht_url_image__img.style.visibility='inherit';
			me._ht_url_image__imgo.style.visibility='hidden';
		}
		me._ht_url_image.ggUpdatePosition=function (useTransition) {
		}
		me._ht_url.appendChild(me._ht_url_image);
		el=me._ht_url_image_newpage=document.createElement('div');
		els=me._ht_url_image_newpage__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxOS4xLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBiYXNlUHJvZmlsZT0idGlueSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiDQoJIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSItMjQwIDMzMiAxMzAgMTMwIiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxnIG'+
			'lkPSJMYXllcl8xXzFfIj4NCgk8Zz4NCgkJPHBhdGggZmlsbD0iIzAwMDAwMCIgZD0iTS0xOTAuOCw0MTQuM2gxMy43di0xNWgtMTYuM0MtMTkzLjMsNDA0LjctMTkyLjMsNDA5LjgtMTkwLjgsNDE0LjN6Ii8+DQoJCTxwYXRoIGZpbGw9IiMwMDAwMDAiIGQ9Ik0tMTkzLjUsMzk0LjdoMTYuM3YtMTVoLTEzLjdDLTE5Mi4zLDM4NC4yLTE5My4zLDM4OS4zLTE5My41LDM5NC43eiIvPg0KCQk8cGF0aCBmaWxsPSIjMDAwMDAwIiBkPSJNLTE4OS4xLDM3NS4yaDExLjl2LTExLjlDLTE4MS45LDM2NC40LTE4Ni4xLDM2OC44LTE4OS4xLDM3NS4yeiIvPg0KCQk8cGF0aCBmaWxsPSIjMDAwMDAwIiBkPSJN'+
			'LTE3Ny4yLDQzMC43di0xMS45aC0xMS45Qy0xODYuMSw0MjUuMi0xODEuOSw0MjkuNi0xNzcuMiw0MzAuN3oiLz4NCgkJPHBhdGggZmlsbD0iIzAwMDAwMCIgZD0iTS0xOTUuNiwzNzkuN2gtOC41Yy0yLjYsNC41LTQuMyw5LjYtNC42LDE1aDEwLjhDLTE5Ny44LDM4OS4zLTE5NywzODQuMy0xOTUuNiwzNzkuN3oiLz4NCgkJPHBhdGggZmlsbD0iIzAwMDAwMCIgZD0iTS0xNDguOSwzNzUuMmMtMy4zLTQtNy42LTcuMi0xMi40LTkuM2MyLjEsMi42LDMuOSw1LjcsNS40LDkuM0gtMTQ4Ljl6Ii8+DQoJCTxwYXRoIGZpbGw9IiMwMDAwMDAiIGQ9Ik0tMjAwLjksNDE4LjhjMy4zLDMuOSw3LjQsNy4xLD'+
			'EyLjEsOS4yYy0yLjEtMi41LTMuOC01LjYtNS4zLTkuMkgtMjAwLjl6Ii8+DQoJCTxwYXRoIGZpbGw9IiMwMDAwMDAiIGQ9Ik0tMTg4LjgsMzY2Yy00LjcsMi4xLTguOSw1LjMtMTIuMiw5LjJoNi45Qy0xOTIuNiwzNzEuNy0xOTAuOSwzNjguNi0xODguOCwzNjZ6Ii8+DQoJCTxwYXRoIGZpbGw9IiMwMDAwMDAiIGQ9Ik0tMTk4LDM5OS4yaC0xMC44YzAuNCw1LjUsMiwxMC42LDQuNywxNWg4LjVDLTE5Nyw0MDkuNy0xOTcuOCw0MDQuNy0xOTgsMzk5LjJ6Ii8+DQoJCTxwYXRoIGZpbGw9IiMwMDAwMDAiIGQ9Ik0tMTc1LDM0MC45Yy0zMSwwLTU2LjEsMjUuMS01Ni4xLDU2LjFzMjUuMSw1Ni4xLDU2'+
			'LjEsNTYuMXM1Ni4xLTI1LjEsNTYuMS01Ni4xUy0xNDQsMzQwLjktMTc1LDM0MC45eg0KCQkJIE0tMTc0LjksNDM1LjRjMCwwLTAuMSwwLTAuMSwwYy0wLjEsMC0wLjIsMC0wLjQsMGMtMjEtMC4yLTM4LTE3LjQtMzgtMzguNGMwLTIxLjIsMTcuMi0zOC40LDM4LjQtMzguNA0KCQkJYzIxLjIsMCwzOC40LDE3LjIsMzguNCwzOC40Qy0xMzYuNSw0MTguMi0xNTMuNyw0MzUuNC0xNzQuOSw0MzUuNHoiLz4NCgkJPHBhdGggZmlsbD0iIzAwMDAwMCIgZD0iTS0xNjEuMyw0MjguMWM0LjgtMi4xLDktNS4zLDEyLjQtOS4zaC03Qy0xNTcuNCw0MjIuNC0xNTkuMiw0MjUuNS0xNjEuMyw0MjguMXoiLz4NCg'+
			'kJPHBhdGggZmlsbD0iIzAwMDAwMCIgZD0iTS0xNTQuNCw0MTQuM2g4LjZjMi43LTQuNSw0LjMtOS42LDQuNy0xNWgtMTFDLTE1Mi4yLDQwNC43LTE1Myw0MDkuNy0xNTQuNCw0MTQuM3oiLz4NCgkJPHBhdGggZmlsbD0iIzAwMDAwMCIgZD0iTS0xNzIuNywzNjMuM3YxMS45aDExLjdDLTE2My45LDM2OC45LTE2OCwzNjQuNS0xNzIuNywzNjMuM3oiLz4NCgkJPHBhdGggZmlsbD0iIzAwMDAwMCIgZD0iTS0xNTIsMzk0LjdoMTFjLTAuNC01LjUtMi0xMC42LTQuNy0xNWgtOC42Qy0xNTMsMzg0LjMtMTUyLjIsMzg5LjMtMTUyLDM5NC43eiIvPg0KCQk8cGF0aCBmaWxsPSIjMDAwMDAwIiBkPSJNLTE3'+
			'Mi43LDQxOC44djExLjljNC42LTEuMSw4LjgtNS41LDExLjctMTEuOUMtMTYwLjksNDE4LjgtMTcyLjcsNDE4LjgtMTcyLjcsNDE4Ljh6Ii8+DQoJCTxwYXRoIGZpbGw9IiMwMDAwMDAiIGQ9Ik0tMTU5LjIsMzc5LjdoLTEzLjV2MTVoMTYuMUMtMTU2LjcsMzg5LjMtMTU3LjcsMzg0LjItMTU5LjIsMzc5Ljd6Ii8+DQoJCTxwYXRoIGZpbGw9IiMwMDAwMDAiIGQ9Ik0tMTU2LjUsMzk5LjJoLTE2LjF2MTVoMTMuNUMtMTU3LjcsNDA5LjgtMTU2LjcsNDA0LjctMTU2LjUsMzk5LjJ6Ii8+DQoJPC9nPg0KPC9nPg0KPGcgaWQ9IkxheWVyXzIiPg0KCTxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik0tMTM2Lj'+
			'UsMzk3YzAtMjEuMi0xNy4yLTM4LjQtMzguNC0zOC40Yy0yMS4yLDAtMzguNCwxNy4yLTM4LjQsMzguNGMwLDIxLjEsMTcsMzguMiwzOCwzOC40DQoJCWMwLjEsMCwwLjIsMCwwLjQsMGMwLDAsMC4xLDAsMC4xLDBDLTE1My43LDQzNS40LTEzNi41LDQxOC4yLTEzNi41LDM5N3ogTS0yMDguOCwzOTkuMmgxMC44YzAuMiw1LjQsMSwxMC41LDIuMywxNWgtOC41DQoJCUMtMjA2LjgsNDA5LjgtMjA4LjQsNDA0LjctMjA4LjgsMzk5LjJ6IE0tMTQxLjEsMzk0LjdoLTExYy0wLjItNS40LTEtMTAuNS0yLjMtMTVoOC42Qy0xNDMuMSwzODQuMi0xNDEuNCwzODkuMy0xNDEuMSwzOTQuN3oNCgkJIE0tMTU2'+
			'LjUsMzk0LjdoLTE2LjF2LTE1aDEzLjVDLTE1Ny43LDM4NC4yLTE1Ni43LDM4OS4zLTE1Ni41LDM5NC43eiBNLTE3Mi43LDM3NS4ydi0xMS45YzQuNiwxLjEsOC44LDUuNSwxMS43LDExLjlMLTE3Mi43LDM3NS4yDQoJCUwtMTcyLjcsMzc1LjJ6IE0tMTc3LjIsMzYzLjN2MTEuOWgtMTEuOUMtMTg2LjEsMzY4LjgtMTgxLjksMzY0LjQtMTc3LjIsMzYzLjN6IE0tMTc3LjIsMzc5Ljd2MTVoLTE2LjNjMC4yLTUuNCwxLjEtMTAuNSwyLjYtMTUNCgkJTC0xNzcuMiwzNzkuN0wtMTc3LjIsMzc5Ljd6IE0tMTk4LDM5NC43aC0xMC44YzAuNC01LjUsMi0xMC42LDQuNi0xNWg4LjVDLTE5NywzODQuMy0xOT'+
			'cuOCwzODkuMy0xOTgsMzk0Ljd6IE0tMTkzLjUsMzk5LjJoMTYuMw0KCQl2MTVoLTEzLjdDLTE5Mi4zLDQwOS44LTE5My4zLDQwNC43LTE5My41LDM5OS4yeiBNLTE3Ny4yLDQxOC44djExLjljLTQuNy0xLjEtOC45LTUuNS0xMS45LTExLjlILTE3Ny4yeiBNLTE3Mi43LDQzMC42di0xMS45aDExLjcNCgkJQy0xNjMuOSw0MjUuMS0xNjgsNDI5LjUtMTcyLjcsNDMwLjZ6IE0tMTcyLjcsNDE0LjN2LTE1aDE2LjFjLTAuMiw1LjQtMS4xLDEwLjYtMi42LDE1SC0xNzIuN3ogTS0xNTIsMzk5LjJoMTENCgkJYy0wLjQsNS41LTIsMTAuNi00LjcsMTVoLTguNkMtMTUzLDQwOS43LTE1Mi4yLDQwNC43LTE1'+
			'MiwzOTkuMnogTS0xNDguOSwzNzUuMmgtN2MtMS41LTMuNi0zLjMtNi44LTUuNC05LjMNCgkJQy0xNTYuNSwzNjgtMTUyLjIsMzcxLjItMTQ4LjksMzc1LjJ6IE0tMTg4LjgsMzY2Yy0yLjEsMi41LTMuOCw1LjctNS4zLDkuMmgtNi45Qy0xOTcuNywzNzEuMy0xOTMuNSwzNjguMS0xODguOCwzNjZ6DQoJCSBNLTIwMC45LDQxOC44aDYuOWMxLjQsMy41LDMuMiw2LjYsNS4zLDkuMkMtMTkzLjUsNDI1LjgtMTk3LjYsNDIyLjctMjAwLjksNDE4Ljh6IE0tMTYxLjMsNDI4LjFjMi4xLTIuNiwzLjktNS43LDUuNC05LjNoNw0KCQlDLTE1Mi4zLDQyMi43LTE1Ni41LDQyNS45LTE2MS4zLDQyOC4xeiIvPg'+
			'0KPC9nPg0KPC9zdmc+DQo=';
		me._ht_url_image_newpage__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;ht_url_image_newpage;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._ht_url_image_newpage__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxOS4xLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBiYXNlUHJvZmlsZT0idGlueSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiDQoJIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSItMjQwIDMzMiAxMzAgMTMwIiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxnIG'+
			'lkPSJMYXllcl8xXzFfIj4NCgk8Zz4NCgkJPHBhdGggZmlsbD0iIzAwMDAwMCIgZD0iTS0xOTIuNiw0MTYuMmgxNS4ydi0xNi43aC0xOC4xQy0xOTUuMyw0MDUuNS0xOTQuMiw0MTEuMi0xOTIuNiw0MTYuMnoiLz4NCgkJPHBhdGggZmlsbD0iIzAwMDAwMCIgZD0iTS0xOTUuNSwzOTQuNWgxOC4xdi0xNi43aC0xNS4yQy0xOTQuMywzODIuOC0xOTUuMywzODguNS0xOTUuNSwzOTQuNXoiLz4NCgkJPHBhdGggZmlsbD0iIzAwMDAwMCIgZD0iTS0xOTAuNiwzNzIuOGgxMy4ydi0xMy4yQy0xODIuNiwzNjAuNy0xODcuMywzNjUuNy0xOTAuNiwzNzIuOHoiLz4NCgkJPHBhdGggZmlsbD0iIzAwMDAwMCIg'+
			'ZD0iTS0xNzcuNCw0MzQuNHYtMTMuMmgtMTMuMkMtMTg3LjMsNDI4LjMtMTgyLjYsNDMzLjItMTc3LjQsNDM0LjR6Ii8+DQoJCTxwYXRoIGZpbGw9IiMwMDAwMDAiIGQ9Ik0tMTk3LjksMzc3LjhoLTkuNGMtMi45LDQuOS00LjgsMTAuNi01LjIsMTYuN2gxMkMtMjAwLjMsMzg4LjUtMTk5LjQsMzgyLjgtMTk3LjksMzc3Ljh6Ii8+DQoJCTxwYXRoIGZpbGw9IiMwMDAwMDAiIGQ9Ik0tMTQ2LDM3Mi44Yy0zLjctNC40LTguNC04LTEzLjgtMTAuNGMyLjMsMi44LDQuNCw2LjMsNiwxMC40SC0xNDZ6Ii8+DQoJCTxwYXRoIGZpbGw9IiMwMDAwMDAiIGQ9Ik0tMjAzLjgsNDIxLjJjMy42LDQuMyw4LjIsNy'+
			'44LDEzLjUsMTAuMmMtMi4zLTIuOC00LjMtNi4zLTUuOC0xMC4ySC0yMDMuOHoiLz4NCgkJPHBhdGggZmlsbD0iIzAwMDAwMCIgZD0iTS0xOTAuMywzNjIuNmMtNS4yLDIuNC05LjksNS45LTEzLjUsMTAuMmg3LjZDLTE5NC42LDM2OC45LTE5Mi42LDM2NS40LTE5MC4zLDM2Mi42eiIvPg0KCQk8cGF0aCBmaWxsPSIjMDAwMDAwIiBkPSJNLTIwMC41LDM5OS41aC0xMmMwLjQsNi4xLDIuMiwxMS44LDUuMiwxNi43aDkuNEMtMTk5LjQsNDExLjEtMjAwLjMsNDA1LjUtMjAwLjUsMzk5LjV6Ii8+DQoJCTxwYXRoIGZpbGw9IiMwMDAwMDAiIGQ9Ik0tMTc1LDMzNC42Yy0zNC40LDAtNjIuNCwyNy45LTYy'+
			'LjQsNjIuNHMyNy45LDYyLjQsNjIuNCw2Mi40czYyLjQtMjcuOSw2Mi40LTYyLjRTLTE0MC42LDMzNC42LTE3NSwzMzQuNg0KCQkJeiBNLTE3NC45LDQzOS43YzAsMC0wLjEsMC0wLjEsMGMtMC4xLDAtMC4zLDAtMC40LDBjLTIzLjMtMC4zLTQyLjItMTkuMy00Mi4yLTQyLjdjMC0yMy42LDE5LjItNDIuNyw0Mi43LTQyLjcNCgkJCWMyMy42LDAsNDIuNywxOS4yLDQyLjcsNDIuN0MtMTMyLjIsNDIwLjUtMTUxLjMsNDM5LjctMTc0LjksNDM5Ljd6Ii8+DQoJCTxwYXRoIGZpbGw9IiMwMDAwMDAiIGQ9Ik0tMTU5LjgsNDMxLjVjNS4zLTIuNCwxMC01LjksMTMuNy0xMC4zaC03LjhDLTE1NS40LDQyNS'+
			'4yLTE1Ny41LDQyOC43LTE1OS44LDQzMS41eiIvPg0KCQk8cGF0aCBmaWxsPSIjMDAwMDAwIiBkPSJNLTE1Mi4xLDQxNi4yaDkuNmMzLTUsNC44LTEwLjYsNS4yLTE2LjdoLTEyLjJDLTE0OS43LDQwNS41LTE1MC42LDQxMS4xLTE1Mi4xLDQxNi4yeiIvPg0KCQk8cGF0aCBmaWxsPSIjMDAwMDAwIiBkPSJNLTE3Mi40LDM1OS42djEzLjJoMTNDLTE2Mi42LDM2NS43LTE2Ny4zLDM2MC44LTE3Mi40LDM1OS42eiIvPg0KCQk8cGF0aCBmaWxsPSIjMDAwMDAwIiBkPSJNLTE0OS41LDM5NC41aDEyLjJjLTAuNC02LjEtMi4yLTExLjctNS4yLTE2LjdoLTkuNkMtMTUwLjYsMzgyLjgtMTQ5LjcsMzg4LjUt'+
			'MTQ5LjUsMzk0LjV6Ii8+DQoJCTxwYXRoIGZpbGw9IiMwMDAwMDAiIGQ9Ik0tMTcyLjQsNDIxLjJ2MTMuMmM1LjEtMS4yLDkuOC02LjEsMTMtMTMuMkMtMTU5LjQsNDIxLjItMTcyLjQsNDIxLjItMTcyLjQsNDIxLjJ6Ii8+DQoJCTxwYXRoIGZpbGw9IiMwMDAwMDAiIGQ9Ik0tMTU3LjQsMzc3LjhoLTE1djE2LjdoMTcuOUMtMTU0LjcsMzg4LjUtMTU1LjgsMzgyLjgtMTU3LjQsMzc3Ljh6Ii8+DQoJCTxwYXRoIGZpbGw9IiMwMDAwMDAiIGQ9Ik0tMTU0LjUsMzk5LjVoLTE3Ljl2MTYuN2gxNUMtMTU1LjgsNDExLjItMTU0LjcsNDA1LjUtMTU0LjUsMzk5LjV6Ii8+DQoJPC9nPg0KPC9nPg0KPGcgaW'+
			'Q9IkxheWVyXzIiPg0KCTxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik0tMTMyLjIsMzk3YzAtMjMuNi0xOS4yLTQyLjctNDIuNy00Mi43Yy0yMy42LDAtNDIuNywxOS4yLTQyLjcsNDIuN2MwLDIzLjQsMTguOSw0Mi40LDQyLjIsNDIuNw0KCQljMC4xLDAsMC4zLDAsMC40LDBjMCwwLDAuMSwwLDAuMSwwQy0xNTEuMyw0MzkuNy0xMzIuMiw0MjAuNS0xMzIuMiwzOTd6IE0tMjEyLjUsMzk5LjVoMTJjMC4yLDYsMS4xLDExLjcsMi42LDE2LjdoLTkuNA0KCQlDLTIxMC4zLDQxMS4yLTIxMi4xLDQwNS42LTIxMi41LDM5OS41eiBNLTEzNy4zLDM5NC41aC0xMi4yYy0wLjItNi0xLjEtMTEuNi0yLjYtMTYu'+
			'N2g5LjZDLTEzOS41LDM4Mi44LTEzNy43LDM4OC40LTEzNy4zLDM5NC41eg0KCQkgTS0xNTQuNSwzOTQuNWgtMTcuOXYtMTYuN2gxNUMtMTU1LjgsMzgyLjgtMTU0LjcsMzg4LjUtMTU0LjUsMzk0LjV6IE0tMTcyLjQsMzcyLjh2LTEzLjJjNS4yLDEuMiw5LjgsNi4yLDEzLDEzLjJMLTE3Mi40LDM3Mi44DQoJCUwtMTcyLjQsMzcyLjh6IE0tMTc3LjQsMzU5LjZ2MTMuMmgtMTMuMkMtMTg3LjMsMzY1LjctMTgyLjYsMzYwLjctMTc3LjQsMzU5LjZ6IE0tMTc3LjQsMzc3Ljh2MTYuN2gtMTguMWMwLjItNiwxLjMtMTEuNywyLjktMTYuNw0KCQlMLTE3Ny40LDM3Ny44TC0xNzcuNCwzNzcuOHogTS0yMD'+
			'AuNSwzOTQuNWgtMTJjMC40LTYuMSwyLjItMTEuNyw1LjItMTYuN2g5LjRDLTE5OS40LDM4Mi44LTIwMC4zLDM4OC41LTIwMC41LDM5NC41eg0KCQkgTS0xOTUuNSwzOTkuNWgxOC4xdjE2LjdoLTE1LjJDLTE5NC4yLDQxMS4yLTE5NS4zLDQwNS41LTE5NS41LDM5OS41eiBNLTE3Ny40LDQyMS4ydjEzLjJjLTUuMi0xLjItOS45LTYuMS0xMy4yLTEzLjJILTE3Ny40eg0KCQkgTS0xNzIuNCw0MzQuNHYtMTMuMmgxM0MtMTYyLjcsNDI4LjItMTY3LjMsNDMzLjEtMTcyLjQsNDM0LjR6IE0tMTcyLjQsNDE2LjJ2LTE2LjdoMTcuOWMtMC4yLDYtMS4zLDExLjctMi45LDE2LjdILTE3Mi40eg0KCQkgTS0x'+
			'NDkuNSwzOTkuNWgxMi4yYy0wLjQsNi4xLTIuMiwxMS44LTUuMiwxNi43aC05LjZDLTE1MC42LDQxMS4xLTE0OS43LDQwNS41LTE0OS41LDM5OS41eiBNLTE0NiwzNzIuOGgtNy44DQoJCWMtMS42LTQtMy42LTcuNS02LTEwLjRDLTE1NC40LDM2NC44LTE0OS43LDM2OC40LTE0NiwzNzIuOHogTS0xOTAuMywzNjIuNmMtMi4zLDIuOC00LjMsNi4zLTUuOSwxMC4yaC03LjYNCgkJQy0yMDAuMiwzNjguNC0xOTUuNiwzNjQuOS0xOTAuMywzNjIuNnogTS0yMDMuOCw0MjEuMmg3LjZjMS42LDMuOSwzLjYsNy40LDUuOSwxMC4yQy0xOTUuNiw0MjktMjAwLjIsNDI1LjUtMjAzLjgsNDIxLjJ6DQoJCSBNLT'+
			'E1OS44LDQzMS41YzIuMy0yLjgsNC4zLTYuMyw2LTEwLjNoNy44Qy0xNDkuNyw0MjUuNi0xNTQuNCw0MjkuMi0xNTkuOCw0MzEuNXoiLz4NCjwvZz4NCjwvc3ZnPg0K';
		me._ht_url_image_newpage__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;ht_url_image_newpage;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="ht_url_image_newpage";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : -16px;';
		hs+='position : absolute;';
		hs+='top : -16px;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_url_image_newpage.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_url_image_newpage.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				(player.getIsMobile() == true) || 
				(player.getVariableValue('opt_url') == false)
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_url_image_newpage.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_url_image_newpage.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_url_image_newpage.style[domTransition]='';
				if (me._ht_url_image_newpage.ggCurrentLogicStateVisible == 0) {
					me._ht_url_image_newpage.style.visibility=(Number(me._ht_url_image_newpage.style.opacity)>0||!me._ht_url_image_newpage.style.opacity)?'inherit':'hidden';
					me._ht_url_image_newpage.ggVisible=true;
				}
				else {
					me._ht_url_image_newpage.style.visibility="hidden";
					me._ht_url_image_newpage.ggVisible=false;
				}
			}
		}
		me._ht_url_image_newpage.onclick=function (e) {
			player.openUrl(me.hotspot.url,me.hotspot.target);
		}
		me._ht_url_image_newpage.onmouseover=function (e) {
			me._ht_url_image_newpage__img.style.visibility='hidden';
			me._ht_url_image_newpage__imgo.style.visibility='inherit';
		}
		me._ht_url_image_newpage.onmouseout=function (e) {
			me._ht_url_image_newpage__img.style.visibility='inherit';
			me._ht_url_image_newpage__imgo.style.visibility='hidden';
		}
		me._ht_url_image_newpage.ggUpdatePosition=function (useTransition) {
		}
		me._ht_url.appendChild(me._ht_url_image_newpage);
		el=me._tt_ht_url=document.createElement('div');
		els=me._tt_ht_url__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tt_ht_url";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='z-index: 100;';
		hs+='height : 20px;';
		hs+='left : -50px;';
		hs+='position : absolute;';
		hs+='top : 21px;';
		hs+='visibility : hidden;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='background: #000000;';
		hs+='background: rgba(0,0,0,0.666667);';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 2px 5px 2px 5px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML=me.hotspot.title;
		el.appendChild(els);
		me._tt_ht_url.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._tt_ht_url.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				(player.getIsMobile() == true)
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._tt_ht_url.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._tt_ht_url.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._tt_ht_url.style[domTransition]='left 0s, top 0s';
				if (me._tt_ht_url.ggCurrentLogicStatePosition == 0) {
					me._tt_ht_url.style.left='-50px';
					me._tt_ht_url.style.top='-47px';
				}
				else {
					me._tt_ht_url.style.left='-50px';
					me._tt_ht_url.style.top='21px';
				}
			}
		}
		me._tt_ht_url.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				(me.elementMouseOver['ht_url'] == true) && 
				(me.hotspot.title != "")
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._tt_ht_url.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._tt_ht_url.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._tt_ht_url.style[domTransition]='left 0s, top 0s';
				if (me._tt_ht_url.ggCurrentLogicStateVisible == 0) {
					me._tt_ht_url.style.visibility=(Number(me._tt_ht_url.style.opacity)>0||!me._tt_ht_url.style.opacity)?'inherit':'hidden';
					me._tt_ht_url.ggVisible=true;
				}
				else {
					me._tt_ht_url.style.visibility="hidden";
					me._tt_ht_url.ggVisible=false;
				}
			}
		}
		me._tt_ht_url.ggUpdatePosition=function (useTransition) {
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((98-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me._ht_url.appendChild(me._tt_ht_url);
		me.ggUse3d=true;
		me.gg3dDistance=500;
		me.__div = me._ht_url;
	};
	me.addSkinHotspot=function(hotspot) {
		var hsinst = null;
		if (hotspot.skinid=='ht_node') {
			hotspot.skinid = 'ht_node';
			hsinst = new SkinHotspotClass_ht_node2(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
			me.callChildLogicBlocksHotspot_ht_node_sizechanged();;
			me.callChildLogicBlocksHotspot_ht_node_changenode();;
			me.callChildLogicBlocksHotspot_ht_node_configloaded();;
			me.callChildLogicBlocksHotspot_ht_node_mouseover();;
			me.callChildLogicBlocksHotspot_ht_node_active();;
			me.callChildLogicBlocksHotspot_ht_node_varchanged_opt_3d_preview();;
		} else
		if (hotspot.skinid=='ht_node') {
			hotspot.skinid = 'ht_node';
			hsinst = new SkinHotspotClass_ht_node1(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
			me.callChildLogicBlocksHotspot_ht_node_sizechanged();;
			me.callChildLogicBlocksHotspot_ht_node_changenode();;
			me.callChildLogicBlocksHotspot_ht_node_configloaded();;
			me.callChildLogicBlocksHotspot_ht_node_mouseover();;
			me.callChildLogicBlocksHotspot_ht_node_active();;
			me.callChildLogicBlocksHotspot_ht_node_varchanged_opt_3d_preview();;
		} else
		if (hotspot.skinid=='ht_node') {
			hotspot.skinid = 'ht_node';
			hsinst = new SkinHotspotClass_ht_node0(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
			me.callChildLogicBlocksHotspot_ht_node_sizechanged();;
			me.callChildLogicBlocksHotspot_ht_node_changenode();;
			me.callChildLogicBlocksHotspot_ht_node_configloaded();;
			me.callChildLogicBlocksHotspot_ht_node_mouseover();;
			me.callChildLogicBlocksHotspot_ht_node_active();;
			me.callChildLogicBlocksHotspot_ht_node_varchanged_opt_3d_preview();;
		} else
		if (hotspot.skinid=='ht_node') {
			hotspot.skinid = 'ht_node';
			hsinst = new SkinHotspotClass_ht_node(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
			me.callChildLogicBlocksHotspot_ht_node_sizechanged();;
			me.callChildLogicBlocksHotspot_ht_node_changenode();;
			me.callChildLogicBlocksHotspot_ht_node_configloaded();;
			me.callChildLogicBlocksHotspot_ht_node_mouseover();;
			me.callChildLogicBlocksHotspot_ht_node_active();;
			me.callChildLogicBlocksHotspot_ht_node_varchanged_opt_3d_preview();;
		} else
		{
			hotspot.skinid = 'ht_url';
			hsinst = new SkinHotspotClass_ht_url(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
			me.callChildLogicBlocksHotspot_ht_url_sizechanged();;
			me.callChildLogicBlocksHotspot_ht_url_changenode();;
			me.callChildLogicBlocksHotspot_ht_url_configloaded();;
			me.callChildLogicBlocksHotspot_ht_url_mouseover();;
			me.callChildLogicBlocksHotspot_ht_url_varchanged_vis_website();;
			me.callChildLogicBlocksHotspot_ht_url_varchanged_opt_url();;
		}
		return hsinst;
	}
	me.removeSkinHotspots=function() {
		if(hotspotTemplates['ht_node']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_node'].length; i++) {
				hotspotTemplates['ht_node'][i] = null;
			}
		}
		if(hotspotTemplates['ht_node']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_node'].length; i++) {
				hotspotTemplates['ht_node'][i] = null;
			}
		}
		if(hotspotTemplates['ht_node']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_node'].length; i++) {
				hotspotTemplates['ht_node'][i] = null;
			}
		}
		if(hotspotTemplates['ht_node']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_node'].length; i++) {
				hotspotTemplates['ht_node'][i] = null;
			}
		}
		if(hotspotTemplates['ht_url']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_url'].length; i++) {
				hotspotTemplates['ht_url'][i] = null;
			}
		}
		hotspotTemplates = [];
	}
	function SkinCloner_thumbnail_cloner_Class(nodeId, parentScope,ggParent,parameter) {
		var me=this;
		var hs='';
		me.parentScope=parentScope;
		me.ggParent=ggParent;
		me.findElements=skin.findElements;
		me.ggNodeId=nodeId;
		me.ggUserdata=skin.player.getNodeUserdata(me.ggNodeId);
		me.elementMouseDown={};
		me.elementMouseOver={};
		me.__div=document.createElement('div');
		me.__div.setAttribute('style','position: absolute;width: 96px; height: 62px; visibility: inherit; overflow: visible;');
		me.__div.style.left=parameter.left;
		me.__div.style.top=parameter.top;
		me.__div.ggIsActive = function() {
			return player.getCurrentNode()==me.ggNodeId;
		}
		me.__div.ggElementNodeId=function() {
			return me.ggNodeId;
		}
		el=me._thumbnail_nodeimage=document.createElement('div');
		els=me._thumbnail_nodeimage__img=document.createElement('img');
		els.className='ggskin ggskin_nodeimage';
		els.setAttribute('src',basePath + "images/hs_preview_image_" + nodeId + ".jpg");
		el.ggNodeId=nodeId;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;thumbnail_nodeimage;');
		els.className='ggskin ggskin_nodeimage';
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="thumbnail_nodeImage";
		el.ggParameter={ rx:0,ry:0,a:0,sx:0.62,sy:0.58 };
		el.ggVisible=true;
		el.className="ggskin ggskin_nodeimage ";
		el.ggType='nodeimage';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 90px;';
		hs+='left : -24px;';
		hs+='position : absolute;';
		hs+='top : -16px;';
		hs+='visibility : inherit;';
		hs+='width : 140px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		el.style[domTransform]=parameterToTransform(el.ggParameter);
		me._thumbnail_nodeimage.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return this.ggNodeId;
		}
		me._thumbnail_nodeimage.ggUpdatePosition=function (useTransition) {
		}
		me.__div.appendChild(me._thumbnail_nodeimage);
		el=me._checkmark_tick=document.createElement('div');
		els=me._checkmark_tick__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxNi4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCIgWw0KCTwhRU5USVRZIG5zX2Zsb3dzICJodHRwOi8vbnMuYWRvYmUuY29tL0Zsb3dzLzEuMC8iPg0KCTwhRU5USVRZIG5zX2V4dGVuZCAiaHR0cDovL25zLmFkb2JlLmNvbS9FeHRlbn'+
			'NpYmlsaXR5LzEuMC8iPg0KCTwhRU5USVRZIG5zX2FpICJodHRwOi8vbnMuYWRvYmUuY29tL0Fkb2JlSWxsdXN0cmF0b3IvMTAuMC8iPg0KCTwhRU5USVRZIG5zX2dyYXBocyAiaHR0cDovL25zLmFkb2JlLmNvbS9HcmFwaHMvMS4wLyI+DQpdPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zOng9IiZuc19leHRlbmQ7IiB4bWxuczppPSImbnNfYWk7IiB4bWxuczpncmFwaD0iJm5zX2dyYXBoczsiDQoJIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOmE9Imh0dHA6Ly9ucy5hZG9iZS5jb20vQWRv'+
			'YmVTVkdWaWV3ZXJFeHRlbnNpb25zLzMuMC8iDQoJIHg9IjBweCIgeT0iMHB4IiB3aWR0aD0iMzJweCIgaGVpZ2h0PSIzMnB4IiB2aWV3Qm94PSItMzcyMiAtMjYwNiAzMiAzMiIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAtMzcyMiAtMjYwNiAzMiAzMiINCgkgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+DQo8ZyBpZD0iTGF5ZXJfMSI+DQo8L2c+DQo8ZyBpZD0iRWJlbmVfMSI+DQo8L2c+DQo8ZyBpZD0iTGF5ZXJfMiI+DQoJPGc+DQoJCTxnPg0KCQkJPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTS0zNjk1LjQ3My0yNTk4LjE0NmMtMC41MTktMC41MTktMS4zNjEtMC41MTktMS44NzksMGwtOC43ODcsOC'+
			'43ODdsLTIuMjkxLTIuMjQzDQoJCQkJYy0wLjUyNS0wLjUxMy0xLjM2Ni0wLjUwNC0xLjg4LDAuMDJjLTAuNTEzLDAuNTI1LTAuNTA0LDEuMzY3LDAuMDIxLDEuODhsMy4yMywzLjE2M2MwLjI1OSwwLjI1MywwLjU5NCwwLjM3OSwwLjkzLDAuMzc5DQoJCQkJYzAuMzQsMCwwLjY4LTAuMTMsMC45NC0wLjM5bDkuNzE3LTkuNzE3Qy0zNjk0Ljk1NC0yNTk2Ljc4NS0zNjk0Ljk1NC0yNTk3LjYyNi0zNjk1LjQ3My0yNTk4LjE0NnoiLz4NCgkJCTxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik0tMzY5OS45Ni0yNTgzLjgzN2gtMTIuMzI1di0xMi4zMjZoMTEuODIxbDIuMjUyLTIuMjUyYy0wLjE2Ni0wLjA4'+
			'Ni0wLjM1Mi0wLjE0MS0wLjU1Mi0wLjE0MWgtMTQuNzE4DQoJCQkJYy0wLjY2MSwwLTEuMTk2LDAuNTM2LTEuMTk2LDEuMTk2djE0LjcxOWMwLDAuNjYsMC41MzUsMS4xOTYsMS4xOTYsMS4xOTZoMTQuNzE4YzAuNjYxLDAsMS4xOTctMC41MzYsMS4xOTctMS4xOTZ2LTEwLjQwMw0KCQkJCWwtMi4zOTMsMi4zOTNWLTI1ODMuODM3eiIvPg0KCQk8L2c+DQoJCTxnIG9wYWNpdHk9IjAuNCIgIGE6YWRvYmUtYmxlbmRpbmctbW9kZT0ibXVsdGlwbHkiPg0KCQkJDQoJCQkJPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMUExNzFCIiBzdHJva2Utd2lkdGg9IjEuNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW'+
			'5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiAgYTphZG9iZS1ibGVuZGluZy1tb2RlPSJub3JtYWwiIGQ9Ig0KCQkJCU0tMzY5NS40NzMtMjU5OC4xNDZjLTAuNTE5LTAuNTE5LTEuMzYxLTAuNTE5LTEuODc5LDBsLTguNzg3LDguNzg3bC0yLjI5MS0yLjI0M2MtMC41MjUtMC41MTMtMS4zNjYtMC41MDQtMS44OCwwLjAyDQoJCQkJYy0wLjUxMywwLjUyNS0wLjUwNCwxLjM2NywwLjAyMSwxLjg4bDMuMjMsMy4xNjNjMC4yNTksMC4yNTMsMC41OTQsMC4zNzksMC45MywwLjM3OWMwLjM0LDAsMC42OC0wLjEzLDAuOTQtMC4zOWw5LjcxNy05LjcxNw0KCQkJCUMtMzY5NC45NTQtMjU5Ni43ODUtMzY5'+
			'NC45NTQtMjU5Ny42MjYtMzY5NS40NzMtMjU5OC4xNDZ6Ii8+DQoJCQkNCgkJCQk8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiMxQTE3MUIiIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiICBhOmFkb2JlLWJsZW5kaW5nLW1vZGU9Im5vcm1hbCIgZD0iDQoJCQkJTS0zNjk5Ljk2LTI1ODMuODM3aC0xMi4zMjV2LTEyLjMyNmgxMS44MjFsMi4yNTItMi4yNTJjLTAuMTY2LTAuMDg2LTAuMzUyLTAuMTQxLTAuNTUyLTAuMTQxaC0xNC43MTgNCgkJCQljLTAuNjYxLDAtMS4xOTYsMC41MzYtMS4xOTYsMS4xOTZ2MTQuNzE5YzAsMC'+
			'42NiwwLjUzNSwxLjE5NiwxLjE5NiwxLjE5NmgxNC43MThjMC42NjEsMCwxLjE5Ny0wLjUzNiwxLjE5Ny0xLjE5NnYtMTAuNDAzDQoJCQkJbC0yLjM5MywyLjM5M1YtMjU4My44Mzd6Ii8+DQoJCTwvZz4NCgkJPGc+DQoJCQk8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNLTM2OTUuNDczLTI1OTguMTQ2Yy0wLjUxOS0wLjUxOS0xLjM2MS0wLjUxOS0xLjg3OSwwbC04Ljc4Nyw4Ljc4N2wtMi4yOTEtMi4yNDMNCgkJCQljLTAuNTI1LTAuNTEzLTEuMzY2LTAuNTA0LTEuODgsMC4wMmMtMC41MTMsMC41MjUtMC41MDQsMS4zNjcsMC4wMjEsMS44OGwzLjIzLDMuMTYzYzAuMjU5LDAuMjUzLDAuNTk0LDAu'+
			'Mzc5LDAuOTMsMC4zNzkNCgkJCQljMC4zNCwwLDAuNjgtMC4xMywwLjk0LTAuMzlsOS43MTctOS43MTdDLTM2OTQuOTU0LTI1OTYuNzg1LTM2OTQuOTU0LTI1OTcuNjI2LTM2OTUuNDczLTI1OTguMTQ2eiIvPg0KCQkJPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTS0zNjk5Ljk2LTI1ODMuODM3aC0xMi4zMjV2LTEyLjMyNmgxMS44MjFsMi4yNTItMi4yNTJjLTAuMTY2LTAuMDg2LTAuMzUyLTAuMTQxLTAuNTUyLTAuMTQxaC0xNC43MTgNCgkJCQljLTAuNjYxLDAtMS4xOTYsMC41MzYtMS4xOTYsMS4xOTZ2MTQuNzE5YzAsMC42NiwwLjUzNSwxLjE5NiwxLjE5NiwxLjE5NmgxNC43MThjMC42NjEsMC'+
			'wxLjE5Ny0wLjUzNiwxLjE5Ny0xLjE5NnYtMTAuNDAzDQoJCQkJbC0yLjM5MywyLjM5M1YtMjU4My44Mzd6Ii8+DQoJCTwvZz4NCgkJPGc+DQoJCQk8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiMxQTE3MUIiIHN0cm9rZS13aWR0aD0iMC4yIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGQ9Ik0tMzY5NS40NzMtMjU5OC4xNDYNCgkJCQljLTAuNTE5LTAuNTE5LTEuMzYxLTAuNTE5LTEuODc5LDBsLTguNzg3LDguNzg3bC0yLjI5MS0yLjI0M2MtMC41MjUtMC41MTMtMS4zNjYtMC41MDQtMS44OCwwLjAyDQoJCQkJYy0wLjUxMywwLjUyNS0wLjUwNCwxLjM2'+
			'NywwLjAyMSwxLjg4bDMuMjMsMy4xNjNjMC4yNTksMC4yNTMsMC41OTQsMC4zNzksMC45MywwLjM3OWMwLjM0LDAsMC42OC0wLjEzLDAuOTQtMC4zOWw5LjcxNy05LjcxNw0KCQkJCUMtMzY5NC45NTQtMjU5Ni43ODUtMzY5NC45NTQtMjU5Ny42MjYtMzY5NS40NzMtMjU5OC4xNDZ6Ii8+DQoJCQk8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiMxQTE3MUIiIHN0cm9rZS13aWR0aD0iMC4yIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGQ9Ik0tMzY5OS45Ni0yNTgzLjgzNw0KCQkJCWgtMTIuMzI1di0xMi4zMjZoMTEuODIxbDIuMjUyLTIuMjUyYy0wLjE2Ni'+
			'0wLjA4Ni0wLjM1Mi0wLjE0MS0wLjU1Mi0wLjE0MWgtMTQuNzE4Yy0wLjY2MSwwLTEuMTk2LDAuNTM2LTEuMTk2LDEuMTk2djE0LjcxOQ0KCQkJCWMwLDAuNjYsMC41MzUsMS4xOTYsMS4xOTYsMS4xOTZoMTQuNzE4YzAuNjYxLDAsMS4xOTctMC41MzYsMS4xOTctMS4xOTZ2LTEwLjQwM2wtMi4zOTMsMi4zOTNWLTI1ODMuODM3eiIvPg0KCQk8L2c+DQoJPC9nPg0KPC9nPg0KPC9zdmc+DQo=';
		me._checkmark_tick__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;checkmark_tick;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="checkmark_tick";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 24px;';
		hs+='position : absolute;';
		hs+='right : 7px;';
		hs+='top : 3px;';
		hs+='visibility : hidden;';
		hs+='width : 24px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._checkmark_tick.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._checkmark_tick.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				(player.nodeVisited(me._checkmark_tick.ggElementNodeId()) == true) || 
				(me._checkmark_tick.ggIsActive() == true)
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._checkmark_tick.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._checkmark_tick.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._checkmark_tick.style[domTransition]='';
				if (me._checkmark_tick.ggCurrentLogicStateVisible == 0) {
					me._checkmark_tick.style.visibility=(Number(me._checkmark_tick.style.opacity)>0||!me._checkmark_tick.style.opacity)?'inherit':'hidden';
					me._checkmark_tick.ggVisible=true;
				}
				else {
					me._checkmark_tick.style.visibility="hidden";
					me._checkmark_tick.ggVisible=false;
				}
			}
		}
		me._checkmark_tick.ggUpdatePosition=function (useTransition) {
		}
		me.__div.appendChild(me._checkmark_tick);
		el=me._thumbnail_active=document.createElement('div');
		el.ggId="thumbnail_active";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='border : 3px solid #d1d1d1;';
		hs+='cursor : pointer;';
		hs+='height : 51px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 85px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._thumbnail_active.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._thumbnail_active.logicBlock_bordercolor = function() {
			var newLogicStateBorderColor;
			if (
				(me._thumbnail_active.ggIsActive() == true)
			)
			{
				newLogicStateBorderColor = 0;
			}
			else if (
				(me.elementMouseOver['thumbnail_active'] == true)
			)
			{
				newLogicStateBorderColor = 1;
			}
			else {
				newLogicStateBorderColor = -1;
			}
			if (me._thumbnail_active.ggCurrentLogicStateBorderColor != newLogicStateBorderColor) {
				me._thumbnail_active.ggCurrentLogicStateBorderColor = newLogicStateBorderColor;
				me._thumbnail_active.style[domTransition]='border-color 0s';
				if (me._thumbnail_active.ggCurrentLogicStateBorderColor == 0) {
					me._thumbnail_active.style.borderColor="rgba(255,255,255,1)";
				}
				else if (me._thumbnail_active.ggCurrentLogicStateBorderColor == 1) {
					me._thumbnail_active.style.borderColor="rgba(255,255,255,1)";
				}
				else {
					me._thumbnail_active.style.borderColor="rgba(209,209,209,1)";
				}
			}
		}
		me._thumbnail_active.onclick=function (e) {
			if (
				(
					(me._thumbnail_active.ggIsActive() == false)
				)
			) {
				player.openNext("{"+me.ggNodeId+"}","");
			}
		}
		me._thumbnail_active.onmouseover=function (e) {
			me.elementMouseOver['thumbnail_active']=true;
			me._thumbnail_title.logicBlock_alpha();
			me._thumbnail_active.logicBlock_bordercolor();
		}
		me._thumbnail_active.onmouseout=function (e) {
			me.elementMouseOver['thumbnail_active']=false;
			me._thumbnail_title.logicBlock_alpha();
			me._thumbnail_active.logicBlock_bordercolor();
		}
		me._thumbnail_active.ontouchend=function (e) {
			me.elementMouseOver['thumbnail_active']=false;
			me._thumbnail_title.logicBlock_alpha();
			me._thumbnail_active.logicBlock_bordercolor();
		}
		me._thumbnail_active.ggUpdatePosition=function (useTransition) {
		}
		el=me._thumbnail_title=document.createElement('div');
		els=me._thumbnail_title__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="thumbnail_title";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 51px;';
		hs+='left : -10000px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 85px;';
		hs+='pointer-events:auto;';
		hs+='text-shadow: 1px 1px 2px #000000;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 85px;';
		hs+='height: 51px;';
		hs+='background: #000000;';
		hs+='background: rgba(0,0,0,0.392157);';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML=me.ggUserdata.title;
		el.appendChild(els);
		me._thumbnail_title.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._thumbnail_title.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				(me.elementMouseOver['thumbnail_active'] == true) && 
				(me.ggUserdata.title != "") && 
				(player.getVariableValue('opt_thumbnail_menu_tooltip') == true)
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._thumbnail_title.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._thumbnail_title.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._thumbnail_title.style[domTransition]='opacity 500ms ease 0ms, visibility 500ms ease 0ms';
				if (me._thumbnail_title.ggCurrentLogicStateAlpha == 0) {
					me._thumbnail_title.style.visibility=me._thumbnail_title.ggVisible?'inherit':'hidden';
					me._thumbnail_title.style.opacity=1;
				}
				else {
					me._thumbnail_title.style.visibility="hidden";
					me._thumbnail_title.style.opacity=0;
				}
			}
		}
		me._thumbnail_title.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._thumbnail_active.appendChild(me._thumbnail_title);
		me.__div.appendChild(me._thumbnail_active);
	};
	function SkinCloner_dropdown_cloner_Class(nodeId, parentScope,ggParent,parameter) {
		var me=this;
		var hs='';
		me.parentScope=parentScope;
		me.ggParent=ggParent;
		me.findElements=skin.findElements;
		me.ggNodeId=nodeId;
		me.ggUserdata=skin.player.getNodeUserdata(me.ggNodeId);
		me.elementMouseDown={};
		me.elementMouseOver={};
		me.__div=document.createElement('div');
		me.__div.setAttribute('style','position: absolute;width: 169px; height: 24px; visibility: inherit; overflow: visible;');
		me.__div.style.left=parameter.left;
		me.__div.style.top=parameter.top;
		me.__div.ggIsActive = function() {
			return player.getCurrentNode()==me.ggNodeId;
		}
		me.__div.ggElementNodeId=function() {
			return me.ggNodeId;
		}
		el=me._dropdown_menu_text=document.createElement('div');
		els=me._dropdown_menu_text__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Dropdown Menu Text";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 20px;';
		hs+='left : 21px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 150px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 150px;';
		hs+='height: 20px;';
		hs+='background: #444444;';
		hs+='background: rgba(68,68,68,0.784314);';
		hs+='border: 0px solid #848484;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 2px 3px 2px 3px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML=me.ggUserdata.title;
		el.appendChild(els);
		me._dropdown_menu_text.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._dropdown_menu_text.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				(me.elementMouseOver['dropdown_menu_text'] == true)
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else if (
				(me._dropdown_menu_text.ggIsActive() == true)
			)
			{
				newLogicStateBackgroundColor = 1;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._dropdown_menu_text.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._dropdown_menu_text.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._dropdown_menu_text__text.style[domTransition]='background-color 0s';
				if (me._dropdown_menu_text.ggCurrentLogicStateBackgroundColor == 0) {
					me._dropdown_menu_text__text.style.backgroundColor="rgba(0,0,0,1)";
				}
				else if (me._dropdown_menu_text.ggCurrentLogicStateBackgroundColor == 1) {
					me._dropdown_menu_text__text.style.backgroundColor="rgba(0,0,0,1)";
				}
				else {
					me._dropdown_menu_text__text.style.backgroundColor="rgba(68,68,68,0.784314)";
				}
			}
		}
		me._dropdown_menu_text.onclick=function (e) {
			if (
				(
					(me._dropdown_menu_text.ggIsActive() == false)
				)
			) {
				player.openNext("{"+me.ggNodeId+"}",player.hotspot.target);
			}
			skin._dropdown_menu_title_background.onclick();
		}
		me._dropdown_menu_text.onmouseover=function (e) {
			me.elementMouseOver['dropdown_menu_text']=true;
			me._dropdown_menu_text.logicBlock_backgroundcolor();
		}
		me._dropdown_menu_text.onmouseout=function (e) {
			if (e && e.toElement) {
				var current = e.toElement;
				while (current = current.parentNode) {
				if (current == me._dropdown_menu_text__text)
					return;
				}
			}
			me.elementMouseOver['dropdown_menu_text']=false;
			me._dropdown_menu_text.logicBlock_backgroundcolor();
		}
		me._dropdown_menu_text.ontouchend=function (e) {
			me.elementMouseOver['dropdown_menu_text']=false;
			me._dropdown_menu_text.logicBlock_backgroundcolor();
		}
		me._dropdown_menu_text.ggUpdatePosition=function (useTransition) {
		}
		me.__div.appendChild(me._dropdown_menu_text);
		el=me._dropdown_checkmark=document.createElement('div');
		els=me._dropdown_checkmark__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxOS4xLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiDQoJIHZpZXdCb3g9Ii0yNDAgMzMyIDEzMCAxMzAiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgLTI0MCAzMzIgMTMwIDEzMD'+
			'siIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPHN0eWxlIHR5cGU9InRleHQvY3NzIj4NCgkuc3Qwe2ZpbGw6IzAwMDAwMDt9DQoJLnN0MXtmaWxsOiNGRkZGRkY7fQ0KPC9zdHlsZT4NCjxnIGlkPSJMYXllcl8xXzFfIj4NCjwvZz4NCjxnIGlkPSJMYXllcl8yIj4NCgk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNLTEyMi4xLDM0MS41aC0xMDUuOGMtMS40LDAtMi42LDEuMS0yLjYsMi42djEwNS44YzAsMS40LDEuMSwyLjYsMi42LDIuNmgxMDUuOGMxLjQsMCwyLjYtMS4xLDIuNi0yLjZWMzQ0LjENCgkJQy0xMTkuNiwzNDIuNy0xMjAuNywzNDEuNS0xMjIuMSwzNDEuNXogTS0xMzIuOCwzODEuN2wtNTAu'+
			'OCw1MC44Yy0wLjMsMC4zLTAuOCwwLjUtMS4yLDAuNWMtMC41LDAtMC45LTAuMS0xLjMtMC41bC0zMS43LTMxLjgNCgkJYy0wLjctMC43LTAuNy0xLjcsMC0yLjRsMTIuNS0xMi41YzAuNy0wLjcsMS43LTAuNywyLjQsMGwxOCwxOGwzNy4xLTM3LjFjMC43LTAuNywxLjctMC43LDIuNCwwbDEyLjUsMTIuNQ0KCQlDLTEzMi4xLDM3OS45LTEzMi4xLDM4MS0xMzIuOCwzODEuN3oiLz4NCgk8cGF0aCBjbGFzcz0ic3QxIiBkPSJNLTE0Ny43LDM2Ni44bC0zNy4xLDM3LjFsLTE4LTE4Yy0wLjctMC43LTEuNy0wLjctMi40LDBsLTEyLjUsMTIuNWMtMC43LDAuNy0wLjcsMS43LDAsMi40bDMxLjcsMzEuOA'+
			'0KCQljMC4zLDAuMywwLjgsMC41LDEuMywwLjVjMC40LDAsMC45LTAuMiwxLjItMC41bDUwLjgtNTAuOWMwLjctMC43LDAuNy0xLjcsMC0yLjRsLTEyLjUtMTIuNUMtMTQ1LjksMzY2LjEtMTQ3LDM2Ni4xLTE0Ny43LDM2Ni44eiINCgkJLz4NCjwvZz4NCjwvc3ZnPg0K';
		me._dropdown_checkmark__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;dropdown_checkmark;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Dropdown Checkmark";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 20px;';
		hs+='left : 1px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 20px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._dropdown_checkmark.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._dropdown_checkmark.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				(player.nodeVisited(me._dropdown_checkmark.ggElementNodeId()) == true) || 
				(me._dropdown_checkmark.ggIsActive() == true)
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._dropdown_checkmark.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._dropdown_checkmark.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._dropdown_checkmark.style[domTransition]='opacity 0s, visibility 0s';
				if (me._dropdown_checkmark.ggCurrentLogicStateAlpha == 0) {
					me._dropdown_checkmark.style.visibility=me._dropdown_checkmark.ggVisible?'inherit':'hidden';
					me._dropdown_checkmark.style.opacity=1;
				}
				else {
					me._dropdown_checkmark.style.visibility="hidden";
					me._dropdown_checkmark.style.opacity=0;
				}
			}
		}
		me._dropdown_checkmark.ggUpdatePosition=function (useTransition) {
		}
		me.__div.appendChild(me._dropdown_checkmark);
	};
	me.addSkin();
	me._close_url.logicBlock_visible();
	me._button_image_normalscreen.logicBlock_visible();
	me._button_image_fullscreen.logicBlock_visible();
	me._tt_fullscreen.logicBlock_text();
	me._map_pin_tt.logicBlock_alpha();
	me._menu_open.logicBlock_position();
	me._menu_open.logicBlock_alpha();
	me._tt_thumbnail_open.logicBlock_text();
	me._thumbnail_menu.logicBlock_alpha();
	me._screen_tint_url.logicBlock_visible();
	me._web_page.logicBlock_visible();
	me._tt_zoomout.logicBlock_position();
	me._tt_zoomin.logicBlock_position();
	me._tt_fullscreen.logicBlock_position();
	me._tt_thumbnail_open.logicBlock_position();
	me._thumbnail_menu.logicBlock_position();
	player.addListener('sizechanged', function(args) { me._close_url.logicBlock_visible(); });
	player.addListener('fullscreenenter', function(args) { me._button_image_normalscreen.logicBlock_visible();me._button_image_fullscreen.logicBlock_visible();me._tt_fullscreen.logicBlock_text(); });
	player.addListener('fullscreenexit', function(args) { me._button_image_normalscreen.logicBlock_visible();me._button_image_fullscreen.logicBlock_visible();me._tt_fullscreen.logicBlock_text(); });
	player.addListener('changenode', function(args) { me._map_pin_tt.logicBlock_alpha();me._menu_open.logicBlock_position();me._menu_open.logicBlock_alpha();me._tt_thumbnail_open.logicBlock_text();me._thumbnail_menu.logicBlock_alpha();me._screen_tint_url.logicBlock_visible();me._web_page.logicBlock_visible();me._close_url.logicBlock_visible(); });
	player.addListener('configloaded', function(args) { me._tt_zoomout.logicBlock_position();me._tt_zoomin.logicBlock_position();me._tt_fullscreen.logicBlock_position();me._tt_thumbnail_open.logicBlock_position();me._thumbnail_menu.logicBlock_position(); });
	player.addListener('varchanged_vis_website', function(args) { me._screen_tint_url.logicBlock_visible();me._web_page.logicBlock_visible();me._close_url.logicBlock_visible(); });
	player.addListener('varchanged_category_visible', function(args) { me._menu_open.logicBlock_position();me._menu_open.logicBlock_alpha(); });
	player.addListener('varchanged_vis_thumbnail_menu', function(args) { me._tt_thumbnail_open.logicBlock_text();me._thumbnail_menu.logicBlock_alpha(); });
	player.addListener('changenode', function(args) { me._dropdown_cloner.callChildLogicBlocks_changenode();me._thumbnail_cloner.callChildLogicBlocks_changenode(); });
	player.addListener('mouseover', function(args) { me._dropdown_cloner.callChildLogicBlocks_mouseover();me._thumbnail_cloner.callChildLogicBlocks_mouseover(); });
	player.addListener('mouseover', function(args) { me._thumbnail_cloner.callChildLogicBlocks_mouseover(); });
	player.addListener('changenode', function(args) { me._dropdown_cloner.callChildLogicBlocks_active();me._thumbnail_cloner.callChildLogicBlocks_active(); });
	player.addListener('varchanged_opt_thumbnail_menu_tooltip', function(args) { me._thumbnail_cloner.callChildLogicBlocks_varchanged_opt_thumbnail_menu_tooltip(); });
	player.addListener('sizechanged', function(args) { me.callChildLogicBlocksHotspot_ht_node2_sizechanged();me.callChildLogicBlocksHotspot_ht_node1_sizechanged();me.callChildLogicBlocksHotspot_ht_node0_sizechanged();me.callChildLogicBlocksHotspot_ht_node_sizechanged();me.callChildLogicBlocksHotspot_ht_url_sizechanged(); });
	player.addListener('changenode', function(args) { me.callChildLogicBlocksHotspot_ht_node2_changenode();me.callChildLogicBlocksHotspot_ht_node1_changenode();me.callChildLogicBlocksHotspot_ht_node0_changenode();me.callChildLogicBlocksHotspot_ht_node_changenode();me.callChildLogicBlocksHotspot_ht_url_changenode(); });
	player.addListener('configloaded', function(args) { me.callChildLogicBlocksHotspot_ht_node2_configloaded();me.callChildLogicBlocksHotspot_ht_node1_configloaded();me.callChildLogicBlocksHotspot_ht_node0_configloaded();me.callChildLogicBlocksHotspot_ht_node_configloaded();me.callChildLogicBlocksHotspot_ht_url_configloaded(); });
	player.addListener('mouseover', function(args) { me.callChildLogicBlocksHotspot_ht_node2_mouseover();me.callChildLogicBlocksHotspot_ht_node1_mouseover();me.callChildLogicBlocksHotspot_ht_node0_mouseover();me.callChildLogicBlocksHotspot_ht_node_mouseover();me.callChildLogicBlocksHotspot_ht_url_mouseover(); });
	player.addListener('changenode', function(args) { me.callChildLogicBlocksHotspot_ht_node2_active();me.callChildLogicBlocksHotspot_ht_node1_active();me.callChildLogicBlocksHotspot_ht_node0_active();me.callChildLogicBlocksHotspot_ht_node_active(); });
	player.addListener('varchanged_vis_website', function(args) { me.callChildLogicBlocksHotspot_ht_node1_varchanged_vis_website();me.callChildLogicBlocksHotspot_ht_url_varchanged_vis_website(); });
	player.addListener('varchanged_opt_3d_preview', function(args) { me.callChildLogicBlocksHotspot_ht_node2_varchanged_opt_3d_preview();me.callChildLogicBlocksHotspot_ht_node0_varchanged_opt_3d_preview();me.callChildLogicBlocksHotspot_ht_node_varchanged_opt_3d_preview(); });
	player.addListener('varchanged_opt_hotspot_preview', function(args) { me.callChildLogicBlocksHotspot_ht_node1_varchanged_opt_hotspot_preview(); });
	player.addListener('varchanged_opt_url', function(args) { me.callChildLogicBlocksHotspot_ht_url_varchanged_opt_url(); });
	player.addListener('hotspotsremoved', function(args) { me.removeSkinHotspots(); });
	document.addEventListener('keydown', function(e) {
		var key = e.which || e.keyCode;
		me.skinKeyPressed = key;
	});
	document.addEventListener('keyup', function(e) {
		var key = e.which || e.keyCode;
		me.skinKeyPressed = 0;
	});
	me.skinTimerEvent();
};