<template>
  <div class="card bg-neutral rounded mt-6">
    <div class="card-body">
      <div className="flex flex-row justify-between items-start">
        <div className="flex flex-col gap-2 w-2/3 pr-20">
          <h2 class="card-title">{{ location.name }}</h2>
          <p>{{ location.address }}</p>
          <p>{{ location.category }}</p>
          <BadgeList :items="location.cuisine" />
        </div>
        <div className="w-1/4">
          <LocationStats :location="location" />
        </div>
      </div>
      <div class="card bg-accent rounded border-accent my-8">
        <div class="card-body">
          <h3 class="card-title">
            Menu:{{
              location.plantBasedLevel === "full"
                ? "Fully Plant-Based Menu"
                : "Includes Plant-Based Options"
            }}
          </h3>
          <p>Menu Aquired on: {{ location.dateUpdated }}</p>
          <p>{{ location.menu }}</p>
        </div>
      </div>
      <div className="flex justify-between items-center mb-8 mt-4">
        <div className="h-auto w-44">
          <img
            src="https://media.cntraveler.com/photos/611164da7467f3ce5f02f63c/master/w_320%2Cc_limit/Work%2520&%2520Class%2C%2520Denver_222889720_551963972502510_7409480855517024306_n.jpg"
            alt="placeholder"
          />
        </div>
        <div className="h-auto w-44">
          <img
            src="https://media.cntraveler.com/photos/611164da7467f3ce5f02f63c/master/w_320%2Cc_limit/Work%2520&%2520Class%2C%2520Denver_222889720_551963972502510_7409480855517024306_n.jpg"
            alt="placeholder"
          />
        </div>
        <div className="h-auto w-44">
          <img
            src="https://media.cntraveler.com/photos/611164da7467f3ce5f02f63c/master/w_320%2Cc_limit/Work%2520&%2520Class%2C%2520Denver_222889720_551963972502510_7409480855517024306_n.jpg"
            alt="placeholder"
          />
        </div>
        <div className="h-auto w-44">
          <img
            src="https://media.cntraveler.com/photos/611164da7467f3ce5f02f63c/master/w_320%2Cc_limit/Work%2520&%2520Class%2C%2520Denver_222889720_551963972502510_7409480855517024306_n.jpg"
            alt="placeholder"
          />
        </div>
        <div className="h-auto w-44">
          <img
            src="https://media.cntraveler.com/photos/611164da7467f3ce5f02f63c/master/w_320%2Cc_limit/Work%2520&%2520Class%2C%2520Denver_222889720_551963972502510_7409480855517024306_n.jpg"
            alt="placeholder"
          />
        </div>
      </div>

      <div class="card bg-secondary rounded border-secondary my-4">
        <div class="card-body">
          <h4 class="card-title">Reviews</h4>
          <div class="card bg-primary rounded border-primary">
            <div class="card-body">
              <p class="card-title">Editor Review: 07/15/2024</p>
              <p>
                PLACEHOLDER: Located in the heart of the city, this vegan
                restaurant offers a delightful array of plant-based dishes
                crafted with fresh, locally sourced ingredients. From their
                innovative takes on classic comfort foods to their vibrant
                salads and delectable desserts, each dish reflects a commitment
                to both flavor and sustainability. The cozy ambiance and
                attentive service make it a perfect spot for both seasoned
                vegans and curious diners looking to explore plant-based
                cuisine.
              </p>
            </div>
          </div>
          <div class="card bg-primary rounded border-primary">
            <div class="card-body">
              <p class="card-title">Angela's Review: 07/15/2024</p>
              <p>
                PLACEHOLDER: Located in the heart of the city, this vegan
                restaurant offers a delightful array of plant-based dishes
                crafted with fresh, locally sourced ingredients. From their
                innovative takes on classic comfort foods to their vibrant
                salads and delectable desserts, each dish reflects a commitment
                to both flavor and sustainability. The cozy ambiance and
                attentive service make it a perfect spot for both seasoned
                vegans and curious diners looking to explore plant-based
                cuisine.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="card-actions justify-between flex">
        <div>
          <p>Tags:</p>
          <BadgeList :items="location.cuisine"/>
        </div>
        <a
            :href="`https://www.google.com/maps/search/?api=1&query=${location.name} denver`"
            target="_blank"
            rel="noreferrer"
          >
            <button class="btn rounded">View on Google Maps</button>
          </a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Location } from "~/types/globals";

defineProps<{ location: Location }>();
</script>

<style scoped></style>
