export default ({ $axios, app, redirect, store }) => {
  $axios.onRequest(config => {
    config.headers.post['token'] = '7802E505-3136-48CE-BE3D-82A4FB7907E0';
  });

}