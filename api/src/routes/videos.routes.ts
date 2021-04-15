import { Router} from 'express'
import * as VideoCtrl from './videos.controller'
const router=Router();
router.get('/videos',VideoCtrl.getVideos)
router.get('/videos/:id',VideoCtrl.getVideo)
router.post('/videos',VideoCtrl.createVideos)
router.delete('/videos/:id',VideoCtrl.deleteVideo)
router.put('/videos/:id',VideoCtrl.updateVideo)
export default router