<template>
  <avataaars :isCircle='false' :accessoriesType="accessoriesType" :clotheType="clotheType" :clotheColor="clotheColor" :eyebrowType="eyebrowType" :eyeType="eyeType" :facialHairColor="facialHairColor" :facialHairType="facialHairType" :graphicType="graphicType" :hairColor="hairColor" :mouthType="mouthType" :skinColor="skinColor" :topType="topType" class="rounded-circle"></avataaars>
</template>

<script>
import Avataaars from 'vuejs-avataaars'

export default {
  components: {
    Avataaars
  },
  name: 'user-profile',
  data() {
    return {};
  },
  computed: {
    skinColor: {
      get() {
        return this.$store.getters.avatar.skinColor;
      },
      set(value) {
        this.$store.commit({
          type: 'avatar',
          key: 'skinColor',
          value,
        })
      }
    },
    accessoriesType: {
      get() {
        return this.$store.getters.avatar.accessoriesType;
      },
      set(value) {
        this.$store.commit({
          type: 'avatar',
          key: 'accessoriesType',
          value,
        })
      }
    },
    clotheType: {
      get() {
        return this.$store.getters.avatar.clotheType;
      },
      set(value) {
        this.$store.commit({
          type: 'avatar',
          key: 'clotheType',
          value,
        })
      }
    },
    clotheColor: {
      get() {
        return this.$store.getters.avatar.clotheColor;
      },
      set(value) {
        this.$store.commit({
          type: 'avatar',
          key: 'clotheColor',
          value,
        })
      }
    },
    eyebrowType: {
      get() {
        return this.$store.getters.avatar.eyebrowType;
      },
      set(value) {
        this.$store.commit({
          type: 'avatar',
          key: 'eyebrowType',
          value,
        })
      }
    },
    eyeType: {
      get() {
        return this.$store.getters.avatar.eyeType;
      },
      set(value) {
        this.$store.commit({
          type: 'avatar',
          key: 'eyeType',
          value,
        })
      }
    },
    facialHairColor: {
      get() {
        return this.$store.getters.avatar.facialHairColor;
      },
      set(value) {
        this.$store.commit({
          type: 'avatar',
          key: 'facialHairColor',
          value,
        })
      }
    },
    facialHairType: {
      get() {
        return this.$store.getters.avatar.facialHairType;
      },
      set(value) {
        this.$store.commit({
          type: 'avatar',
          key: 'facialHairType',
          value,
        })
      }
    },
    graphicType: {
      get() {
        return this.$store.getters.avatar.graphicType;
      },
      set(value) {
        this.$store.commit({
          type: 'avatar',
          key: 'graphicType',
          value,
        })
      }
    },
    hairColor: {
      get() {
        return this.$store.getters.avatar.hairColor;
      },
      set(value) {
        this.$store.commit({
          type: 'avatar',
          key: 'hairColor',
          value,
        })
      }
    },
    mouthType: {
      get() {
        return this.$store.getters.avatar.mouthType;
      },
      set(value) {
        this.$store.commit({
          type: 'avatar',
          key: 'mouthType',
          value,
        })
      }
    },
    topType: {
      get() {
        return this.$store.getters.avatar.topType;
      },
      set(value) {
        this.$store.commit({
          type: 'avatar',
          key: 'topType',
          value,
        })
      }
    }
  }
};
</script>

<style></style>
