class ProjectsController < ApplicationController
    def show
      @project_name = params[:id]
    end
  end
  