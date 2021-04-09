export default (context, inject) => {
  inject('env', process.env.currentEnv)
  inject('isDevelopment', process.env.currentEnv === 'development')
}
