import chRequest from './index'
export const getBanners= ()=>chRequest.get("/banner",{type:2})
export const getRankings=(idx)=>chRequest.get("/top/list",{idx})
export const  getSongMenu=(cat="全部", limit=6, offset=0) => chRequest.get("/top/playlist", {
      cat,
      limit,
      offset
    })