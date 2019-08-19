export default function(req, res, next) {
  if (req.originalUrl.includes('admin')) res.spa = true
  next()
}
