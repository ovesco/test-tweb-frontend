<template>
    <div id="app">
        <nav class="navbar navbar-expand-lg navbar-light bg-light mb-3">
            <div class="container">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item mr-3">
                        <router-link :to="{ name: 'popular' }">Populaires</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link :to="{ name: 'upcoming' }">A venir</router-link>
                    </li>
                </ul>
                Guillaume Hochet
            </div>
        </nav>
        <router-view/>
    </div>
</template>

<style lang="scss">
    #app {
        background: #eee;
    }
</style>
