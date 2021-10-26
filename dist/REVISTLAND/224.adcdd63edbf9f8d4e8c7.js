"use strict";(self.webpackChunkrevistland=self.webpackChunkrevistland||[]).push([[224],{8224:(U,A,r)=>{r.r(A),r.d(A,{AutenticacionModule:()=>Q});var g=r(8583),h=r(4655),n=r(3679);class d{constructor(i,e,a){this._nombre=i,this._contrasena=e,this._idTipoCuenta=a}get idTipoCuenta(){return this._idTipoCuenta}set idTipoCuenta(i){this._idTipoCuenta=i}get contrasena(){return this._contrasena}set contrasena(i){this._contrasena=i}get nombre(){return this._nombre}set nombre(i){this._nombre=i}}var t=r(7716),f=r(614),l=r(2839),u=r(3738),x=r(5618),I=r(8295),_=r(9983),F=r(1095);function y(o,i){1&o&&(t.TgZ(0,"span",20),t._uU(1," Esta cuenta no existe. "),t.qZA())}function N(o,i){1&o&&(t.TgZ(0,"span",20),t._uU(1," No puedes regresar al pasado "),t.qZA())}let M=(()=>{class o{constructor(e,a,s,c){this.fb=e,this.usuarioService=a,this.router=s,this.fechaService=c,this.fechaInvalida=!1,this.miFormulario=this.fb.group({nombre:["",[n.kI.required,n.kI.minLength(5)]],contrasena:["",[n.kI.required,n.kI.minLength(5)]],fechaActual:["",n.kI.required]}),this.noExiste=!1}ngOnInit(){this.fechaService.obtenerFecha().subscribe(e=>{this.miFormulario.controls.fechaActual.setValue(e.fecha),this.fechaActual=e.fecha})}autenticarUsuario(){var e,a,s;if(this.miFormulario.invalid)return void this.miFormulario.markAllAsTouched();const c=null===(e=this.miFormulario.get("fechaActual"))||void 0===e?void 0:e.value;if(this.esInvalidoFecha(this.fechaActual,c))return;console.log("valido");const m=null===(a=this.miFormulario.get("nombre"))||void 0===a?void 0:a.value,b=null===(s=this.miFormulario.get("contrasena"))||void 0===s?void 0:s.value,Z={fecha:c},T=new d(m,b,0);this.usuarioService.autenticarUsuario(T).subscribe(v=>{0==v.idTipoCuenta?(this.noExiste=!0,console.log("No existe")):(this.fechaService.cambiarFecha(Z).subscribe(C=>console.log(C)),this.usuarioService.verificarTienePerfil(v.nombre).subscribe(C=>{if(console.log(C),null==C.length)switch(v.idTipoCuenta){case 1:this.router.navigate(["./editor/publicar"]);break;case 2:this.router.navigate(["./administrador/costo"]);break;case 3:this.router.navigate(["./usuario/inicio"]);break;default:this.router.navigate(["./autenticacion/registro"])}else switch(v.idTipoCuenta){case 1:this.router.navigate(["./editor/perfil"]);break;case 2:this.router.navigate(["./administrador/costo"]);break;case 3:this.router.navigate(["./usuario/perfil"]);break;default:this.router.navigate(["./autenticacion/registro"])}}))})}esInvalidoFecha(e,a){let s=!1;this.fechaInvalida=!1;const c=new Date(e);return new Date(a)<c&&(s=!0,this.fechaInvalida=!0),s}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(n.qu),t.Y36(f.i),t.Y36(h.F0),t.Y36(l.s))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-login"]],decls:32,vars:3,consts:[[1,"body"],[1,"login"],[1,"redondear"],["fxLayout","column","fxLayoutAlign","center center"],[1,"margen"],["xmlns","http://www.w3.org/2000/svg","width","175","height","175","fill","#fff","viewBox","0 0 16 16",1,"bi","bi-person-circle"],["d","M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"],["fill-rule","evenodd","d","M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"],[1,"tamano-titulo","margen"],["class","form-text text-danger",4,"ngIf"],["autocomplete","off",3,"formGroup","ngSubmit"],["fxLayout","column","fxLayoutAlign","center "],["appearance","fill",1,"margen"],["formControlName","nombre","matInput","","type","text",1,"tamano-letra"],["formControlName","contrasena","matInput","","type","password",1,"tamano-letra"],["formControlName","fechaActual","type","date",1,"select-date"],["gu",""],["fxLayoutAlign","center center","fxLayout","column"],["mat-raised-button","","color","primary",1,"tamano-letra"],["routerLink","/autenticacion/registro","href","#",1,"vinculo"],[1,"form-text","text-danger"]],template:function(e,a){1&e&&(t.TgZ(0,"div",0),t.TgZ(1,"div",1),t.TgZ(2,"mat-card",2),t.TgZ(3,"mat-card-header",3),t.TgZ(4,"mat-card-title",4),t.O4$(),t.TgZ(5,"svg",5),t._UZ(6,"path",6),t._UZ(7,"path",7),t.qZA(),t.qZA(),t.kcU(),t.TgZ(8,"h2",8),t._uU(9,"INICIAR SESION"),t.qZA(),t.qZA(),t.YNc(10,y,2,0,"span",9),t.TgZ(11,"form",10),t.NdJ("ngSubmit",function(){return a.autenticarUsuario()}),t.TgZ(12,"mat-card-content"),t.TgZ(13,"div",11),t.TgZ(14,"mat-form-field",12),t.TgZ(15,"mat-label"),t._uU(16,"Nombre de usuario"),t.qZA(),t._UZ(17,"input",13),t.qZA(),t.TgZ(18,"mat-form-field",12),t.TgZ(19,"mat-label"),t._uU(20,"Contrase\xf1a"),t.qZA(),t._UZ(21,"input",14),t.qZA(),t.qZA(),t.TgZ(22,"div"),t.YNc(23,N,2,0,"span",9),t.qZA(),t._UZ(24,"input",15,16),t.qZA(),t.TgZ(26,"mat-card-actions",17),t.TgZ(27,"button",18),t._uU(28,"Ingresar"),t.qZA(),t._UZ(29,"br"),t.TgZ(30,"a",19),t._uU(31,"Crear una cuenta"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA()),2&e&&(t.xp6(10),t.Q6J("ngIf",a.noExiste),t.xp6(1),t.Q6J("formGroup",a.miFormulario),t.xp6(12),t.Q6J("ngIf",a.fechaInvalida))},directives:[u.a8,u.dk,x.xw,x.Wh,u.n5,g.O5,n._Y,n.JL,n.sg,u.dn,I.KE,I.hX,n.Fj,_.Nt,n.JJ,n.u,u.hq,F.lW,h.yS],styles:[".registro[_ngcontent-%COMP%]{width:100%;max-width:500px;text-align:center}.login[_ngcontent-%COMP%]{width:100%;max-width:380px;text-align:center}.redondear[_ngcontent-%COMP%]{border-radius:20px}.vinculo[_ngcontent-%COMP%]{color:#fff;font-size:18px}.tamano-titulo[_ngcontent-%COMP%]{font-size:30px}.margen[_ngcontent-%COMP%]{margin:15px 30px}.tamano-letra[_ngcontent-%COMP%]{font-size:20px}.borde-icono[_ngcontent-%COMP%]{border:11px solid white;padding:10px;border-radius:130px}.select-date[_ngcontent-%COMP%]{border:none;border-bottom:1px solid #777777;width:50%;font-size:13px;background:#424242;color:#ffebcd}"]}),o})();var p=(()=>{return(o=p||(p={})).EDITOR="EDITOR",o.NORMAL="NORMAL",p;var o})(),S=r(8002),L=r(1841);let E=(()=>{class o{constructor(e){this.http=e}validate(e){const a=e.value;return console.log(a),this.http.get(`http://localhost:8080/REVISTLAND/controladorAutenticacion?accion=validarNombreUsuario&nombre=${a}`).pipe((0,S.U)(s=>(console.log("Respuest: "),console.log(s),0===s.length?null:{usuarioUsado:!0})))}}return o.\u0275fac=function(e){return new(e||o)(t.LFG(L.eN))},o.\u0275prov=t.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})();var q=r(7441),R=r(2458);function P(o,i){if(1&o&&(t.TgZ(0,"span",22),t._uU(1),t.qZA()),2&o){const e=t.oxw();t.xp6(1),t.hij(" ",e.getErrorNombre()," ")}}function w(o,i){1&o&&(t.TgZ(0,"span",22),t._uU(1," Debe ser mayor a 5 caracteres "),t.qZA())}function D(o,i){1&o&&(t.TgZ(0,"span",22),t._uU(1," Las contrasenas no coinciden "),t.qZA())}function J(o,i){if(1&o&&(t.TgZ(0,"mat-option",23),t._uU(1),t.qZA()),2&o){const e=i.$implicit;t.Q6J("value",e),t.xp6(1),t.hij(" ",e," ")}}function Y(o,i){1&o&&(t.TgZ(0,"span",22),t._uU(1," No puedes regresar al pasado "),t.qZA())}const z=[{path:"",children:[{path:"login",component:M},{path:"registro",component:(()=>{class o{constructor(e,a,s,c,m){this.fb=e,this.nombreUsuarioValidator=a,this.usuarioService=s,this.router=c,this.fechaService=m,this.tiposCuenta=[],this.fechaInvalida=!1,this.miFormulario=this.fb.group({nombre:["",[n.kI.required,n.kI.minLength(5)],[this.nombreUsuarioValidator]],pContrasena:["",[n.kI.required,n.kI.minLength(5)]],sContrasena:["",[n.kI.required,n.kI.minLength(5)]],tipoCuenta:["",n.kI.required],fechaActual:["",n.kI.required]},{validators:[this.contrasenasIguales("pContrasena","sContrasena")]})}ngOnInit(){this.construirArregloTipoCuenta(),this.fechaService.obtenerFecha().subscribe(e=>{this.miFormulario.controls.fechaActual.setValue(e.fecha),this.fechaActual=e.fecha})}construirArregloTipoCuenta(){for(let e in p)this.tiposCuenta.push(e)}getErrorNombre(){var e;const a=null===(e=this.miFormulario.get("nombre"))||void 0===e?void 0:e.errors;return(null==a?void 0:a.required)?"Este campo es obligatorio":(null==a?void 0:a.minlength)?"Debe tener almenos 5 caracteres":(null==a?void 0:a.usuarioUsado)?"Este nombre de usuario ya esta en uso":"Hola mundo"}contrasenasIguales(e,a){return s=>{var c,m,b,Z;return(null===(c=s.get(e))||void 0===c?void 0:c.value)!==(null===(m=s.get(a))||void 0===m?void 0:m.value)?(null===(b=s.get(a))||void 0===b||b.setErrors({noIguales:!0}),{noIguales:!0}):(null===(Z=s.get(a))||void 0===Z||Z.setErrors(null),null)}}esInvalidoFecha(e,a){let s=!1;this.fechaInvalida=!1;const c=new Date(e);return new Date(a)<c&&(s=!0,this.fechaInvalida=!0),s}campoEsValido(e){return this.miFormulario.controls[e].errors&&this.miFormulario.controls[e].touched}crearUsuario(){var e,a,s,c;if(this.miFormulario.invalid)return void this.miFormulario.markAllAsTouched();const m=null===(e=this.miFormulario.get("fechaActual"))||void 0===e?void 0:e.value;if(this.esInvalidoFecha(this.fechaActual,m))return;const b=null===(a=this.miFormulario.get("nombre"))||void 0===a?void 0:a.value,Z=null===(s=this.miFormulario.get("sContrasena"))||void 0===s?void 0:s.value,T=null===(c=this.miFormulario.get("tipoCuenta"))||void 0===c?void 0:c.value,v=new d(b,Z,this.obtenerIdTipoCuenta(T));this.fechaService.cambiarFecha({fecha:m}).subscribe(O=>console.log(O)),this.usuarioService.agregarNuevoUsuario(v).subscribe(O=>{switch(T){case p.EDITOR:this.router.navigate(["./editor/perfil"]);break;case p.NORMAL:this.router.navigate(["./usuario/perfil"])}}),this.miFormulario.reset()}obtenerIdTipoCuenta(e){switch(e){case p.EDITOR:return 1;case p.NORMAL:return 3}}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(n.qu),t.Y36(E),t.Y36(f.i),t.Y36(h.F0),t.Y36(l.s))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-registro"]],decls:41,vars:7,consts:[[1,"body"],[1,"registro"],[1,"redondear"],["fxLayout","column","fxLayoutAlign","center center"],[1,"margen"],["xmlns","http://www.w3.org/2000/svg","width","138","height","138","fill","currentColor","viewBox","0 0 16 16",1,"bi","bi-person-plus-fill","borde-icono"],["d","M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"],["fill-rule","evenodd","d","M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5z"],[1,"tamano-titulo","margen"],["autocomplete","off",3,"formGroup","ngSubmit"],["fxLayout","column","fxLayoutAlign","center"],["class","form-text text-danger",4,"ngIf"],["appearance","fill",1,"margen"],["matInput","","formControlName","nombre","type","text",1,"tamano-letra"],["matInput","","formControlName","pContrasena","type","password",1,"tamano-letra"],["matInput","","formControlName","sContrasena","type","password",1,"tamano-letra"],["formControlName","tipoCuenta"],[3,"value",4,"ngFor","ngForOf"],["formControlName","fechaActual","type","date",1,"select-date"],["gu",""],["fxLayoutAlign","center center","fxLayout","column"],["mat-flat-button","","type","submit","color","primary",1,"tamano-letra",3,"disabled"],[1,"form-text","text-danger"],[3,"value"]],template:function(e,a){1&e&&(t.TgZ(0,"div",0),t.TgZ(1,"div",1),t.TgZ(2,"mat-card",2),t.TgZ(3,"mat-card-header",3),t.TgZ(4,"mat-card-title",4),t.O4$(),t.TgZ(5,"svg",5),t._UZ(6,"path",6),t._UZ(7,"path",7),t.qZA(),t.qZA(),t.kcU(),t.TgZ(8,"h2",8),t._uU(9,"REGISTRARSE"),t.qZA(),t.qZA(),t.TgZ(10,"form",9),t.NdJ("ngSubmit",function(){return a.crearUsuario()}),t.TgZ(11,"mat-card-content"),t.TgZ(12,"div",10),t.YNc(13,P,2,1,"span",11),t.TgZ(14,"mat-form-field",12),t.TgZ(15,"mat-label"),t._uU(16,"Ingrese un nombre de usuario"),t.qZA(),t._UZ(17,"input",13),t.qZA(),t.YNc(18,w,2,0,"span",11),t.TgZ(19,"mat-form-field",12),t.TgZ(20,"mat-label"),t._uU(21,"Ingrese la contrasena"),t.qZA(),t._UZ(22,"input",14),t.qZA(),t.YNc(23,D,2,0,"span",11),t.TgZ(24,"mat-form-field",12),t.TgZ(25,"mat-label"),t._uU(26,"Vuelva a ingresar la contrasena"),t.qZA(),t._UZ(27,"input",15),t.qZA(),t.TgZ(28,"mat-form-field",12),t.TgZ(29,"mat-label"),t._uU(30,"Tipo de cuenta"),t.qZA(),t.TgZ(31,"mat-select",16),t.YNc(32,J,2,2,"mat-option",17),t.qZA(),t.qZA(),t.qZA(),t.TgZ(33,"div"),t.YNc(34,Y,2,0,"span",11),t.qZA(),t._UZ(35,"input",18,19),t.qZA(),t.TgZ(37,"mat-card-actions",20),t.TgZ(38,"button",21),t._uU(39," Registrarse "),t.qZA(),t._UZ(40,"br"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA()),2&e&&(t.xp6(10),t.Q6J("formGroup",a.miFormulario),t.xp6(3),t.Q6J("ngIf",a.campoEsValido("nombre")),t.xp6(5),t.Q6J("ngIf",a.campoEsValido("pContrasena")),t.xp6(5),t.Q6J("ngIf",a.campoEsValido("sContrasena")),t.xp6(9),t.Q6J("ngForOf",a.tiposCuenta),t.xp6(2),t.Q6J("ngIf",a.fechaInvalida),t.xp6(4),t.Q6J("disabled",a.miFormulario.pending))},directives:[u.a8,u.dk,x.xw,x.Wh,u.n5,n._Y,n.JL,n.sg,u.dn,g.O5,I.KE,I.hX,_.Nt,n.Fj,n.JJ,n.u,q.gD,g.sg,u.hq,F.lW,R.ey],styles:[".registro[_ngcontent-%COMP%]{width:100%;max-width:500px;text-align:center}.login[_ngcontent-%COMP%]{width:100%;max-width:380px;text-align:center}.redondear[_ngcontent-%COMP%]{border-radius:20px}.vinculo[_ngcontent-%COMP%]{color:#fff;font-size:18px}.tamano-titulo[_ngcontent-%COMP%]{font-size:30px}.margen[_ngcontent-%COMP%]{margin:15px 30px}.tamano-letra[_ngcontent-%COMP%]{font-size:20px}.borde-icono[_ngcontent-%COMP%]{border:11px solid white;padding:10px;border-radius:130px}.select-date[_ngcontent-%COMP%]{border:none;border-bottom:1px solid #777777;width:50%;font-size:13px;background:#424242;color:#ffebcd}"]}),o})()},{path:"**",redirectTo:"login"}]}];let k=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[[h.Bz.forChild(z)],h.Bz]}),o})();var V=r(2898),B=r(3356);let Q=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[[g.ez,k,V.q,B.o9,n.UX]]}),o})()},614:(U,A,r)=>{r.d(A,{i:()=>d});var g=r(3342),h=r(7716),n=r(1841);let d=(()=>{class t{constructor(l){this.http=l,this.baseUrl="http://localhost:8080/REVISTLAND/controladorAutenticacion"}getUsuarioAutenticado(){return this._usuario||(this._usuario=JSON.parse(localStorage.getItem("autenticado"))||void 0),this._usuario}agregarNuevoUsuario(l){return this.http.post(`${this.baseUrl}?accion=crear`,l).pipe((0,g.b)(u=>{console.log(u),this._usuario=u,localStorage.clear(),localStorage.setItem("autenticado",JSON.stringify(this._usuario))}))}autenticarUsuario(l){return this.http.post(`${this.baseUrl}?accion=autenticar`,l).pipe((0,g.b)(u=>{console.log(u),this._usuario=u,localStorage.clear(),localStorage.setItem("autenticado",JSON.stringify(this._usuario))}))}verificarTienePerfil(l){return this.http.get(`${this.baseUrl}?accion=verificarTienePerfil&nombre=${l}`)}}return t.\u0275fac=function(l){return new(l||t)(h.LFG(n.eN))},t.\u0275prov=h.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},2839:(U,A,r)=>{r.d(A,{s:()=>n});var g=r(7716),h=r(1841);let n=(()=>{class d{constructor(f){this.http=f,this.baseUrl="http://localhost:8080/REVISTLAND/controladorFechaGlobal"}obtenerFecha(){return this.http.get(`${this.baseUrl}?accion=obtenerFecha`)}cambiarFecha(f){return this.http.post(`${this.baseUrl}?accion=cambiarFecha`,f)}}return d.\u0275fac=function(f){return new(f||d)(g.LFG(h.eN))},d.\u0275prov=g.Yz7({token:d,factory:d.\u0275fac,providedIn:"root"}),d})()}}]);