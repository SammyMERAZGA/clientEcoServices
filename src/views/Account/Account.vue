<script lang="ts" src="./index.ts"></script>
<style src="./style.css"></style>

<template>
  <div>
    <div class="page-holder bg-gray-100">
      <div class="container px-lg-4">
        <section>
          <div class="row">
            <div class="col-lg-4">
              <div class="card card-profile mb-4">
                <div
                  class="card-header"
                  style="
                    background-image: url(https://steamcdn-a.akamaihd.net/steam/apps/547690/header.jpg);
                  "
                ></div>
                <div class="card-body text-center">
                  <img
                    class="card-profile-img"
                    src="https://i.pinimg.com/originals/dc/0f/e9/dc0fe9fe1e29ab605c9211ae8972c379.jpg"
                    alt="Gon"
                  />
                  <h3 class="mb-3">Sammy MERAZGA</h3>
                  <p class="mb-4">Développeur Full Stack</p>
                </div>
              </div>
              <form class="card mb-4">
                <div class="card-header">
                  <h4 class="card-heading mt-2">Mon Profil</h4>
                </div>
                <div class="card-body">
                  <div class="row mb-3">
                    <div class="col-auto d-flex align-items-center">
                      <img
                        class="avatar avatar-lg p-1"
                        src="https://i.pinimg.com/originals/dc/0f/e9/dc0fe9fe1e29ab605c9211ae8972c379.jpg"
                        alt="Avatar"
                      />
                    </div>
                    <div class="col">
                      <label class="form-label">Pseudo</label>
                      <input
                        class="form-control"
                        placeholder="Votre nom"
                        value="Merazga"
                      />
                    </div>
                    <!-- {{ userSmy }} -->
                  </div>
                  <div class="mb-3">
                    <label class="form-label">Email</label>
                    <input
                      class="form-control"
                      placeholder="Votre e-mail"
                      value="sammy.merazga@gmail.com"
                    />
                  </div>
                  <label class="form-label mt-1">Mot de passe</label>
                  <input
                    class="form-control"
                    type="password"
                    placeholder="Entrez votre mot de passe"
                    value="root"
                  />
                  <label class="form-label mt-4">Nouveau mot de passe</label>
                  <input
                    class="form-control"
                    type="password"
                    placeholder="Entrez votre nouveau mot de passe"
                  />
                </div>
                <div class="card-footer text-end">
                  <button class="btn btn-primary">Sauvegarder</button>
                </div>
              </form>
            </div>
            <div class="col-lg-8">
              <form class="card mb-4 mt-15">
                <div class="card-header">
                  <h4 class="card-heading mt-3">Modifier le profil</h4>
                </div>
                <div class="card-body">
                  <div class="row">
                    <div class="col-md-5">
                      <div class="mb-4">
                        <label class="form-label">Entreprise</label>
                        <input
                          class="form-control"
                          type="text"
                          placeholder="Nom de l'entreprise"
                          value="Tempo One"
                        />
                      </div>
                    </div>
                    <div class="col-sm-6 col-md-3">
                      <div class="mb-4">
                        <label class="form-label">Pseudo</label>
                        <input
                          class="form-control"
                          type="text"
                          placeholder="Votre pseudo"
                          value="Smyy"
                        />
                      </div>
                    </div>
                    <div class="col-sm-6 col-md-4">
                      <div class="mb-4">
                        <label class="form-label">Addresse e-mail</label>
                        <input
                          class="form-control"
                          type="email"
                          placeholder="E-mail"
                          value="sammy.merazga@gmail.com"
                        />
                      </div>
                    </div>
                    <div class="col-sm-6 col-md-6">
                      <div class="mb-4">
                        <label class="form-label">Prénom</label>
                        <input
                          class="form-control"
                          type="text"
                          placeholder="Votre prénom"
                          value="Sammy"
                        />
                      </div>
                    </div>
                    <div class="col-sm-6 col-md-6">
                      <div class="mb-4">
                        <label class="form-label">Nom</label>
                        <input
                          class="form-control"
                          type="text"
                          placeholder="Votre nom"
                          value="Merazga"
                        />
                      </div>
                    </div>
                    <div class="col-md-12">
                      <div class="mb-4">
                        <label class="form-label">Adresse</label>
                        <input
                          class="form-control"
                          type="text"
                          placeholder="Adresse"
                          value="My Address"
                        />
                      </div>
                    </div>
                    <div class="col-sm-6 col-md-4">
                      <div class="mb-4">
                        <label class="form-label">Ville</label>
                        <input
                          class="form-control"
                          type="text"
                          placeholder="Ville"
                          value="Marseille"
                        />
                      </div>
                    </div>
                    <div class="col-sm-6 col-md-3">
                      <div class="mb-4">
                        <label class="form-label">Code postal</label>
                        <input
                          class="form-control"
                          type="number"
                          placeholder="Code postal"
                          value="13015"
                        />
                      </div>
                    </div>
                    <div class="col-sm-6 col-md-5">
                      <div class="mb-4">
                        <label class="form-label">Pays</label>
                        <input
                          class="form-control"
                          type="text"
                          placeholder="Pays"
                          value="France"
                        />
                      </div>
                    </div>
                    <div class="col-md-12">
                      <div class="mb-0">
                        <label class="form-label">À propos</label>
                        <textarea
                          class="form-control"
                          rows="5"
                          placeholder="Entrez une description"
                        ></textarea>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="card-footer text-end">
                  <button class="btn btn-primary" type="submit">
                    Mettre à jour le profil
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </div>
    </div>
    <Footer />
  </div>
</template>
