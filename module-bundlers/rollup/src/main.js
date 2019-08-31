export default function () {
  import('./foo.js')
    .then(({ default: foo }) => console.log(foo));
}
