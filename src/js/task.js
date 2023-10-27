export default function showAttack(object) {
  const { special } = object;

  special.forEach((item) => {
    if (!Object.prototype.hasOwnProperty.call(item, 'description')) {
      const obj = item;
      obj.description = 'Описание недоступно';
    }
  });
  return special;
}
