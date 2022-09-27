export function LoginForm() {
  return `
  <form id="loginForm">
   <div class="form-group">
     <label for="nombre">Nombre</label>
     <input type="text" class="form-control" id="nombre" name="nombre">
    </div>
    <div class="form-group">
     <label for="pass">Password</label>
     <input type="password" class="form-control" id="pass" name="pass">
    </div>
    <input type="submit" id="loguearse" value="Entrar"/>
  </form>
  `
}