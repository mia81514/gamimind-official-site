module Api
  class PostsController < ApplicationController
    POSTS_PER_PAGE = 30

    def index
      posts = Post.published.last(POSTS_PER_PAGE)
      ok(posts)
    end

    def show
      slug = params[:slug].to_s
      post = Post.published.find_by(slug: slug)
      return error if post.blank?
      ok(post)
    end
  end
end
