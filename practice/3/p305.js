function removeKey(objects, key) {
  return objects.map((obj) => {
    const copiedObj = Object.assign({}, obj);
    delete copiedObj[key];
    return copiedObj;
  });
}

function v2(objects, key) {
  return objects.map(({ [key]: _, ...rest }) => rest);
}
