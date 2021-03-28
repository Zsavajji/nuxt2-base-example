export default (context, inject) => {
  inject('env', process.env.appEnv)
  inject('isDevelopment', process.env.appEnv === 'development')
}
