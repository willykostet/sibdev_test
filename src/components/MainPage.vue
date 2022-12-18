<template>
  <div v-if="!alert" class="search-page">
    <header>
      <img src="../assets/logo.svg" alt="">
      <ul class="nav">
        <li :class="[active=='search'?'active':'']" @click="active = 'search'">Поиск</li>
        <li :class="[active=='fav'?'active':'']" @click="active = 'fav'">Избранное</li>
      </ul>
      <button @click="logOut()" class="logout">Выйти</button>
    </header>
    <div v-if="active == 'search'">
      <h1>Поиск видео</h1>
      <div class="searchbar">
        <input class="searchbar-input" v-model="inputed" type="text" placeholder="Что хотите посмотреть?">
        <img @click="alert = true" src="../assets/like.svg" alt="" class="like-basic">
        <button @click="searchVideos(inputed, 12)" class="search-btn">Найти</button>
      </div>
      <div v-if="videos" class="result">
        <div class="result-header">
          <p>Видео по запросу «{{ inputed }}»</p>
          <img src="" alt="" class="list-icon">
          <img src="" alt="" class="cards-icon">
        </div>
        <div v-for="v in videos" :key="v.id.videoId" class="video">
          <iframe :src="getVideoUrl(v.id.videoId)" frameborder="0"></iframe>
          <h2>{{ v.snippet.title }}</h2>
          <h3>{{ v.snippet.channelTitle }}</h3>
          <p>{{ getVideoDuration(v.id.videoId) }}</p>
        </div>
      </div>
    </div>
    <div v-if="active == 'fav'">
      <p @click="searchVideos(f.request, f.maxValue);active='search';inputed=f.request" v-for="f in fav" :key="f.title">{{f.title}}</p>
    </div>
  </div>

  <div v-else class="alert">
    <div class="alert-wrap">
      <form>
        <label>Запрос</label>
        <input v-model="alertData.request" type="text" placeholder="чем кормить кота">
        <label>* Название</label>
        <input v-model="alertData.title" type="text" placeholder="Укажите название">
        <label>Сортировать по</label>
        <label>Максимальное количество</label>
        <input v-model="alertData.maxValue" type="number">
        <div class="alert-buttons">
          <button type="button" @click="alert = false">Не сохранять</button>
          <button type="button" @click="save()">Сохранить</button>
        </div>
      </form>

    </div>
    <!-- <div @click="alert=false" class="alert-close">sd</div> -->

  </div>
</template>
  
<script>
const API_KEY = 'AIzaSyB35wx3eP2JQqWHVQq4wR1kDms0airauXs';
import axios from 'axios'
export default {
  name: 'MainPage',
  data() {
    return {
      fav: [],
      active: 'search',
      alert: false,
      inputed: null,
      videos: null,
      alertData: {
        request: null,
        title: null,
        maxValue: null
      }
    }
  },
  created(){
    this.updateFav()
  },
  methods: {
    updateFav() {
      let currentUser = localStorage.getItem('currentUser')
      this.fav = JSON.parse(localStorage.getItem(currentUser))
    },
    searchVideos(searchTerm, max) {
      axios
        .get("https://www.googleapis.com/youtube/v3/search", {
          params: {
            key: API_KEY,
            type: "video",
            part: "snippet",
            maxResults: max,
            q: searchTerm
          }
        })
        .then(response => {
          console.log(response)
          this.videos = response.data.items;
          // this.selectedVideo = this.videos[0];
        });
    },
    getVideoUrl(id) {
      // const { videoId } = this.id.videoId;
      return `https://www.youtube.com/embed/${id}`;
    },
    getVideoDuration(id) {

      axios
        .get("https://www.googleapis.com/youtube/v3/videos", {
          params: {
            key: API_KEY,
            id: id,
            part: "snippet,contentDetails",

          }
        })
        .then(response => {
          let result = this.convertISO8601ToSeconds(response.data.items[0].contentDetails.duration)
          console.log(result)
          return result
        })


    },
    convertISO8601ToSeconds(input) {

      var reptms = /^PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?$/;
      var hours = 0, minutes = 0, seconds = 0, totalseconds;

      if (reptms.test(input)) {
        var matches = reptms.exec(input);
        if (matches[1]) hours = Number(matches[1]);
        if (matches[2]) minutes = Number(matches[2]);
        if (matches[3]) seconds = Number(matches[3]);
        totalseconds = hours * 3600 + minutes * 60 + seconds;
      }

      return (totalseconds);
    },
    save() {
      console.log(1)
      let r = {
        request: this.alertData.request,
        title: this.alertData.title,
        maxValue: this.alertData.maxValue
      }
      let currentUser = localStorage.getItem('currentUser')
      let currentUserData = JSON.parse(localStorage.getItem(currentUser))
      currentUserData.push(r)
      console.log(currentUserData)
      localStorage.setItem(currentUser, JSON.stringify(currentUserData))
      this.updateFav()
      this.alert = false
    },
    logOut() {
      localStorage.removeItem('sibdevAccess')
      this.$router.push("/auth")
    }
  }
}
</script>
  
<style scoped>
.active{
  color: #1390E5;
  border-bottom: 2px solid #1390E5;
}
.search-page {
  width: 100%;
  padding: 10px;
}

header {
  display: flex;
  align-items: center;
  padding: 10px 0;
  width: 100%;
  justify-content: flex-start;
}

header img {
  width: 48px;
}

/* iframe{
  width: 90%;
  height: 100%;
} */
ul {
  list-style: none;
  display: flex;
  gap: 20px;
  margin: 0;
  padding: 0;
}

li {
  font-size: 14px;
  padding: 10px;
  line-height: 28px;
  color: rgba(39, 39, 39, 0.3);
}

.logout {
  font-size: 14px;
  line-height: 28px;
  color: #1390E5;
  border: 0;
  background-color: white;
  margin-left: auto;
}

.searcbar {
  display: flex;
  border-radius: 10px;
}

.searchbar-input {
  /* padding: 5px; */
  height: 100%;
  font-size: 18px;
  border: 2px solid rgba(23, 23, 25, 0.2);
  line-height: 30px;
  padding: 10px 20px;
  border-radius: 10px 0px 0px 10px;
}

.search-btn {
  font-size: 18px;
  line-height: 24px;
  color: white;
  background: #1390E5;
  height: 100%;
  padding: 10px 20px;
  border-radius: 0px 10px 10px 0px;
  border: 0;
}

input:focus {
  background: rgba(197, 228, 249, 0.3);
  outline-color: #1390E5;

}

input:focus+.search-btn {
  border: 1px solid #1390E5;
  border-left: 0;
}

.searchbar {
  position: relative;
}

.like-basic {
  position: absolute;
  right: 110px;
  top: 10px
}



.alert-wrap {
  padding: 30px;
}



form {
  /* padding-top: 30px; */
  width: min-content;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 50px auto;
  box-shadow: 0px 10px 50px rgba(19, 144, 229, 0.8);
  border-radius: 10px;
  padding: 30px !important;
  background-color: white;
}

form input {
  width: 200px;

  border: 1px solid rgba(23, 23, 25, 0.1);
  border-radius: 10px;
  padding: 5px 20px;
  font-size: 20px;
  line-height: 24px;
}

.alert-buttons {
  display: flex;
  justify-content: space-between;

}

.alert-buttons button {
  width: 140px;
  border-radius: 10px;
  font-size: 18px;
  line-height: 24px;
  border: 0;
}

label {
  font-size: 16px;
  line-height: 22px;
}
</style>
  