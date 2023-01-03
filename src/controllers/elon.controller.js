import { read, write } from "../utils/model.js";
import { BadRequestError, InternalServerError } from '../utils/errors.js'
import path from 'path'


const ELONGET = (req, res) => {
  try {
  let elons = read('elonlar')
  let hours = read('hour')
  let category = read('category')
  let subCategory = read('subCategory')
  let { search, 
    page = process.DEFAULT.pagination.page,
    limit = process.DEFAULT.pagination.limit, 
  } = req.query

  let data = elons.filter(elon => {
    let bySearch = search ? elon.date.includes(search) || elon.professiya.includes(search) || elon.full_name.includes(search) : true
    
    elons.map( elon => {
      elon.hour = hours.find(hour => hour.hourId == elons.hourId)
      elon.category = category.find(catog => catog.category_id = elons.category_id)
      elon.subCategory = subCategory.find(subCatog => subCatog.sub_category_id == elons.sub_category_id)
    })
    return bySearch
  }).slice( (page - 1) * limit, page * limit )
  

  res.send(data)
  } catch (error) {
    return next( new InternalServerError(500, error.name))
  }
}

const ELONPOST = (req, res, next) => {
  try {
    let elons = read("elonlar");
    let {
      full_name,
      professiya,
      phone,
      elon_title,
      elon_body,
      date,
      hourId,
      category_id,
      sub_category_id,
    } = req.body;
    let { image } = req.files;
    let elon = elons.find(
        (elon) => elon.full_name == full_name || elon.phone == phone
    );
      console.log('wertyui');
    if(elon){
      return next(new BadRequestError(400, 'elon exists'))
    }
    console.log('zxcvbnm');

    let fileName = Date.now() + image.name.replace(/\s/g, "");
    image.mv(path.resolve('uploads', 'img', fileName));
    
    let newElon = {
        elonId: elons.at(-1)?.elonId + 1 || 1,
        full_name,
        professiya,
        phone,
        elon_title,
        image: fileName,
        elon_body,
        date,
        hourId,
        category_id,
        sub_category_id
    }
    console.log('ok');
    elons.push(newElon)
    write('elonlar', elons)
    res.status(201).json({
      status: 201,
      message: "ok",
      data: newElon,
    });
  } catch (error) {
    return next(new InternalServerError(500, error.name));
  }
};

export default {
  ELONPOST,
  ELONGET
};
