export function RegisterForm() {
  return `
  <form id="registerForm">
   <div class="form-group">
     <label for="nombre">Nombre</label>
     <input type="text" class="form-control" id="nombre" name="nombre">
    </div>
    <div class="form-group">
     <label for="mail">Mail</label>
     <input type="email" class="form-control" id="mail" name="mail">
    </div>
    <div class="form-group">
     <label for="pass">Password</label>
     <input type="password" class="form-control" id="pass" name="pass">
    </div>
    <input type="submit" id="registro" value="REGISTRARSE"/>
  </form>
  `
}