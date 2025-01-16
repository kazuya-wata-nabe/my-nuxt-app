FROM "pandoc/latex:latest-ubuntu"

RUN apt update && \
  tlmgr update --self --all && \
  tlmgr install collection-langjapanese

# docker run --rm --volume "$(pwd):/data" --user $(id -u):$(id -g) my-pandoc \
# index.md -o README.pdf \
# --pdf-engine=lualatex -V linkcolor=blue -V documentclass=ltjsarticle -V luatexjapresetoptions=fonts-noto-cjk
