const util = {
  cmsToObj(item) {
    item.fields.forEach(field => {
       item[field.slug] = field.value
    })
    delete item.fields
	return item
  }
}

export default util