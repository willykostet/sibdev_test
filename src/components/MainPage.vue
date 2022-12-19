<template>
  <div class="main-page-wrapper">

    <div v-if="!alert" class="search-page">
      <header class="nav-bar">
        <div class="container">
          <nav>

            <img src="../assets/logo.svg" alt="">
            <ul class="nav">
              <li :class="[active == 'search' ? 'active' : '']" @click="active = 'search'">Поиск</li>
              <li :class="[active == 'fav' ? 'active' : '']" @click="active = 'fav'">Избранное</li>
            </ul>
            <button @click="logOut()" class="logout">Выйти</button>
          </nav>
        </div>
      </header>
      <div class="container">
        <div v-if="active == 'search'">
          <h1 class="header-search">Поиск видео</h1>
          <div class="searchbar">
            <form action="" class="search-form" @submit.prevent="searchVideos(inputed, 12)">
              <input class="searchbar-input" v-model="inputed" type="text" placeholder="Что хотите посмотреть?">
              <img @click="alert = true" src="../assets/like.svg" alt="" class="like-basic">
              <button type="submit" class="search-btn">Найти</button>
            </form>
            <div v-if="favAlert" class="fav-alert">
              <p>Поиск сохранён в разделе «Избранное»</p>
              <p @click="active = 'fav'; favAlert = false">Перейти в избранное</p>
            </div>
          </div>
          <div v-if="videos" class="result">
            <div class="result-header">
              <p> Видео {{ found }} по запросу «{{ inputed }}»</p>
              <div class="view-list">
                <div class="view-item" @click="setView = 0">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 6H21" stroke="#272727" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round" />
                    <path d="M8 12H21" stroke="#272727" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round" />
                    <path d="M8 18H21" stroke="#272727" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round" />
                    <path d="M3 6H3.01" stroke="#272727" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round" />
                    <path d="M3 12H3.01" stroke="#272727" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round" />
                    <path d="M3 18H3.01" stroke="#272727" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round" />
                  </svg>

                </div>
                <div class="view-item" @click="setView = 1">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 5H5V10H10V5Z" stroke="#272727" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round" />
                    <path d="M19 5H14V10H19V5Z" stroke="#272727" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round" />
                    <path d="M19 14H14V19H19V14Z" stroke="#272727" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round" />
                    <path d="M10 14H5V19H10V14Z" stroke="#272727" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round" />
                  </svg>
                </div>
              </div>
            </div>
            <div class="video-list" v-if="setView == 0">
              <div v-for="v in videos" :key="v.id.videoId" class="video-item">
                <iframe :src="getVideoUrl(v.id.videoId)" frameborder="0"></iframe>
                <h2 class="video-item-title">{{ shortTitle(v.snippet.title, 45) }}</h2>
                <h3 class="video-item-subtitle">{{ shortTitle(v.snippet.channelTitle, 30) }}</h3>
                <p>{{ getVideoDuration(v.id.videoId) }}</p>
              </div>
            </div>
            <div class="video-list list-wide" v-else>
              <div v-for="v in videos" :key="v.id.videoId" class="video-item item-wide">
                <iframe :src="getVideoUrl(v.id.videoId)" frameborder="0"></iframe>
                <div class="item-descriptions">
                  <h2 class="video-item-title">{{ v.snippet.title }}</h2>
                  <h3 class="video-item-subtitle">{{ v.snippet.channelTitle }}</h3>
                  <p>{{ getVideoDuration(v.id.videoId) }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div v-if="active == 'fav'">
          <h1 class="header-search">Избранное</h1>

          <div class="favlist">
            <p class="favlist-item" @click="searchVideos(f.request, f.maxValue); active = 'search'; inputed = f.request"
              v-for="f in fav" :key="f.title">
              {{ f.title }}</p>
          </div>

        </div>
      </div>
    </div>

    <div v-else class="alert">
      <div class="alert-wrap">
        <form class="request-form">
          <h2 class="alert-title">Сохранить запрос</h2>
          <label>Запрос</label>
          <input v-model="alertData.request" type="text" placeholder="чем кормить кота">
          <label>* Название</label>
          <input v-model="alertData.title" type="text" placeholder="Укажите название">
          <label>Сортировать по</label>
          <select name="select">
            <option value="value1">Значение 1</option>
            <option value="value2" selected>Значение 2</option>
            <option value="value3">Значение 3</option>
          </select>
          <label>Максимальное количество</label>
          <div class="range-input-wrapper">
            <input type="range" class="range" id="volume" name="volume" min="0" max="50" v-model="alertData.maxValue">
            <input class="range-input" v-model="alertData.maxValue" type="text" />
          </div>
          <p class="error" v-if="errored">{{ errored }}</p>
          <div class="alert-buttons">
            <button type="button" @click="alert = false; errored = null">Не сохранять</button>
            <button type="button" class="save" @click="save()">Сохранить</button>
          </div>

        </form>

        <!-- <div @click="alert=false" class="alert-close">sd</div> -->
      </div>

    </div>
  </div>
</template>
  
<script>
const API_KEY = 'AIzaSyB35wx3eP2JQqWHVQq4wR1kDms0airauXs';
import axios from 'axios'
export default {
  name: 'MainPage',
  data() {
    return {
      favAlert: false,
      errored: false,
      fav: [],
      found: null,
      active: 'search',
      alert: false,
      inputed: null,
      videos: null,
      alertData: {
        request: null,
        title: null,
        maxValue: 12
      },
      setView: 1
    }
  },
  watch: {
    inputed() {
      this.alertData.request = this.inputed
    }
  },
  created() {
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
          this.found = max
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

      if (!this.alertData.title && !this.alertData.request) { console.log(this.errored = 'Заполните поля'); return false }
      if (!this.alertData.title) { console.log(this.errored = 'Введите название'); return false }
      if (!this.alertData.request) { console.log(this.errored = 'Введите запрос'); return false }
      let r = {
        request: this.alertData.request,
        title: this.alertData.title,
        maxValue: this.alertData.maxValue
      }
      let currentUser = localStorage.getItem('currentUser')
      let currentUserData = JSON.parse(localStorage.getItem(currentUser))
      currentUserData.push(r)
      localStorage.setItem(currentUser, JSON.stringify(currentUserData))
      this.updateFav()
      this.alert = false
      this.errored = false
      this.favAlert = true
    },
    logOut() {
      localStorage.removeItem('sibdevAccess')
      this.$router.push("/auth")
    },
    shortTitle(str, length) {
      const str2 = str.slice(0, length)
      return str2 + '...'
    }
  }
}
</script>
  
<style scoped>
.error {
  color: red;
  margin-bottom: 20px;
}

.nav-bar {
  background: white;
}

button {
  cursor: pointer;
}

.active {
  color: #1390E5;
  border-bottom: 2px solid #1390E5;
}

.fav-alert {
  position: absolute;
  bottom: -100%;
  font-size: 16px;
  line-height: 24px;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.15);
  border-radius: 10px;
  right: 0;
}


.search-page {
  width: 100%;
  padding: 10px;
}

nav {
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
  cursor: pointer;
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
  width: 100%;
  margin-top: 12px;
}

.search-form {
  display: flex;
  align-items: center;
}

.searchbar-input {
  /* padding: 5px; */
  width: 100%;
  height: 100%;
  font-size: 18px;
  border: 2px solid rgba(23, 23, 25, 0.2);
  line-height: 30px;
  padding: 10px 20px;
  border-radius: 10px 0px 0px 10px;
}

.like-basic {
  cursor: pointer;
  position: absolute;
  right: 110px;
  top: 10px
}



.alert-wrap {
  position: fixed;
  width: 100%;
  height: 100vh;
  background: #75C7FF;
}



.request-form {
  /* padding-top: 30px; */
  max-width: 510px;
  width: 100%;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  box-shadow: 0px 10px 50px rgba(19, 144, 229, 0.8);
  border-radius: 10px;
  padding: 30px !important;
  background-color: white;
}

.alert-title {
  font-size: 18px;
  line-height: 28px;
  text-align: center;
  margin: 0 auto;
  margin-bottom: 36px;
}

.request-form input {
  width: 100%;
  height: 48px;
  ;

  border: 1px solid rgba(23, 23, 25, 0.1);
  border-radius: 10px;
  padding: 5px 20px;
  font-size: 20px;
  line-height: 24px;
  margin-bottom: 24px;
}

.alert-buttons {
  width: 100%;
  display: flex;
  justify-content: space-between;

}

.alert-buttons button {
  max-width: 210px;
  width: 100%;
  border-radius: 10px;
  font-size: 18px;
  line-height: 24px;
  border: 0;
  padding: 14px 0px;
  text-align: center;
  cursor: pointer;
  color: #1390E5;
  background: white;
  border: 1px solid #1390E5;
}

.alert-buttons .save {
  background: #1390E5;
  color: white;
}

.range-input-wrapper {
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
}

.range-input {
  max-width: 65px;
}

label {
  font-size: 16px;
  line-height: 22px;
}

.result {
  width: 100%;
  margin-top: 40px;
}

.result-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.view-list {
  display: flex;
  align-items: center;
}

.view-item {
  width: 24px;
  height: 24px;
  cursor: pointer;
  margin-left: 10px;
}

.header-search {
  margin-top: 40px;
  font-weight: normal;
}

.video-list {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}

.video-item {
  max-width: 245px;
  width: 100%;
  margin-bottom: 28px;
}

.video-item iframe {
  max-width: 100% !important;
  width: auto !important;
  height: auto !important;
  border: 1px solid #35A2EC;
  border-radius: 10px;
  background: white;
  overflow: hidden;
}

.video-item-title {
  font-weight: bold;
  max-width: 100%;
  font-size: 14px;
  line-height: 16px;
  margin-top: 8px;
}

.video-item-subtitle {
  font-weight: 400;
  margin-top: 8px;
  font-size: 14px;
  line-height: 16px;
  color: rgba(23, 23, 25, 0.3);
}

.item-wide {
  max-width: 100%;
  display: flex;

}

.item-wide .video-item-title {
  font-size: 16px;
  line-height: 20px;
}

.item-wide .video-item-subtitle {
  font-size: 16px;
  line-height: 20px;
}

.item-descriptions {
  margin-left: 20px;
}

.favlist-item {
  cursor: pointer;
  /* margin-top: 20%; */
  padding: 15px 30px;
  font-size: 16px;
  line-height: 20px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.128);
  font-weight: 600;
}

.favlist-item:first-child {
  /* margin-top: 20%; */
  margin-top: 50px;
}
</style>
  