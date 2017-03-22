def get_column_titles(table): 
    cols = []
    for th in table.find('tr').find_all('th')[1:]:
        link = th.find('a') 
        if link:
            cols.append({'name':link.text,\
                             'href':link.attrs['href']})
        else:
            cols.append({'name':th.text, 'href':None})
    return cols